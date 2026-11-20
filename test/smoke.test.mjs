// Smoke tests for the built Nuxt app (run `yarn build` first).
//
// By default the tests start `nuxt start` on a free local port and check the
// server log. Set TEST_URL to test an already running server instead (for
// example an older image); TEST_NODE_VERSION and TEST_LOG_FILE then provide
// that server's Node version and log for the version and log checks.
// NODE_ENV selects the dotenv file (.env, .env.dev, ...) as in nuxt.config.js.

import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { createServer } from 'node:net'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))

// Build-time settings come from the dotenv file nuxt.config.js picks for NODE_ENV.
const ENV_FILE = ['local', 'dev', 'stg'].includes(process.env.NODE_ENV) ? `.env.${process.env.NODE_ENV}` : '.env'
const DOTENV = Object.fromEntries(readFileSync(path.join(root, ENV_FILE), 'utf8')
  .split('\n').map(line => line.match(/^\s*([\w.-]+)\s*=\s*(.*?)\s*$/)).filter(Boolean).map(m => [m[1], m[2]]))

const ROUTES = [
  '/',
  '/about',
  '/actions',
  '/actions-high-resolution',
  '/commitments',
  '/initiatives',
  '/resources'
]
// nuxt.config.js adds BASE_PATH aliases for every route when BASE_PATH is set
if (DOTENV.BASE_PATH) ROUTES.push(`${DOTENV.BASE_PATH}/`, `${DOTENV.BASE_PATH}/about`)

// Lines matching these patterns in the server log mean something is wrong.
const BAD_LOG = /\b(error|warn(ing)?|deprecat\w*|unhandled|exception|ECONNREFUSED|ENOTFOUND|EAI_AGAIN)\b/i

let baseUrl = process.env.TEST_URL ? process.env.TEST_URL.replace(/\/$/, '') : null
let server = null
let serverLog = ''

function freePort () {
  return new Promise((resolve, reject) => {
    const srv = createServer()
    srv.unref()
    srv.on('error', reject)
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address()
      srv.close(() => resolve(port))
    })
  })
}

async function waitForServer (url, timeoutMs) {
  const deadline = Date.now() + timeoutMs
  let lastError
  while (Date.now() < deadline) {
    if (server && server.exitCode !== null) {
      throw new Error(`nuxt exited with code ${server.exitCode}\n${serverLog}`)
    }
    try {
      const res = await fetch(url)
      await res.arrayBuffer()
      return
    } catch (err) {
      lastError = err
      await new Promise(resolve => setTimeout(resolve, 250))
    }
  }
  throw new Error(`server did not start: ${lastError}\n${serverLog}`)
}

// Minimal check of a version against ranges like "^22.23.4 || >=26.12.1".
function satisfies (version, range) {
  const parse = v => v.replace(/^v/, '').split('.').map(Number)
  const cmp = (a, b) => {
    for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] - b[i]
    return 0
  }
  const v = parse(version)
  return range.split('||').map(s => s.trim()).some(part => {
    if (part.startsWith('^')) {
      const min = parse(part.slice(1))
      return v[0] === min[0] && cmp(v, min) >= 0
    }
    if (part.startsWith('>=')) return cmp(v, parse(part.slice(2))) >= 0
    throw new Error(`unsupported range: ${part}`)
  })
}

async function get (route) {
  const res = await fetch(baseUrl + route, { redirect: 'manual' })
  const body = Buffer.from(await res.arrayBuffer())
  return { res, body }
}

before(async () => {
  if (baseUrl) return
  assert.ok(existsSync(path.join(root, '.nuxt', 'dist', 'server')), 'run `yarn build` before `yarn test`')
  const port = await freePort()
  baseUrl = `http://127.0.0.1:${port}`
  server = spawn(process.execPath, [
    path.join(root, 'node_modules', 'nuxt', 'bin', 'nuxt.js'),
    'start', '--dotenv', 'false', '--hostname', '127.0.0.1', '--port', String(port)
  ], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] })
  server.stdout.on('data', d => { serverLog += d })
  server.stderr.on('data', d => { serverLog += d })
  await waitForServer(baseUrl + '/', 60000)
})

after(() => {
  if (server) server.kill()
})

test('server Node version satisfies engines.node', () => {
  const version = process.env.TEST_URL ? process.env.TEST_NODE_VERSION : process.version
  assert.ok(version, 'set TEST_NODE_VERSION when using TEST_URL')
  assert.ok(satisfies(version, pkg.engines.node), `${version} does not satisfy ${pkg.engines.node}`)
})

for (const route of ROUTES) {
  test(`GET ${route} returns 200 with a rendered page`, async () => {
    const { res, body } = await get(route)
    assert.equal(res.status, 200)
    assert.match(res.headers.get('content-type'), /text\/html/)
    const html = body.toString('utf8')
    assert.match(html, /<title[^>]*>[^<]*\| UN Biodiversity<\/title>/)
    assert.match(html, /id="__nuxt"/)
    assert.match(html, /window\.__NUXT__/)
  })
}

test('page uses BASE_URL from the dotenv file selected by NODE_ENV', async () => {
  const expected = DOTENV.BASE_URL
  const { body } = await get('/about')
  const canonical = body.toString('utf8').match(/<link[^>]*rel="canonical"[^>]*>/)
  assert.ok(canonical, 'no canonical link')
  assert.ok(canonical[0].includes(`href="${expected}`), `${canonical[0]} does not use ${expected} (${ENV_FILE})`)
})

test('unknown route returns 404', async () => {
  const { res } = await get('/this-page-does-not-exist')
  assert.equal(res.status, 404)
})

test('static assets referenced by the home page are served', async () => {
  const { body } = await get('/')
  const html = body.toString('utf8')
  const assets = [...new Set([...html.matchAll(/_nuxt\/([\w./-]+\.(?:js|css|json))(?=["'])/g)].map(m => m[1]))]
  assert.ok(assets.some(a => a.endsWith('.js')), 'no JS assets found')
  assert.ok(assets.some(a => a.endsWith('.css')), 'no CSS assets found')
  for (const asset of assets) {
    const { res, body: data } = await get(`/_nuxt/${asset}`)
    assert.equal(res.status, 200, `/_nuxt/${asset}`)
    assert.ok(data.length > 0, `/_nuxt/${asset} is empty`)
  }
  const icon = await get('/icon.png')
  assert.equal(icon.res.status, 200)
  assert.match(icon.res.headers.get('content-type'), /image\/png/)
})

test('server log is clean', async () => {
  let log = serverLog
  if (process.env.TEST_URL) {
    if (!process.env.TEST_LOG_FILE) return
    log = readFileSync(process.env.TEST_LOG_FILE, 'utf8')
  }
  const bad = log.split('\n').filter(line => BAD_LOG.test(line))
  assert.deepEqual(bad, [], `unexpected lines in server log:\n${bad.join('\n')}`)
})

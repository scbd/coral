# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Coral Reefs portal of the Secretariat of the Convention on Biological Diversity (SCBD). A Nuxt 2.18 (Vue 2, Vuex,
vue-i18n 7, Bulma) server-rendered site, shipped as a Docker image (`scbd/coral`) that runs `nuxt start` on port 8000.

## Commands

Use yarn (there is a `yarn.lock`; the Docker image installs with `yarn install --frozen-lockfile`).

```bash
yarn install
yarn dev                  # NODE_ENV=local, reads .env.local, hot reload on :8000
yarn build                # production build, reads .env
yarn build:dev            # reads .env.dev   (also build:stg -> .env.stg)
yarn start                # serve the last build (also start:dev, start:stg)
yarn test                 # node:test smoke tests against the built app
```

- Tests need a build first: `yarn build && yarn test`. Build and test with the same `NODE_ENV`, since the tests read
  the dotenv file that `NODE_ENV` selects (e.g. `yarn build:dev && NODE_ENV=dev yarn test`).
- Run a single test by name: `node --test --test-name-pattern="unknown route" "test/**/*.test.mjs"`.
- Test a server that is already running (e.g. a Docker image) instead of starting one: set `TEST_URL`, plus
  `TEST_NODE_VERSION` and `TEST_LOG_FILE` for the Node version and server log checks. See the header of
  [test/smoke.test.mjs](test/smoke.test.mjs) and the "Test image" step of [.github/workflows/ci.yml](.github/workflows/ci.yml).
- The smoke tests fail on any `error`, `warn`, `deprecat*` etc. line in the server log, so new runtime warnings break CI.
- There is no lint script. `.eslintrc.js` extends `standard` with most style rules disabled.
- Supported Node versions are in `engines.node` in `package.json`; a smoke test checks the server's Node version
  against it. The image is built on `node:26-alpine`.

## Environment and build configuration

- `NODE_ENV` picks the dotenv file in [nuxt.config.js](nuxt.config.js): `local` -> `.env.local`, `dev` -> `.env.dev`,
  `stg` -> `.env.stg`, anything else -> `.env` with `NODE_ENV` forced to `production`. All scripts pass
  `--dotenv false` so Nuxt does not load `.env` on its own.
- Settings exposed to the app through `env`: `BASE_URL`, `BASE_PATH`, `API` (defaults to `https://api.cbddev.xyz`),
  `NODE_ENV`, `isLocalHost`. Use `process.env.API` for API calls rather than hard-coding `api.cbd.int`, so dev and
  stg builds do not hit the production API.
- The site is served under a sub-path: when `BASE_PATH` is set, every route gets a `${BASE_PATH}${path}` alias, and
  production builds set webpack `publicPath` to `${BASE_URL}${BASE_PATH}/_nuxt/`.
- Production builds run PurgeCSS over `pages/`, `layouts/` and `components/`. CSS classes that only appear in JS
  strings or external markup get purged.
- The `.env*` files are tracked in git (unlike the SCBD standard below, which says not to commit `.env`).

## Architecture

- **Pages** ([pages/](pages/)): one flat `.vue` file per route. Every page uses the mixin
  [modules/mixins/page.js](modules/mixins/page.js), which sets title, description, canonical URL, Open Graph and
  Twitter meta from the page's i18n keys `title` and `description`, and pulls in the lazy i18n mixin.
- **i18n**: languages are `en, es, fr, ru, ar, zh` (`ar` is RTL; `page.js` sets `dir` on `<html>`). Global strings
  live in `locales/<lang>.json`; per-page strings in `locales/pages/<route-name>/<lang>.json`, loaded on `mounted` by
  [modules/mixins/LazyLoadi18n.js](modules/mixins/LazyLoadi18n.js), cached in the `locale` store module and merged
  into vue-i18n. A new page needs a `locales/pages/<route-name>/` folder with all six language files.
- **Store** ([store/index.js](store/index.js)): classic-mode Vuex. `index.js` imports every module itself, so
  `store/modules` is listed in `.nuxtignore` to stop Nuxt 2.18 from also auto-registering those files. Register new
  modules in `index.js`. `store/modules/schemas/` (events, resource) query the SCBD index API.
- **Plugins** ([modules/plugins/](modules/plugins/)): i18n, vuex-router-sync (exposes `$store.state.route`), image
  API, plus client-only swiper, polyfill and Google Analytics. Registered in `nuxt.config.js`.
- **HTTP**: [modules/api.js](modules/api.js) wraps axios with a `validateStatus` that treats 400/401/403/404/422 as
  non-errors, so callers must check `status` themselves.
- **Responsive**: `@biodiversity/ssr-breakpoints` provides `$breakpoints` (e.g. `isMobile`, `isTouch`) in templates.
- **Layouts**: `home` and `default`.

## CI/CD

GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) replaces the old CircleCI setup. It builds the
Docker image with `BRANCH=<ref name>` (which becomes `NODE_ENV` and so selects the dotenv file), runs it, runs the smoke
tests against it with `TEST_URL`, then pushes to Docker Hub as `scbd/coral` (only from the `scbd` org):

| Ref                        | Image tag(s)                 | Pushed |
| -------------------------- | ---------------------------- | ------ |
| tag `v?N.N.N`              | `<tag without v>`, `latest`  | yes    |
| `master`, `dev`, `stg`     | `<branch>`                   | yes    |
| `stg/<name>`               | `stg-<name>`                 | yes    |
| `release/<name>`           | `release-<name>`             | yes    |
| any other branch           | `build-<sha>`                | no     |

## SCBD development standards

From [software-development-standards.md](https://github.com/scbd/documentation/blob/master/devops/software-development-standards.md)
(not publicly readable; read it with `gh api repos/scbd/documentation/contents/devops/software-development-standards.md -H "Accept: application/vnd.github.raw"`).
Parts that apply to this repo:

**Git**

- GitHub Flow: branch from the Jira ticket, open a PR to `master`, squash and merge, delete the branch.
- Branch names: `({user})/(<type>)/<ticket-id>-<short-description>`, type optional, lowercase, hyphens, 3-5 word
  description, e.g. `bugfix/JIRA-456-login-error`, `chore/update-dependencies`. Types: `feature`, `bugfix`,
  `hotfix`, `release`, `chore`, `docs`, `test`, `spike`.
- Commit subject: `(<scope>) <subject>`, scope optional and lowercase; imperative mood, lowercase, no trailing period,
  max 72 characters. Optional body (wrapped at 72, explains what and why) and footer (`Fixes #123`).
- Small, atomic commits; each one builds and passes tests; no commented-out code, debug statements or WIP commits on
  shared branches. Update docs in the same commit when behavior changes.
- Release tags: `<year>.<weekOfYear>.<patch>`, e.g. `2025.14.0`.
- PR title follows the commit message format; link the issue; PRs need passing CI and 2 approvals (1 from a senior).

**Code**

- Naming: camelCase variables, functions and parameters; PascalCase classes; UPPER_SNAKE_CASE constants and env vars;
  kebab-case files and directories. Existing components and plugins in this repo use PascalCase or camelCase file
  names; do not rename them unless asked.
- Booleans start with `is`/`has` and are positive (`isValid`, not `isInvalid`). Singular names for one record, plural
  for collections.
- Function prefixes: `get` returns a record or throws; `find` returns the record or `null`; `lookup` maps a code to an
  ID or `null`; `search`/`list`/plural `get` return an array (possibly empty); `delete` returns nothing.
- Mandatory parameters are positional; optional ones go in a destructured `options` object. A function returns one
  consistent type.
- Prefer early returns (short-circuit guards) over nested conditionals.
- Style target is Standard JS (semistandard for JS), max line length 120. Keep components to roughly 100-200 lines.
- Comments only where code is complex, explaining why rather than what; JSDoc for function documentation.
- API payload fields are camelCase; `_`-prefixed fields (other than `_id`) are computed expansions, not queryable.

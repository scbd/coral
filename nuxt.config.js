const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

let dotFile = '.env'

if (['local','dev','stg','ios','iosdev'].includes(process.env.NODE_ENV))
  dotFile = `${dotFile}.${process.env.NODE_ENV}`
else 
  process.env.NODE_ENV = 'production'
  
console.info(`##### Building for NODE_ENV: ${process.env.NODE_ENV}`)  
console.info(`##### Reading dotenv file: ${dotFile}`)

require('dotenv').config({path: path.resolve(process.cwd(), dotFile)})
module.exports = {
  server: {
    server: '0.0.0.0',
    port: 8000, // default: 3000
  },
  dev: (process.env.NODE_ENV !== 'production'),
  render:{resourceHints:false},
  env: {
    BASE_URL: process.env.BASE_URL,
    isLocalHost: (process.env.NODE_ENV==='local'),
    API: process.env.API || 'https://api.cbddev.xyz',
    NODE_ENV:process.env.NODE_ENV,
    BASE_PATH:process.env.BASE_PATH
  },
  // ============================================================
  // Headers of the page
  // ============================================================
  head: {
    titleTemplate: '%s | UN Biodiversity',
     __dangerouslyDisableSanitizers: ['script'],
    script: [
      { innerHTML:  'if(typeof navigator !== \'undefined\' )if(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) { console.log = function(){}; }; if(typeof Object.assign!=\'function\'){Object.defineProperty(Object,"assign",{value:function assign(target,varArgs){\'use strict\';if(target==null){throw new TypeError(\'Cannot convert undefined or null to object\');}var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!=null){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey]}}}}return to},writable:true,configurable:true})}' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'nativeUI', content:true },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#00405c' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon.ico' }
    ]
  },
  css: [
    { src: '@/assets/sass/main.sass', lang: 'sass' },
    { src: '@/assets/css/fontello.css' },
    { src: '@/assets/css/main.css' }
  ],
  // ============================================================
  //  Customize the progress-bar color
  // ============================================================
  loading: { color: '#009B48' },

  // ============================================================
  //
  // ============================================================
  manifest: {
    name: 'CBD Coral',
    short_name: 'CBD Coral',
    description: 'Coral Reefs Portal',
    theme_color: '#00405c',
    display: 'standalone',
    background_color: "#ffffff"
  },

  // ============================================================
  //
  // ============================================================
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/component-cache', { maxAge: 24 * 1000 * 60 * 60 * 4 }],  // cache rendered componenents server side for 1 hour
    '@biodiversity/ssr-breakpoints'
  ],

  // ============================================================
  //
  // ============================================================
  plugins: [
    '~/modules/plugins/ImageApi.js',
    '~/modules/plugins/vuex-router-sync.js',
    '~/modules/plugins/i18n.js',
    { src: '~/modules/plugins/swiper.js', ssr: false },
    { src: '~/modules/plugins/polyfill.js', ssr: false },
    { src: '~/modules/plugins/ga.js', ssr: false }
  ],

  // ============================================================
  //
  // ============================================================
  router: {
    extendRoutes (routes) {
      // Generate our non language routes
      const newRoutes = makeRoutes(routes)
      // Add our routes **in front** of the existing routes
      routes.unshift(...newRoutes)
    },
    linkActiveClass: 'is-active'
  },

  // ============================================================
  // Build configuration
  // ============================================================
  build: {
    extractCSS:true,

    extend (config, { isDev, isClient }) {

      if (!isDev) {
        config.output.publicPath = 'https://www.cbd.int/coral-reefs/_nuxt/'
        // config.output.publicPath = './_nuxt/'
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }

  }//build
}//export

// ============================================================
//
// ============================================================
function makeRoutes (routesIn) {
  const routes = []
  routesIn.forEach(r => {
    let path = r.path
    let name = r.name
    let children = r.children
    const component = r.component // re-use the same component/page
    // Remove the /:lang prefix from the path
    path = path.replace('/:lang', process.env.BASE_PATH || '')
    // Adjust the route's name
    if (name === 'lang') {
      // Special case for /:lang index.vue page
      name = 'index' // or you could make this an empty string name ""
      // This becomes the new root index file
      path = process.env.BASE_PATH || '/'
    } else if (name) {
      name = name.replace(/^lang-/, process.env.BASE_PATH || '')
    }
    // If the route has child routes, process them recursively
    if (children) {
      children = makeRoutes(children)
    }
    // Create the new route entry
    const route = {
      path: path,
      name: name,
      component: component
    }
    // Add the child routes if needed
    if (children) {
      route.children = children
    }
    // Add the route to our routes array
    routes.push(route)
  })
  // Return the new routes
  return routes
}

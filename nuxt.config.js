const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

let dotFile = '.env'

if (!isProduction())
  dotFile = `${dotFile}.${process.env.NODE_ENV}`
else 
  process.env.NODE_ENV = 'production'
  
console.info(`##### Building for NODE_ENV: ${process.env.NODE_ENV}`)  
console.info(`#####   Reading dotenv file: ${dotFile}`)

require('dotenv').config({path: path.resolve(process.cwd(), dotFile)})
const config = {
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
    BASE_PATH:process.env.BASE_PATH,
    CANONICAL:process.env.CANONICAL
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
    ['@nuxtjs/component-cache', { maxAge: 24 * 1000 * 60 * 60 * 4 }], 
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
      if(process.env.BASE_PATH)
        routes.forEach(item => {
          item.alias = `${process.env.BASE_PATH}${item.path}`
        })
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
        config.output.publicPath = `${process.env.BASE_URL}${process.env.BASE_PATH}/_nuxt/`//'https://www.cbd.int/coral-reefs/_nuxt/'

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
}
if(!isProduction())
  config.head.meta.push({ name: 'robots', content: 'noindex' })
  
module.exports = config

function isProduction(){
  return !['local','dev','stg'].includes(process.env.NODE_ENV)
}

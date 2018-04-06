
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  render:{resourceHints:false},
  env: {
    baseUrl: process.env.baseUrl,
    isLocalHost: process.env.isLocalHost || false,
    apiUrl: process.env.apiUrl || 'https://api.cbddev.xyz',
    analyzeBuild:process.env.analyzeBuild || false

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
     { src: '~/modules/plugins/polyfill.js', ssr: false }
    // {src: '~/modules/plugins/ga.js', ssr: false},
    // {src: '~/modules/plugins/gtm.js', ssr: false}
  ],

  // ============================================================
  //
  // ============================================================
  router: {
    middleware: ['https', 'auth', 'i18n'],
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
  build: {  resourceHints:true,
    extractCSS:true,
    analyze: false, //process.env.analyzeBuild,
  //  ,'vue-lazyload','@biodiversity/ssr-breakpoints','luxon''~/modules/plugins/ImageApi.js',,'~/components/scbd/GlobalBar/GlobalBar.vue','~/components/default/header/DefaultHeader.vue','~/components/footer/CoralFooter.vue'//
    vendor: ['babel-polyfill','vue-i18n','@nuxtjs/component-cache','@biodiversity/ssr-breakpoints'],


    	babel: {
        presets({isServer}) {
            return [
                [
                    'vue-app',
                    {
                         useBuiltIns: true,
                        targets: isServer ? { node: 'current' } : {ie: 10, uglify: true}
                    }]
            ];
        }
    	},

    extend (config, { isDev, isClient }) {

      if (!isDev) {
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
    },
    postcss: {

      plugins: {
         'postcss-custom-properties': false,
         'postcss-cssnext': {
           browsers: ['last 5 versions', 'ie >= 10'],
           features: {
              customProperties: false,
              grid: true,
              flexbox:true
            }
         },
         'postcss-flexbugs-fixes':{}
       }

    }

    // plugins: [
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    // ]

    // watch: ['~/node_modules/@biodiversity/ssr-breakpoints/dist/main.js']
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
    path = path.replace('/:lang', '')
    // Adjust the route's name
    if (name === 'lang') {
      // Special case for /:lang index.vue page
      name = 'index' // or you could make this an empty string name ""
      // This becomes the new root index file
      path = '/'
    } else if (name) {
      name = name.replace(/^lang-/, '')
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

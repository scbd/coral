require('dotenv').config()
const webpack = require('webpack')
module.exports = {
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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon.ico' }
    ]
  },
  css: [
    // { src: '@/assets/sass/roboto/roboto.sass', lang: 'sass' },
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
    theme_color: '#0086b7',
    display: 'standalone',
    background_color: "#ffffff"
  },

  // ============================================================
  //
  // ============================================================
  modules: [
    ['@nuxtjs/pwa', { mobileAppIOS: true }],
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],  // cache rendered componenents server side for 15 mins
    '@biodiversity/ssr-breakpoints'
  ],

  // ============================================================
  //
  // ============================================================
  plugins: [
    '~/modules/plugins/ImageApi.js',
    '~/modules/plugins/vuex-router-sync.js',
    '~/modules/plugins/i18n.js'
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
  build: {
    analyze: process.env.analyzeBuild,
  //  ,'vue-lazyload','@biodiversity/ssr-breakpoints','luxon'//
    vendor: ['axios','vue-i18n','@nuxtjs/component-cache','@biodiversity/ssr-breakpoints','~/modules/plugins/ImageApi.js','~/components/scbd/GlobalBar/GlobalBar.vue','~/components/default/header/DefaultHeader.vue','~/components/footer/CoralFooter.vue'],
    extend (config) {

          const vueLoader = config.module.rules.find((r) => {
            return r.loader === 'vue-loader'
          })
          vueLoader.options.preLoaders = vueLoader.options.preLoaders || {}
          vueLoader.options.preLoaders.i18n = 'json-loader'
          vueLoader.options.loaders.i18n = 'vue-i18n-loader'
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     'worldLow': require('./node_modules/ammap3/ammap/maps/worldLow')
    //   })
    // ]
//     watch: [
//     '~/node_modules/@biodiversity/ssr-breakpoints/module.js',
//     '~/node_modules/@biodiversity/ssr-breakpoints/plugin.js'
// ]
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

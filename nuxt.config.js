module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3333'
  },
  // ============================================================
  // Headers of the page
  // ============================================================
  head: {
    titleTemplate: '%s | UN Biodiversity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Admin for hooligans' }
    ]
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },
  css: [
    { src: 'assets/css/main.sass', lang: 'sass' },
    { src: 'assets/css/main.css' }
  ],
  // ============================================================
  //  Customize the progress-bar color
  // ============================================================
  loading: { color: '#009b48' },

  // ============================================================
  //
  // ============================================================
  manifest: {
    name: 'CBD-VUE-POC',
    description: 'Universal App',
    theme_color: '#009b48'
  },

  // ============================================================
  //
  // ============================================================
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache'
  ],

  // ============================================================
  //
  // ============================================================
  plugins: [
    '~plugins/vuex-router-sync.js',
    '~/plugins/i18n.js',
    {src: '~plugins/ga.js', ssr: false},
    {src: '~plugins/gtm.js', ssr: false},
    {src: '~plugins/fb-sdk.js', ssr: false}
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
    }
  },

  // ============================================================
  // Build configuration
  // ============================================================
  build: {
    vendor: ['axios', 'vee-validate', 'vue-multiselect', 'vue-i18n', '@nuxtjs/pwa', '@nuxtjs/component-cache']
    // Run ESLINT on save
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
  // serverMiddleware: [{ path: '/api', handler: '~/server-middleware/api.js' }]

}

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

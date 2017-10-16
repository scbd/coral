import cookie from '~/modules/cookie'
import VueI18n from 'vue-i18n'

export default function ({ isHMR, app, store, route, params, error, req }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return

  let cookieLocale = cookie.getItem('locale', req);
  // Get locale from params
  const locale = params.lang || cookieLocale || store.state.locale.locale ||'en'
  if (store.state.locale.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('locale/setLocale', locale)

  app.i18n.locale = locale

  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return app.router.push(route.fullPath.replace(/^\/en/, ''))
  }

  // if (store.state.locale.locale !== 'en' && !~route.fullPath.indexOf('/'+store.state.locale.locale) ) {
  //   return app.router.push('/'+store.state.locale.locale+route.fullPath)
  // }
}
import cookie from '~/modules/cookie'
import {isEmpty} from '~/modules/helpers'
let isLocalHost = process.env.isLocalHost

export default async function ({ isHMR, app, store, route, params, error, req }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return

  let cookieLocale = cookie.getItem('locale', req);
  // Get locale from params
  const locale = params.lang || cookieLocale || store.state.locale.locale || 'en'

  if (store.state.locale.locales.indexOf(locale) === -1) {
    return error({ message: 'Middleware i18n: This page could not be found.', statusCode: 404 })
  }

  // lazy load root language if not loaded on locale change
  if(app.i18n.locale !== locale)
    await app.i18n.loadLanguageAsync(locale)

  lazyLoadPage(app,store,route)
  // Set locale
  store.commit('locale/setLocale', locale)

  app.i18n.locale = locale

  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0)
    return app.router.push(route.fullPath.replace(/^\/en/, ''))

}

async function lazyLoadPage(app,store,route) {

  let locale = app.i18n.locale
  let pageName = route.name.replace(/lang-/gi,'')
  let pageLocales = store.state.locale.pageMessages[pageName] || {}

  if(!pageLocales['en'] || isLocalHost)
    pageLocales.en = await import(`~/locales/pages/${pageName}/en.json`)

  if(locale !=='en' && (!pageLocales[locale] || isLocalHost))
    pageLocales[locale] = await import(`~/locales/pages/${pageName}/${locale}.json`)

  if(!isEmpty(pageLocales[locale]))
    store.commit('locale/setPageMessage', {page:pageName, messages:pageLocales})

  app.i18n.mergeLocaleMessage('en', store.state.locale.pageMessages[pageName].en)
  app.i18n.mergeLocaleMessage(locale, store.state.locale.pageMessages[pageName][locale])

  // i18n reactivity bug, hack below to force update on client.
  app.i18n.vm.$forceUpdate()
}

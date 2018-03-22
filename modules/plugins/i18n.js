import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default async ({ app, store, serverStore }) => {
  if (process.client) serverStore = window.__NUXT__.state

  const loadedLanguages = ['en'] // our default language that is prelaoded

  let options = {
    locale: (process.client ? serverStore.locale.locale : store.state.locale.locale) || 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    sync:true,
    messages: {
      'en': require('~/locales/en.json')
    }
  }

  if(options.locale !== 'en')
    options.messages[options.locale] = await import(/* webpackChunkName: "locale-[request]" */ `~/locales/${options.locale}.json`)

  app.i18n = new VueI18n(options)

  //============================================================
  //
  //============================================================
  app.i18n.path = (link) => {
   if (app.i18n.locale === app.i18n.fallbackLocale)
     return `/${link}`
   return `/${app.i18n.locale}/${link}`
  }

 //============================================================
 //
 //============================================================
  app.i18n.loadLanguageAsync = (lang) => {

    if (app.i18n.locale !== lang) {
      if (!app.i18n.isLangLoaded(lang)) {
        try {
            return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}`).then(msgs => {
              app.i18n.setLocaleMessage(lang, msgs)
              loadedLanguages.push(lang)
            })
        } catch (e) {
          console.log(  'Language module not found');
        }
      }
      return Promise.resolve(lang)
    }
    return Promise.resolve(lang)
  }

  //============================================================
  //
  //============================================================
  app.i18n.isLangLoaded = (lang) => {
     return ~loadedLanguages.indexOf(lang)
  }
  //============================================================
  //
  //============================================================
  app.i18n.getDirection = (lang) => {
     if(lang==='ar') return 'rtl'
     return 'ltr'
  }
  //============================================================
  //
  //============================================================
  app.i18n.isRtl = (lang) => {
     if(lang==='ar') return true
     return false
  }
}

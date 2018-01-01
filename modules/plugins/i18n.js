import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, isClient, store, serverStore }) => {
  if (isClient) serverStore = window.__NUXT__.state

  const loadedLanguages = ['en'] // our default language that is prelaoded

  let options = {
    locale: (isClient ? serverStore.locale.locale : store.state.locale.locale) || 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    sync:true,
    messages: {
      'en': require('~/locales/en.json')
      // 'fr': require('~/locales/fr.json'),
      // 'es': require('~/locales/es.json'),
      // 'ru': require('~/locales/ru.json'),
      // 'zh': require('~/locales/zh.json'),
      // 'ar': require('~/locales/ar.json')
    }
  }

  if(options.locale !== 'en')
    options.messages[options.locale] = require(`~/locales/${options.locale}.json`)

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
}
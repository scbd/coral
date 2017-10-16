import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, isClient, store, serverStore }) => {
  if (isClient) serverStore = window.__NUXT__.state

  app.i18n = new VueI18n({

    locale: (isClient ? serverStore.locale.locale : store.state.locale.locale),
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json')
      // 'fr': require('~/locales/fr.json'),
      // 'es': require('~/locales/es.json'),
      // 'ru': require('~/locales/ru.json'),
      // 'zh': require('~/locales/zh.json'),
      // 'ar': require('~/locales/ar.json')
    }
  })
}

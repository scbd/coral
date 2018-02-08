import {isEmpty} from '~/modules/helpers'
let isLocalHost = process.env.isLocalHost

export default {

  async mounted () {

    let locale = this.$i18n.locale
    let pageName = this.$store.state.route.name.replace(/lang-/gi,'')
    let pageLocales = this.$store.state.locale.pageMessages[pageName] || {}

    if(pageName==='lang')pageName = 'index'

    if(!pageLocales['en'] || isLocalHost)
      pageLocales.en = await import(/* webpackChunkName: "`${pageName}/en.json`" */ `~/locales/pages/${pageName}/en.json`)

    if(locale !=='en' && (!pageLocales[locale] || isLocalHost))
      pageLocales[locale] = await import(/* webpackChunkName: "`${pageName}/${locale}.json`" */ `~/locales/pages/${pageName}/${locale}.json`)

    if(!isEmpty(pageLocales[locale]))
      this.$store.commit('locale/setPageMessage', {page:pageName, messages:pageLocales})

    this.$i18n.mergeLocaleMessage('en', this.$store.state.locale.pageMessages[pageName].en)
    this.$i18n.mergeLocaleMessage(locale, this.$store.state.locale.pageMessages[pageName][locale])

    //i18n reactivity bug, hack below to force update on client.
    this.$forceUpdate()
  }
}

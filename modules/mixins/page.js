
import i18nMixin from '~/modules/mixins/LazyLoadi18n'
export default {
  layout: 'default',
  mixins: [i18nMixin],
  asyncData({app}) {
    return {
      getImage: app.$CBDImage.get

    }
  },
  head () {
    return {
      title: this.$i18n.t('title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('description') },
        { hid:'twitter:title', name: 'twitter:title', content: this.$i18n.t('title') },
        { hid:'twitter:description', name: 'twitter:description', content: this.$i18n.t('description') },
        { hid:'og:title', name: 'og:title', content: this.$i18n.t('title') },
        { hid:'og:description', name: 'og:description', content: this.$i18n.t('description') }
      ]
    }
  }
}

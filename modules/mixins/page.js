
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
        { hid: 'description', name: 'description', content: this.$i18n.t('description') }
      ]
    }
  }
}

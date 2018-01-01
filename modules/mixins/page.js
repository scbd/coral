
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
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: [
        // We use $route.path// must overwrite when using query parameters
        {
          rel: 'canonical',
          href: `${process.env.baseUrl}${this.$route.path}`
        }
      ]
    }
  }
}

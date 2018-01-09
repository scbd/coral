<template>
    <div >
      <GlobalBar  />
      <DefaultHeader />
      <main>
        <nuxt class="main-view" :class="{'rtl':isAr}"/>
      </main>
      <CoralFooter/>
    </div>
</template>

<script>
  import DefaultHeader from '~/components/default/header/DefaultHeader.vue'
  import GlobalBar from '~/components/scbd/GlobalBar/GlobalBar.vue'
  import CoralFooter from '~/components/footer/CoralFooter.vue'
  import i18nMixin from '~/modules/mixins/LazyLoadi18n'

  export default {
    scrollToTop: true,
    transition:'page',
    mixins: [i18nMixin],
    components: {GlobalBar,CoralFooter,DefaultHeader},
    computed: {
      isAr: function () {
        return !!(this.$store.state.locale.locale === 'ar')
      }
    },
    head () {
      return {
        link: [
          // We use $route.path// must overwrite when using query parameters
          {
            hid:'canonical',
            rel: 'canonical',
            href: `${process.env.baseUrl}${this.$route.path}`
          }
        ],
        meta: [
          // We use $route.path since we don't use query parameters
          { hid:'lang', name: 'lang', content: this.$i18n.locale },
          { hid:'og:title', name: 'og:title', content: this.$i18n.t('title') },
          { hid:'og:description', name: 'og:description', content: this.$i18n.t('description') }
          // { hid:'og:image', name: 'og:image', content: 'some image') }
          // { hid:'twitter:card', name: 'twitter:card', content: 'summary' },
          // { hid:'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
          // { hid:'twitter:title', name: 'twitter:title', content: 'Nuxt.js Twitter Card' },
          // { hid:'', name: 'twitter:description', content: 'Nuxt.js lets you handle custom headers for your app with vue-meta' },
          // { hid:'', name: 'twitter:image', content: 'https://avatars0.githubusercontent.com/u/23360933?v=3' },
          // { hid:'', name: 'twitter:image:alt', content: 'Nuxt.js logo' }
        ]
      }
    }
  }
</script>

<style scoped>
  .main-view{
    margin: .5em 0 0 0;
  }
</style>

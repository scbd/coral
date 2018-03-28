<template>
    <section>
      <GlobalBar  />
      <DefaultHeader />
      <DividerGradBar />
      <main >
        <nuxt :class="{'rtl':isAr}"/>
      </main>
      <CoralDivider/>
      <DividerGradBar :size="Number(24)" />
      <CoralFooter/>
    </section>
</template>

<script>
  import DefaultHeader  from '~/components/default/header/DefaultHeader.vue'
  import GlobalBar      from '~/components/scbd/GlobalBar/GlobalBar.vue'
  import DividerGradBar from '~/components/DividerGradBar.vue'
  import CoralDivider   from '~/components/CoralDivider.vue'
  import CoralFooter    from '~/components/footer/CoralFooter.vue'
  import i18nMixin      from '~/modules/mixins/LazyLoadi18n'

  export default {
    scrollToTop: true,
    transition:'page',
    mixins: [i18nMixin],
    components: {GlobalBar,CoralFooter,DefaultHeader,DividerGradBar,CoralDivider},
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
          { hid:'og:description', name: 'og:description', content: this.$i18n.t('description') },
          { hid:'og:image', name: 'og:image', content: 'http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/1200x630/red-coral-blue-back.jpg' },
          { hid:'twitter:card', name: 'twitter:card', content: 'summary' },
          { hid:'twitter:site', name: 'twitter:site', content: '@CBDNews' },
          { hid:'twitter:title', name: 'twitter:title', content: this.$i18n.t('title') },
          { hid:'twitter:description', name: 'twitter:description', content: this.$i18n.t('description') },
          { hid:'twitter:image', name: 'twitter:image', content: 'http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/1200x675/red-coral-blue-back.jpg' },
          { hid:'twitter:image:alt', name: 'twitter:image:alt', content: 'CBD Coral Reefs Portal' }
        ],
        htmlAttrs: {
          lang: this.$i18n.locale,
          dir:  this.$i18n.getDirection(this.$i18n.locale)
        }
      }
    }
  }
</script>

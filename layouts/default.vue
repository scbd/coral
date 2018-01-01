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
    transition:'slide',
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
            rel: 'canonical',
            href: `${process.env.baseUrl}${this.$route.path}`
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .main-view{
    margin: 42px 0 0 0;
  }


</style>

<style lang="scss" >
  @import '~assets/css/main';

  .rtl{
    direction:rtl;
    font-family:"Droid Arabic Kufi", "Droid Sans", sans-serif;
    font-size:14px;
  }
  body {
    height:100vh;
  }
</style>

<template>
    <div >
      <GlobalBar  />
      <DefaultHeader />
      <nuxt class="main-view" :class="{'rtl':isAr}"/>
      <CoralFooter/>
    </div>
</template>

<script>
  import DefaultHeader from '~/components/default/header/DefaultHeader.vue'
  import GlobalBar from '~/components/scbd/GlobalBar/GlobalBar.vue'
  import CoralFooter from '~/components/footer/CoralFooter.vue'

  export default {
    scrollToTop: true,
    components: {GlobalBar,CoralFooter,DefaultHeader},
    computed: {
      isAr: function () {
        return !!(this.$store.state.locale.locale === 'ar')
      }
    },
    head () {
      return {
        link: [
          // We use $route.path since we don't use query parameters
          {
            rel: 'canonical',
            href: `https://hn.nuxtjs.org${this.$route.path}`
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

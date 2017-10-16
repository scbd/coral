<template>

  <section >
    <HeaderBar/>
    <div class="container">

      <nuxt/>
    </div>
  </section>

</template>
<script>
import HeaderBar from '~/components/default/HeaderBar/HeaderBar.vue'

export default {
  scrollToTop: true,
  components: {
    HeaderBar
  },
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
<style lang="scss" >
  @import '~assets/css/main';

  .rtl{
    direction:rtl;
    font-family:"Droid Arabic Kufi", "Droid Sans", sans-serif;
    font-size:14px;
  }
</style>

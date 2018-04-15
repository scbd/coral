<template>
    <section>
      <GlobalBar  />
      <DefaultHeader />
      <DividerGradBar />
      <main >
        <nuxt class="margins" :class="{'rtl':isAr}"/>
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
  // import pageMixin      from '~/modules/mixins/page'

  export default {
    scrollToTop: true,
    transition:'page',
    // mixins: [pageMixin],
    components: {GlobalBar,CoralFooter,DefaultHeader,DividerGradBar,CoralDivider},
    computed: {
      isAr: function () {
        return !!(this.$store.state.locale.locale === 'ar')
      }
    }

  }
</script>
<style>
  main .margins{
    margin: 4em 0 6em 0;
  }
</style>

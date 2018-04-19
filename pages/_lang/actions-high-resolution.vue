<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#e8768d">
        <ActionIcon width="100%" color="#e8768d"/>
      </TitleDescription>

      <Subtitle >{{$t('help')}}</Subtitle>

      <SVGMap  :high-res="Boolean(true)" class="is-4em-mb"/>
  </section>
</template>

<script>

  import TitleDescription from '~/components/default/TitleDescription'
  import Subtitle         from '~/components/Subtitle'
  import pageMixin        from '~/modules/mixins/page'

  export default {
    layout: 'default',
    name:   'actions',
    mixins: [pageMixin],
    components: {
      ActionIcon:() => import('~/components/icons/ActionIcon'),
      SVGMap:() => import('~/components/default/SVGMap'),
      TitleDescription,
      Subtitle

    },
    async asyncData ({app,store}) {

      await store.dispatch('events/get')

    },
    mounted(){
      require('ammap3')
      require('ammap3/ammap/maps/js/worldHigh')
    }

  }
</script>
<style>
  .is-4em-mb{
    margin-bottom:4em;
  }
</style>

<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#e8768d">
        <ActionIcon width="100%" color="#e8768d"/>
      </TitleDescription>

      <Subtitle >{{$t('help')}}</Subtitle>

      <SVGMap class="is-4em-mb"/>
  </section>
</template>

<script>

  import pageMixin        from '~/modules/mixins/page'
  import TitleDescription from '~/components/default/TitleDescription'
  import Subtitle         from '~/components/Subtitle'

  export default {
    name:'actions',
    mixins: [pageMixin],
    components: {
      ActionIcon:() => import('~/components/icons/ActionIcon'),
      SVGMap:() => import('~/components/default/SVGMap'),
      TitleDescription,
      Subtitle

    },
    async asyncData ({app,store}) {

      await store.dispatch('events/get')

    }

  }
</script>
<style>
  .is-4em-mb{
    margin-bottom:4em;
  }
</style>

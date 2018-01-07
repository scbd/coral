<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#e8768d">
        <ActionIcon width="100%" color="#e8768d"/>
      </TitleDescription>

      <div class="help">
        <span class="title">{{$t('help')}}</span>
      </div>

      <SVGMap/>
  </section>
</template>

<script>

  import pageMixin from '~/modules/mixins/page'
  import ActionIcon from '~/components/icons/ActionIcon'
  import SVGMap from '~/components/default/SVGMap'

  export default {
    name:'actions',
    mixins: [pageMixin],
    components: {
      ActionIcon,
      SVGMap,
      TitleDescription:() => import('~/components/default/TitleDescription')

    },
    created(){

    }
  }
</script>

<style scoped>
  .subtitles{
    margin-top: 20px;
  }
</style>

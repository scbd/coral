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
  </section>
</template>

<script>
  import pageMixin from '~/modules/mixins/page'
  import ActionIcon from '~/components/icons/ActionIcon'

  export default {
    name:'actions',
    mixins: [pageMixin],
    components: {
      ActionIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription')
    }
  }
</script>

<style scoped>
  .subtitles{
    margin-top: 20px;
  }
</style>

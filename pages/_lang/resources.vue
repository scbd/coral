<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#ff3e94">
        <ResourceIcon width="100%" color="#ff3e94"/>
      </TitleDescription>

      <div class="subtitles">
        <span class="title">{{$t('cbdMaterials')}}</span>
      </div>
      <Resources filter="bleble" />
      <div class="subtitles">
        <span class="title">{{$t('educationOutreachMaterials')}}</span>
      </div>
      <Resources filter="bleble" :total="Number(3)"/>
      <div class="subtitles">
        <span class="title">{{$t('forReefManagers')}}</span>
      </div>
      <Resources filter="bleble"/>

  </section>
</template>

<script>
  import pageMixin from '~/modules/mixins/page'
  import ResourceIcon from '~/components/icons/ResourceIcon'
  import Resources from '~/components/default/Resources/Resources.vue'
  export default {
    name:'resources',
    mixins: [pageMixin],
    async asyncData ({app,store}) {
      await store.dispatch('resource/get')

    },
    components: {
      ResourceIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      Resources
    }
  }
</script>

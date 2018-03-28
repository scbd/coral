<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#ff3e94">
        <ResourceIcon width="100%" color="#ff3e94"/>
        <div class="search" slot="description">
          <div class="debug">
            <div class="columns">
              <div class="column">
                <div class="search-title">Filter by Keyword</div>
                <div>body</div>
              </div>
              <div class="column">
                <div class="search-title">title</div>
                <div>body</div>
              </div>
              <div class="column">
                <div class="search-title">title</div>
                <div>body</div>
              </div>
            </div>
          </div>
        </div>
      </TitleDescription>

      <Subtitle>{{$t('cbdMaterials')}}</Subtitle>
      <CoralCardManager :docs="docs"/>

      <Subtitle>{{$t('educationOutreachMaterials')}}</Subtitle>
      <CoralCardManager :docs="docs"/>
  </section>
</template>

<script>
  import pageMixin        from '~/modules/mixins/page'
  import ResourceIcon     from '~/components/icons/ResourceIcon'
  import CoralCardManager from '~/components/CoralCardManager'
  import Subtitle         from '~/components/Subtitle'

  export default {
    name:'resources',
    mixins: [pageMixin],
    async asyncData ({app,store}) {
      await store.dispatch('resource/get')
    },
    components: {
      ResourceIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      CoralCardManager,
      Subtitle
    },
    computed:{
      docs: function(){return this.$store.state.resource.docs[this.$i18n.locale]},
      length: function(){return this.$store.state.resource.docs[this.$i18n.locale].length}
    }
    mounted:
  }
</script>
<style>
  .search{
    border: 6px solid #ff3e94;
  }
  .search-title{
    font-weight: 900;
  }
</style>

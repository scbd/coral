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
                <div class="search-title">{{$t('filterByKeyword')}}</div>
                <div>
                   <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input"  type="text" :placeholder="$t('keyWordPhrase')">

                      <span class="icon is-small is-right">
                        <i class="fontello icon-search" ></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="search-title">{{$t('filterByType')}}</div>
                <div>
                  <div>
                    <label class="checkbox debug">
                      <input type="checkbox">
                      {{$t('cBDMaterials')}}
                    </label>
                  </div>
                  <label class="checkbox">
                    <input type="checkbox">
                    {{$t('education')}}
                  </label>
                </div>
              </div>
              <div class="column">
                <div class="search-title">{{$t('filterByDate')}}</div>
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
    },
    mounted(){
      console.log('test')
    }
  }
</script>
<style>
  .search{
    border: 6px solid #ff3e94;
    margin: .5em 1em 1em 1em;
    padding: .5em .5em .5em .5em;
  }
  .search-title{
    font-weight: 900;
  }
input[type=checkbox]{
    vertical-align: middle !important;
    margin-bottom: .3em;
}
</style>

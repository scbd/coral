<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="' '"
        color="#ff3e94">
        <ResourceIcon width="100%" color="#ff3e94"/>
        <div class="search" slot="description">
          <div >
            <div class="columns">
              <div class="column">
                <div class="search-title"><label for="resource-search">{{$t('filterByKeyword')}}</label></div>
                <div>
                   <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input id="resource-search" :aria-label="$t('filterByKeyword')" class="input"  v-model.trim="search" type="text" :placeholder="$t('keyWordPhrase')">

                      <span class="icon is-small is-right" v-if="!search">
                        <i class="fontello icon-search" ></i>
                      </span>
                      <span class="icon is-small is-right " v-if="search" >
                        <i class="fontello icon-cancel pointer" v-on:click="clearSearch"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="search-title">{{$t('filterByType')}}</div>
                <div>
                  <div>
                    <label  for="idCBD" class="checkbox">
                      <input id="idCBD" type="checkbox" v-model="isCBD">
                      {{$t('cBDMaterials')}}
                    </label>
                  </div>
                  <label for="isEd" class="checkbox">
                    <input id="isEd" type="checkbox" v-model="isEd">
                    {{$t('education')}}
                  </label>
                </div>
              </div>
              <div class="column">
                <div class="search-title">
                  <label for="yearFilter"> {{$t('filterByDate')}} </label>
                </div>
                <div>
                  <div class="control" >
                    <div class="select" >
                      <select v-model="year" id="yearFilter">
                        <option   :value="Boolean(false)" >All Years</option>
                        <option v-for="aYear in years" :value="aYear">
                          {{ aYear }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TitleDescription>
      <section v-show="!searching">
        <Subtitle v-if="docsCBD.length">{{$t('cbdMaterials')}}</Subtitle>
        <CoralCardManager :docs="docsCBD"/>
        <Subtitle v-if="docsEd.length">{{$t('educationOutreachMaterials')}}</Subtitle>
        <CoralCardManager :docs="docsEd"/>
      </section>

      <section v-show="searching">
        <Subtitle ><span class="tag is-light is-rounded is-large" style="vertical-align: middle; margin-bottom:3px;" v-if="docs.length">{{docs.length}}</span> {{$t('search')}} </Subtitle>
        <CoralCardManager :docs="docs" v-show="docs.length" :slides-per-colum="slidesPerColum"/>

        <div class="container is-fullhd notification is-warning has-text-centered" v-if="!docs.length">
          <button class="delete" v-on:click="clearSearch"></button>
          {{$t('noRecords')}}
          <span v-if="search" class="has-text-weight-bold"><br/>{{$t('keyword')}}: {{search}}</span>
          <span v-if="isCBD" class="has-text-weight-bold"><br/> {{$t('ofType')}}: {{$t('cbdMaterials')}}</span>
          <span v-if="isEd" class="has-text-weight-bold"><br/> {{$t('ofType')}}: {{$t('educationOutreachMaterials')}}</span>
          <span v-if="year" class="has-text-weight-bold"><br/> {{$t('publicatoinYear')}}: {{year}}</span>
        </div>
      </section>

  </section>
</template>

<script>

  import ResourceIcon     from '~/components/icons/ResourceIcon'
  import CoralCardManager from '~/components/CoralCardManager'
  import Subtitle         from '~/components/Subtitle'
  import pageMixin        from '~/modules/mixins/page'

  export default {
    layout: 'default',
    name:   'resources',
    mixins: [pageMixin],

    async asyncData ({app,store}) {
      store.dispatch('resource/get')
    },

    data () {return {search:'', isCBD: false, isEd: false, year: false}},

    components: {
      ResourceIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      CoralCardManager,
      Subtitle
    },

    computed:{
      docs: function(){return this.$store.state.resource.docs[this.$i18n.locale]},
      docsEd: function(){return this.$store.getters['resource/getEd'] || []},
      docsCBD: function(){return this.$store.getters['resource/getCBD'] || []},
      years: function(){return this.$store.getters['resource/getYears'] || []},
      length: function(){return this.$store.state.resource.docs[this.$i18n.locale].length},
      searching: function(){ if(this.search || this.isEd || this.isCBD || this.year) return true; return false},
      slidesPerColum: function(){ if(this.$store.state.resource.docs[this.$i18n.locale].length > 4) return 2; else return 1}
    },

    methods:{
      query: function ()  { return this.$store.dispatch('resource/get',{search:this.search,isEd:this.isEd,isCBD:this.isCBD,year:this.year})},
      clearSearch: function(){this.search=''}
    },

    watch: {
        search: async function(val){
            await this.query()
        },
        isEd: async function(val, oldVal){
            await this.query()
        },
        isCBD: async function(val, oldVal){
            await this.query()
        },
        year: async function(val, oldVal){
            await this.query()
        }
    }
  }
</script>

<style lang="sass">
  @import '~assets/sass/vars.sass'
  @import "~bulma/sass/elements/form.sass"
  @import "~bulma/sass/elements/notification.sass"
</style>

<style>
  .notification{
    margin-bottom: 1.5em;
  }
  .pointer{
    cursor:pointer;
    pointer-events: auto;
  }
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

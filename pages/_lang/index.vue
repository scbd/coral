<template>
  <section >
      <CoralSectionTwo>
        {{$t('p1')}}
      </CoralSectionTwo>

      <Subtitle>{{$t('highlightedActions')}}</Subtitle>

      <CoralCardManager :docs="actions"/>

      <Subtitle>{{$t('IYOR2018')}}</Subtitle>

      <CoralSection>
        2018 will mark the third annual Year of the Reef. Visit the website to learn more about the International Year of the Reef (IYOR).
        <div class="center-div">
          <br/>
          <button class="button is-rounded is-primary dark-blue">
            <h2 style="margin-top:-12px;">Visit Website</h2>
          </button>
        </div>
      </CoralSection>

      <Subtitle>{{$t('news')}}</Subtitle>

      <div class="row-one" >
          <TwitterGrid/>
      </div>
  </section>
</template>

<script>
  import pageMixin from '~/modules/mixins/page'
  import TwitterGrid from '~/components/home/TwitterGrid'
  import Subtitle from '~/components/Subtitle'
  import CoralSectionTwo from '~/components/CoralSectionTwo'
  import CoralSection from '~/components/CoralSection'
  import CoralCardManager from '~/components/CoralCardManager'
  import { DateTime }  from 'luxon'

  // import VueLazyload from 'vue-lazyload'
  // Vue.use(VueLazyload)

  export default {
    layout: 'home',
    name:'index',
    mixins: [pageMixin],
    components:{TwitterGrid,Subtitle,CoralSectionTwo,CoralSection,CoralCardManager},
    // always use asyncData for better SSR
    async asyncData ({app,store}) {

      await store.dispatch('events/get')

      return {
        actionsThisMonth: store.getters['events/getThisMonth'](app.i18n.locale) || {},
        actions: store.getters['events/getHighlights'](app.i18n.locale) || {}
      }
    },
    methods:{
      toLocaleString:toLocaleString
    }
  }

  //============================================================
  //
  //============================================================
  function  toLocaleString (isoDate, preset = 'DATETIME_MED')  {
    return DateTime.fromISO(isoDate).setLocale(this.$i18n.locale).toLocaleString(DateTime[preset])
  }
</script>

<style scopped>
  .row-one{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center-div{
    text-align: center;
  }
  .dark-blue{
    background-color: #00405c !important;
  }
</style>

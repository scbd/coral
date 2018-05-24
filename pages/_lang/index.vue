<template>
  <section >
      <CoralSectionTwo>
        {{$t('p1')}}
      </CoralSectionTwo>

      <Subtitle v-if="actions.length" >{{$t('highlightedActions')}}</Subtitle>

      <CoralCardManager v-if="actions.length" :paginated="Boolean(false)" :docs="actions"/>

      <Subtitle>{{$t('IYOR2018')}}</Subtitle>

      <CoralSection>

          {{$t('iyorDesc')}}
          <div class="center-div">
            <br/>
            <a href="https://www.iyor2018.org/" target="_blank" rel="noopener nofollow" class="button is-rounded is-primary dark-blue msg-button">
              <span>{{$t('visitWebsite')}}</span>
            </a>
          </div>

      </CoralSection>

      <Subtitle v-if="!$breakpoints.isMobile">{{$t('news')}}</Subtitle>

      <div class="row-one" v-if="!$breakpoints.isMobile">
          <TwitterGrid/>
      </div>
  </section>
</template>

<script>

  import TwitterGrid      from '~/components/home/TwitterGrid'
  import Subtitle         from '~/components/Subtitle'
  import CoralSectionTwo  from '~/components/CoralSectionTwo'
  import CoralSection     from '~/components/CoralSection'
  import CoralCardManager from '~/components/CoralCardManager'
  import { DateTime }     from 'luxon'
  import pageMixin         from '~/modules/mixins/page'
  // import VueLazyload from 'vue-lazyload'
  // Vue.use(VueLazyload)

  export default {
    layout: 'home',
    name:   'index',
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
.iyor-desc{
  min-width: 500px;
}
  .msg-button span{
    font-size: 1.5em;
    margin-top: 0;
    font-weight:900;
  }
  .msg-button:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
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

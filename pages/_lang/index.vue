<template>
  <section >
      <!-- <div class="columns row-one">
        <div class="column is-one-half">
          <div >{{$t('description')}}</div>
        </div>

        <div class="column is-one-quarter">
          <div class="card action-box">
            <header class=" has-text-centered">
              <div class="title is-4 is-capitalized">{{$t('actionsAddedThisMonth')}}</div>
            </header>
            <div class="card-content has-text-centered">
              <p class="title action-number">{{actionsThisMonth}} </p>
            </div>
            <footer class="card-footer flex-center" >
              <p class="card-footer-item">
                <nuxt-link to="/actions" class="button is-rounded">
                  {{$t('viewActions')}}
                </nuxt-link >
              </p>
            </footer>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="card action-box">
            <header class="has-text-centered">
              <div class="title is-4">{{$t('highlightedAction')}}</div>
            </header>
            <div class="card-content has-text-centered">
              <p class="title is-6 is-capitalized">{{action.title_t}}  </p>
              <p class="subTitle">{{toLocaleString(action.startDate_dt)}} </p>
            </div>
            <footer class="card-footer flex-center" >
              <p class="card-footer-item">
                <a class="button is-rounded" :href="action.url_ss[0]" target="_blank" rel="noopener" >
                  {{$t('viewAction')}}
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div> -->
      <Subtitle>{{$t('news')}}</Subtitle>

      <BubblesSection>
        Coral reefs are related to many different Aichi Targets, and Sustainable Development Goals. Click on the linking statements to see which Aichi targets and SDGs relate to coral reefs.
      </BubblesSection>

      <CoralSection>
        2018 will mark the third annual Year of the Reef. Visit the website to learn more about the International Year of the Reef (IYOR).
        <div class="center-div">
          <br/>
          <button class="button is-rounded is-primary dark-blue">
            <h2 style="margin-top:-12px;">Visit Website</h2>
          </button>
        </div>
      </CoralSection>

      <div class="row-one" >
          <TwitterGrid/>
      </div>

  </section>
</template>

<script>
  import pageMixin from '~/modules/mixins/page'
  import TwitterGrid from '~/components/home/TwitterGrid'
  import Subtitle from '~/components/Subtitle'
  import BubblesSection from '~/components/BubblesSection'
  import CoralSection from '~/components/CoralSection'
  import { DateTime }  from 'luxon'
  import Vue from 'vue'
  // import VueLazyload from 'vue-lazyload'
  // Vue.use(VueLazyload)

  export default {
    layout: 'home',
    name:'index',
    mixins: [pageMixin],
    components:{TwitterGrid,Subtitle,BubblesSection,CoralSection},
    // always use asyncData for better SSR
    async asyncData ({app,store}) {

      await store.dispatch('events/get')

      return {
        actionsThisMonth: store.getters['events/getThisMonth'](app.i18n.locale) || {},
        action: store.getters['events/getHighlight'](app.i18n.locale) || {}
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

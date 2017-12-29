<template>
  <section >
      <div class="columns row-one">

        <div class="column is-one-half">
          <div >{{$t('description')}}</div>
        </div>

        <div class="column is-one-quarter">
          <div class="card action-box">
            <header class=" has-text-centered">
              <div class="title is-4 is-capitalized">{{$t('actionsAddedThisMonth')}}</div>
            </header>
            <div class="card-content has-text-centered">
              <p class="title is-1">{{actionsThisMonth}} </p>
            </div>
            <footer class="card-footer flex-center" >
              <p class="card-footer-item">
                <a class="button is-rounded">
                  {{$t('viewActions')}}
                </a>
              </p>
            </footer>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="card action-box">
            <header class=" has-text-centered">
              <div class="title is-4">{{$t('highlightedAction')}}</div>
            </header>
            <div class="card-content has-text-centered">
              <p class="title is-5 is-capitalized">{{actionTitle}}  </p>
              <p class="subTitle">{{actionDate}} </p>
            </div>
            <footer class="card-footer flex-center" >
              <p class="card-footer-item">
                <a class="button is-rounded">
                  {{$t('viewAction')}}
                </a>
              </p>
            </footer>
          </div>
        </div>


      </div>
      <div class="columns row-one">
        <div class="column has-text-centered is-2 is-offset-5">
<img src="~/assets/images/footer-bar.svg"></img>
          <div class="title is-capitalized news">{{$t('news')}}</div>
          <img src="~/assets/images/footer-bar.svg"></img>
        </div>
      </div>
      <div class="columns row-one">
        <div class="column">

<a class="twitter-grid" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
  </section>
</template>

<script>
import i18nMixin from '~/modules/mixins/LazyLoadi18n'

export default {
  layout: 'home',
  name:'index',
  scrollToTop: true,
  components: {},
  mixins: [i18nMixin],
  // always use asyncData for better SSR
asyncData ({app}) {
    return {
      actionsThisMonth: 5,
      actionTitle:'test action titletest action titletest action title',
      actionDate: '25th, December 2017'
    }
  }

}

</script>

<style scoped>
.news{
  margin-bottom: 0 !important;
}
.grad-bar{
  width:100%;

}
  .row-one{
    margin:20px 20px 0 20px;
  }
.flex-center{
  align-items: center;
}
  .is-rounded {
    border-radius: 50px;
    padding-left: 1em;
    padding-right: 1em;
  }

  .action-box {
    color: #000000;
    border: 5px solid #e8768d;


    /* font-weight: 600;
    font-size: 1.25em;
    text-align: center; */
  }
  .action-box .action-number{
    font-size: 3em;
  }
  .action-box .action-title{
    font-size: 2em;

  }
  .action-box .button{

    background-color: #e8768d;
    color: #000000;
    font-weight: 800;
    font-size: 1.25em;
  }
  .action-box .button:hover{
    background-color: #ff3e94;
  }
</style>

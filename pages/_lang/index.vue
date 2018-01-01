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
              <p class="title action-number">{{actionsThisMonth}} </p>
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

      <!-- <div class="columns row-one" >
        <div class="column">
          <TwitterGrid/>
        </div>
      </div> -->
  </section>
</template>

<script>
  import pageMixin from '~/modules/mixins/page'
  // import TwitterGrid from '~/components/home/TwitterGrid'

  export default {
    layout: 'home',
    name:'index',
    mixins: [pageMixin],
    // always use asyncData for better SSR
    asyncData ({app,isClient}) {
      return {
        actionsThisMonth: 5,
        actionTitle:'test action titletest action titletest action title',
        actionDate: '25th, December 2017',
        title: 'Coral Reefs Portal'
      }
    }
  }
</script>

<style>
  .news{
    margin-bottom: 0 !important;
  }
  .grad-bar{
    width:100%;
  }
  .row-one{
    margin: 2em 2em 0 2em;
  }
  .flex-center{
    align-items: center;
  }
  .is-rounded {
    border-radius: 7em;
    padding-left: 1em;
    padding-right: 1em;
  }
  .action-box {
    color: #000000;
    border: .25em solid #e8768d;
  }
  .action-box .action-number{
    font-size: 3em;
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

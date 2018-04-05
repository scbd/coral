<template>
  <section>
    <div class="card-manager">
      <div class="container is-fullhd" v-swiper:mySwiper="swiperOption" >
          <div class="swiper-wrapper">
              <CoralCard class="swiper-slide" v-for="doc in docs" :key="doc.identifier" :doc="doc" :paginated="isPaginated"/>
          </div>
          <div class="swiper-pagination" v-show="isPaginated"></div>
      </div>
    </div>
  </section>
</template>

<script>

  import Vue from 'vue'
  import CoralCard from '~/components/CoralCard'

  export default {
    name: 'CoralCardManager',
    components:{CoralCard},
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
        slidesPerColumn: this.slidesPerColum,
        grabCursor:true,
        pagination:{
          el: '.swiper-pagination',
          type:'custom',
          clickable:true,
          renderCustom: this.paginate
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn:1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn:1,
            spaceBetween: 10
          }
        }
      }

    }
  },
    props: {
        docs: {
          type: Array
        },
        paginated:{
          type: Boolean,
          default: true
        },
        slidesPerColum:{
          type: Number,
          default: 1
        }
    },
    computed: {
      isPaginated: function () {
        if(!this.paginated) return false
        if(!this.$breakpoints.isTouch && this.docs.length>4)
          return true
        if(this.$breakpoints.isTablet && this.docs.length>3)
          return true
        if(this.$breakpoints.isMobile && this.docs.length>1)
          return true
        return false
      }
    },
    methods:{
      paginate:paginate
    }
  }

  function getIndex(swiper, slideGroupIndex){
      return (Number(swiper.params.slidesPerGroup) * Number(slideGroupIndex)) - (Number(swiper.params.slidesPerGroup) - (Number(swiper.params.slidesPerGroup-1)))
  }

  function paginate(swiper, current, total){
    let disabledPrev = ''
    let disabledNext = ''
    let hideBoxOne = ''
    let hideBoxTwo = ''
    let hideBoxThree = ''
    let hideBoxFour = ''
    // is-invisible
    if(current <=1) disabledPrev = 'disabled'
    if(current === total) disabledNext = 'disabled'
    if(current <= 1) hideBoxOne = 'is-invisible'
    if(current <= 2) hideBoxTwo = 'is-invisible'
    if( current+1 >= total) hideBoxThree = 'is-invisible'
    if(current === total) hideBoxFour = 'is-invisible'


    if(Window ){
      if(!Window.swiper)
        Window.swiper={}
      if(!Window.swiper[this._uid])
        Window.swiper[this._uid]={}

      Window.swiper[this._uid].prev    = swiper.slidePrev.bind(swiper)
      Window.swiper[this._uid].next    = swiper.slideNext.bind(swiper)
      Window.swiper[this._uid].slideTo = swiper.slideTo.bind(swiper)
    }


    return `<nav class="container is-fullhd pagination is-centered" style="padding-top:10px;" role="navigation" aria-label="pagination">
        <a class="pagination-previous" ${disabledPrev} onclick="Window.swiper['${this._uid}'].prev()">Previous</a>
        <a class="pagination-next" ${disabledNext} onclick="Window.swiper['${this._uid}'].next()">Next page</a>
        <ul class="pagination-list">
          <li><a class="pagination-link ${hideBoxOne}" aria-label="Goto page 1" onclick="Window.swiper['${this._uid}'].slideTo(Number(1))">1</a></li>
          <li><span class="pagination-ellipsis ${hideBoxOne}" >&hellip;</span></li>
          <li><a class="pagination-link ${hideBoxTwo}" aria-label="Goto page ${current-1}" onclick="Window.swiper['${this._uid}'].slideTo(Number(${getIndex(swiper,current-1)}))">${current-1}</a></li>
          <li><a class="pagination-link is-current" aria-label="Page ${current}" aria-current="page">${current}</a></li>
          <li><a class="pagination-link ${hideBoxThree}" aria-label="Goto page ${current+1}" onclick="Window.swiper['${this._uid}'].slideTo(Number(${getIndex(swiper,current+1)}))">${current+1}</a></li>
          <li><span class="pagination-ellipsis ${hideBoxFour}" >&hellip;</span></li>
          <li><a class="pagination-link ${hideBoxFour}" aria-label="Goto page ${total}" onclick="Window.swiper['${this._uid}'].slideTo(Number(${getIndex(swiper,total)}))">${total}</a></li>
        </ul>
    </nav>`
  }

</script>

<style lang="sass" scopped>
  @import '~assets/sass/vars.sass'
  @import "~bulma/sass/components/card.sass"
  @import "~bulma/sass/elements/button.sass"
  $pagination-color: #ffffff
  $pagination-hover-color: #ff3e94
  $pagination-current-background-color: #ff3e94
  $pagination-current-border-color: #ffffff
  @import "~bulma/sass/components/pagination.sass"
</style>

<style scopped>

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }
  .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .swiper-invisible-blank-slide {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition-property: height, -webkit-transform;
    transition-property: height, -webkit-transform;
    -o-transition-property: transform, height;
    transition-property: transform, height;
    transition-property: transform, height, -webkit-transform;
  }
  /* 3D Effects */

  /* IE10 Windows Phone 8 Fixes */
  .swiper-container-wp8-horizontal,
  .swiper-container-wp8-horizontal > .swiper-wrapper {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .swiper-container-wp8-vertical,
  .swiper-container-wp8-vertical > .swiper-wrapper {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }

  .swiper-button-lock {
    display: none;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }


  .swiper-pagination-lock {
    display: none;
  }

  .swiper-container-coverflow .swiper-wrapper {
    /* Windows 8 IE 10 fix */
    -ms-perspective: 1200px;
  }

  .swiper-slide{
    height: unset;
  }
  .swiper-pagination{
    background-color: #00405c;
    bottom:0px;

  }
  .swiper-scrollbar{
    bottom:45px !important;

  }
  .card-manager{
    background-color: #00405c;
    padding: 1.4em 1.4em 1.4em 1.4em;
    margin-bottom: 4em;
  }
</style>

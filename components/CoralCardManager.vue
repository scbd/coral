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

<style scopped>
  .swiper-slide{
    height: unset;
  }
  .swiper-pagination{
    background-color: #00405c;
    bottom:-4px;

  }
  .swiper-scrollbar{
    bottom:45px !important;

  }
  .card-manager{
    background-color: #00405c;
    padding: 1.4em 1.4em 1.4em 1.4em;
    margin-bottom: 1.5em;
  }
</style>

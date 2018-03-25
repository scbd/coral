<template>
  <section>
      <div class="card-manager" v-swiper:mySwiper="swiperOption" >
        <div class="swiper-wrapper">
            <CoralCard class="swiper-slide" v-for="doc in docs" :key="doc.identifier" :doc="doc" />
        </div>
        <div class="swiper-pagination" v-if="isPaginated"></div>
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
        spaceBetween: 60,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
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
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
          }
        }
      }

    }
  },
    props: {
        docs: {
          type: Array
        }
    },
    mounted() {
        const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
        Vue.use(VueAwesomeSwiper)
    },
    computed: {
      isPaginated: function () {
        if(!this.$breakpoints.isTouch && this.docs.length>4)
          return true
        if(this.$breakpoints.isTablet && this.docs.length>3)
          return true
        if(this.$breakpoints.isMobile && this.docs.length>1)
          return true
        return false
      }
    }
  }
</script>

<style scopped>
.swiper-slide{
  height: unset;
}
  .card-manager{
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-gap: 1em; */
    padding-bottom: .1em;
    margin-bottom: 1.5em;
  }
</style>

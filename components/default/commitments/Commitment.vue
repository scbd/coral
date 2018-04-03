<template>

  <div class="card" v-on:click="show=!show" >
      <div class="card-image" :class="{'content-show':show}">
        <figure class="image" >
          <svg  width="100%" height="1.2em"  :style="{fill:color}"  xmlns="http://www.w3.org/2000/svg">
            <title>Commitment Under Line Illustration {{title}}</title>
            <rect x="0" y="0" width="100%" height="1.2em"/>
          </svg>
        </figure>
      </div>
      <div class="card-content" :class="{'content-show':show}">
        <div class="content" >
          <span class="title" v-on:mouseover="show=true" >{{title}}</span>
          <p >{{description}}</p>
          <transition name="slide-fade">
            <div v-if="show"><br>
              <div><strong>Aichi Biodiversity Targets:</strong></div>
              <div class="target" v-for="item in abt"  style="">

                <a :href="`https://www.cbd.int/aichi-targets/target/${Number(item)}`" target="_blank" rel="noopener"><img :alt="$t('aBT')+' '+item" :title="$t('aBT')+' '+item" v-lazy="require(`~/assets/images/biodiversity-targets/biodiversity-target-${item}.svg`)" /></a>
              </div>
              <br>
              <div><strong>Sustainable Development Goals:</strong></div>
              <div class="target" v-for="item in sdg"  style="width:40px;display:inline-block;">

                <a :href="`https://sustainabledevelopment.un.org/sdg${Number(item)}`" target="_blank" rel="noopener nofollow"><img  :alt="$t('sDG')+' '+item" :title="$t('sDG')+' '+item" v-lazy="require(`~/assets/images/sustainable-development-goals/sustainable-development-goals-${item}.svg`)" /></a>
              </div>
            </div>
          </transition>
        </div>
      </div>

  </div>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
export default {
  name: 'Commitment',
  data: () => {return {show:false}},
  props: {
      color: {
        type: String,
        default: '#000000'
      },
      title: {
          type: String,
          default: 'example title'
      },
      description: {
          type: String,
          default: 'example description'
      },
      abt: {
          type: Array
      },
      sdg: {
          type: Array
      }
  }
}
</script>
  <style lang="sass" scopped>
    @import '~assets/sass/vars.sass'
    @import "~bulma/sass/components/card.sass"
  </style>
<style scoped>
  .card{
    cursor: pointer;
  }
  .target{
    width:40px;
    display:inline-block;
    margin: 5px 5px 5px 5px;
  }
  .content-show{
    background-color: #DCECF3;
  }
</style>

<template>

  <div class="card" v-on:click="show=!show" >
      <div class="card-image" >
        <figure class="image" >
          <svg  width="100%" height="1.2em"  :style="{fill:color}"  xmlns="http://www.w3.org/2000/svg">
            <title>Commitment Under Line Illustration</title>
            <rect x="0" y="0" width="100%" height="1.2em"/>
          </svg>
        </figure>
      </div>
      <div class="card-content" >
        <div class="content">
          <span class="title is-size-4" v-on:mouseover="show=true" >{{title}}</span>
          <p >{{description}}</p>
          <transition name="slide-fade">
            <div v-if="show">
              <div class="target" v-for="item in abt"  style="">
                <a :href="`https://www.cbd.int/aichi-targets/target/${Number(item)}`" target="_blank" rel="noopener"><img  :src="require(`~/assets/images/biodiversity-targets/biodiversity-target-${item}.svg`)" /></a>
              </div>
              <br>
              <div class="target" v-for="item in sdg"  style="width:40px;display:inline-block;">
                <a :href="`https://sustainabledevelopment.un.org/sdg${Number(item)}`" target="_blank" rel="noopener"><img  :src="require(`~/assets/images/sustainable-development-goals/sustainable-development-goals-${item}.svg`)" /></a>
              </div>
            </div>
          </transition>
        </div>
      </div>

  </div>
</template>

<script>

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
<style scoped>
  .card{
    cursor: pointer;
  }
  .target{
    width:40px;
    display:inline-block;
    margin: 5px 5px 5px 5px;
  }
</style>

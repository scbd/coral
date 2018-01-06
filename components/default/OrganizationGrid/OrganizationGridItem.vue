<template>
  <div class="card grid-org">
    <a :href="url" target="_blank" rel="noopener">
      <div class="card-image is-text-centered" >
        <figure class="grid-org-figure has-text-centered" >
          <img class="figure-img" v-lazy="image" :alt="title" :title="title">
        </figure>
      </div>
      <div class="card-content grid-org-content">
        <div class="content">
          {{title}}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

export default {
  name: 'OrganizationGridItem',
  props: {
      title: {
        type: String,
        default: 'text'
      },
      image: {
          type: String,
          default: 'text'
      },
      url: {
          type: String,
          default: 'text'
      },
      backImage: {
          type: String
      }
  }
}
</script>
<style scoped>
  .content{
    font-weight: 500;
        height:100%;
  }
  .card{
    border: 1px solid #0086b7;
  }
  .card-image{
    margin: 5px 5px 5px 5px;
  }
  .grid-org-figure{

    line-height: 100px;
    max-height: 100px;
  }
  .figure-img{
    vertical-align: middle;
    max-height: 100px;
    max-width: 90%;
  }
  .grid-org-content{
    background-color: #0086b7;
    color: #ffffff;
  }
</style>

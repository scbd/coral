<template>
  <a class="column is-half-tablet is-one-third-desktop" :href="url" target="_blank" rel="noopener nofollow">
    <div class="card org-card">
        <div class="org-card-image is-text-centered" >
          <figure class="grid-org-figure has-text-centered" >
            <img class="figure-img" v-lazy="image" :alt="title" :title="title">
          </figure>
        </div>
        <div class="card-content">
          <div class="org-content has-text-centered">
            {{title}}
          </div>
        </div>
    </div>
  </a>
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
      },
      padding: {
          type: Boolean,
          default: true
      }
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/vars.sass'
  @import "~bulma/sass/components/card.sass"
</style>
<style scoped>
  .org-content{
    font-weight: 500;
    height:100%;
    background-color: #00405c;
    color: #ffffff;
  }

  .org-card{
    position:relative;
    border: 1px solid #00405c;
    background-color: #00405c;
  }
  .org-card-image{
    padding: 5px 5px 5px 5px;
    background-color: #ffffff;
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

</style>

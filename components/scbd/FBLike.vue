<template>
  <a href="https://www.cbd.int">
    <a class="fb-like" data-href="https://www.facebook.com/CristianaPascaPalmer/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></a>
  </a>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'FBLike',
  data: function () {
    return {isFBReady: false}
  },
  mounted: function () {
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
  },
  beforeDestroy: function () {
    window.removeEventListener('fb-sdk-ready', this.onFBReady)
  },
  methods: {
    onFBReady: function () {
      this.isFBReady = true
    }
  },
  computed: {
    locale: function () {
      if (this.$store.state.locale.locale !== 'en') { return '/' + this.$store.state.locale.locale }
      return ''
    }
  }
}
</script>

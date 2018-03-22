<template>
  <section >
    <div  class="coral-footer" v-lazy:background-image="$CBDImage.get('coral-blue-camo-background-footer.jpg')">
      <footer class="container is-fullhd debug">

        <div class="bottom-grid is-hidden-touch debug"  >

          <div><a class="debug" href="https://www.cbd.int/terms/" target="_blank" rel="noopener"> {{ $t('termsOfUse') }} </a></div>
          <div><a class="debug" href="https://www.cbd.int/privacy/" target="_blank" rel="noopener"> {{ $t('privacyPolicy') }}</a></div>
          <div><a class="debug" href="https://www.cbd.int/credits/" target="_blank" rel="noopener"> {{ $t('credits') }}  </a></div>
          <div><a class="debug" href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> {{$t('secretariat')}} </a></div>

        </div>
      </footer>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)

  export default {
    name: 'CoralFooter'
  }
</script>

<style scoped>
.bottom-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
.bottom-grid a{color:white;}

.coral-footer{
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
}
footer{
  min-height: 275px;
}

</style>

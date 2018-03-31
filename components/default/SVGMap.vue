<template>
  <section ref="ammap">

    <div id="mapdiv" ref="mapdiv" >&nbsp;
      <div class="v-spinner" v-if="!map">
          <div class="v-clip-center">
            <img  :src="require('~/assets/images/logo/cbd-leaf-green.svg')" :alt="$t('scbdLogoLeaf')" :title="$t('scbdLogoLeafTitle')"/>
            <div>Loading ... </div>
          </div>
          <div class="v-clip" v-bind:style="spinnerStyle"></div>
      </div>
    </div>
    <PinModal v-if="showModal"/>
  </section>
</template>

<script>

import MapMixin     from '~/modules/mixins/map'

  let AmChart

  export default {
    name: 'SVGMap',
    mixins:[MapMixin],
    data () {
      return {
        map:null

      }
    },
    computed: {
      events: function(){return this.$store.state.events.docs[this.$i18n.locale] || []},
      showModal: function(){return this.$store.state.events.pin },
      spinnerStyle () {
        return {
          height: '200px',
          width: '200px',
          borderWidth: '10px',
          borderStyle: 'solid',
          borderColor: '#00405c #00405c transparent',
          borderRadius: '100%',
          background: 'transparent'
        }
      }
    }


  }

</script>
<style>
  .holder{
    position:absolute;
    top: 1px;
    left: 100px;
    width: 20px;
    height: 20px;

    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);

    z-index:9998;
  }

</style>
<style scoped>

  #mapdiv {
    width: 100%;
    background-color: #3fa9f5;
    position:relative;
    margin-bottom: 1.5em;
  }

  @media screen and (max-width: 767px) {
    #mapdiv {
      height: 250px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    #mapdiv {
      height: 400px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    #mapdiv {
      height: 500px;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    #mapdiv {
      height: 600px;
    }
  }

  @media screen and (min-width: 1408px) {
    #mapdiv {
      height: 700px;
    }
  }
  .v-spinner
  {
      text-align: center;
      position: relative;
  }
.v-clip-center{
  text-align: center;
  position: absolute;
  width: 100%;
  top: 25px;
}
  .v-spinner .v-clip
  {
      -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
              animation: v-clipDelay 0.75s 0s infinite linear;
      -webkit-animation-fill-mode: both;
  	          animation-fill-mode: both;

      display: inline-block;
  }

  @-webkit-keyframes v-clipDelay
  {
      0%
      {
          -webkit-transform: rotate(0deg) ;
                  transform: rotate(0deg) ;
      }
      50%
      {
          -webkit-transform: rotate(180deg) ;
                  transform: rotate(180deg) ;
      }
      100%
      {
          -webkit-transform: rotate(360deg) ;
                  transform: rotate(360deg) ;
      }
  }

</style>

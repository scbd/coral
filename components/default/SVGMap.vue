<template>
  <section ref="ammap">
    <div id="mapdiv" ref="mapdiv" >&nbsp;


<!-- :id="`pin-${index}`"  -->
      <div ref="`pin-${index}`" class="pin" :id="`pin-${index}`" v-for="(evt,index) in  events" :key="`pin-${index}`">xx</div>
    </div>

  </section>
</template>

<script>
import mapMix from '~/modules/mixins/map'

  export default {
    name: 'SVGMap',
    mixins: [mapMix]
  }
  // .style.top  = this.map.latitudeToY(image.latitude) + 'px'
  // .style.left = this.map.longitudeToX(image.longitude) + 'px'
</script>

<style scoped>
  .pin{
    position:absolute;
    top: 50%;
    left: 50%;
    z-index:99999999999;
  }
  #mapdiv {
    width: 100%;
    background-color: #3fa9f5;
    position:relative;
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

</style>

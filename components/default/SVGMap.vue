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
      <!-- <div ref="`pin-${index}`" class="pin" :id="`pin-${index}`" v-for="(evt,index) in  events" :key="`pin-${index}`"></div> -->
    </div>

  </section>
</template>

<script>

import MapMixin from '~/modules/mixins/map'
import VueLazyload from 'vue-lazyload'
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

    // mounted() {
    //   require('ammap3')
    //   this.initMap()
    //   this.createPinImages()
    //
    //   this.map.validateData()
    //   this.propPins()
    //   this.map.validateData()
    // },
    // methods:{
    //   propPins:dropPins,
    //   createPinImages:createPinImages,
    //   initMap:initMap
    // }
  }

  // //=======================================================================
  // //
  // //=======================================================================
  // function renderComp(elId) {
  //   const pin = {
  //     template: '<div ><img :src="require(\'~/assets/images/action.svg\')"></img></div>'
  //   }
  //
  //   const PinClass = Vue.extend(pin);
  //
  //   const vm = new PinClass({
  //     propsData: {
  //       text: 'HI :)'
  //     }
  //   }).$mount(elId)
  //
  // }
  //
  // //=======================================================================
  // //
  // //=======================================================================
  // function createPinImages() {
  //   let events = this.events
  //   let images = this.map.dataProvider.images
  //   for (let i in events ) {
  //     images[i]={}
  //     images[i].id = `pin-${i}`
  //     images[i].longitude = events[i].lng_d
  //     images[i].latitude =  events[i].lat_d
  //     images[i].label = ' XXX '
  //     //images[i].imageURL = require('~/assets/images/action.svg')
  //     // images[i].svgPath ='M44.67,0A44.72,44.72,0,0,0,0,44.67c0,23.7,40.6,85.46,42.34,88.08a2.79,2.79,0,0,0,4.66,0c1.73-2.62,42.34-64.38,42.34-88.08A44.72,44.72,0,0,0,44.67,0Zm0,64.21A19.54,19.54,0,1,1,64.21,44.67,19.57,19.57,0,0,1,44.67,64.21Z'
  //     // images[i].scale = 0.2
  //     // images[i].color = '#e8768d'
  //     // images[i].selectable = true
  //     // images[i].rollOverColor = '#fac1ff'
  //
  //   }
  // }
  //
  // //=======================================================================
  // //
  // //=======================================================================
  // function dropPins() {
  //   let images = this.map.dataProvider.images
  //   for (let image of images ) {
  //     let holder = document.createElement('div')
  //     holder.style.position = 'absolute'
  //     holder.className='debug'
  //     let pin = document.createElement('img')
  //
  //     pin.setAttribute('src', require('~/assets/images/action.svg'))
  //     holder.appendChild(pin)
  //     holder.style.top = this.map.latitudeToY(image.latitude) + 'px'
  //     holder.style.left = this.map.longitudeToX(image.longitude) + 'px'
  //
  //     console.log(document.getElementById('mapdiv'))
  //     console.log(holder)
  //
  //     document.getElementById('mapdiv').appendChild(holder)
  //     image.externalElement = holder
  //     image.validate()
  //   }
  // //  console.log(this.$refs)
  // }
  // //=======================================================================
  // //
  // //=======================================================================
  // function createPins() {
  //   let images = this.map.dataProvider.images
  //   for (let i in images ) {
  //     images[i]={}
  //     images[i].id = `pin-${i}`
  //     images[i].longitude = this.events[i].lng_d
  //     images[i].latitude =  this.events[i].lat_d
  //     images[i].label = ' '
  //
  //     //this.$createElement('div')
  //
  //     //images[i].label='<img src=""></img>'
  //     //images[i].chart.chartDiv = holder
  //   }
  // }
  //
  // //=======================================================================
  // //
  // //=======================================================================
  // function initMap() {
  //     AmChart = AmCharts
  //     AmChart.maps.worldEUHigh = worldEUHigh
  //
  //     AmChart.themes.light = {
  //       themeName:"light",
  //       // ammap
  //       AreasSettings: {
  //         alpha: 0.8,
  //         color: "#00405c",
  //         colorSolid: "#003767",
  //         unlistedAreasAlpha: 0.4,
  //         unlistedAreasColor: "#000000",
  //         outlineColor: "#3fa9f5",
  //         outlineAlpha: 0.8,
  //         outlineThickness: 0.5,
  //         rollOverColor: "#3c5bdc",
  //         rollOverOutlineColor: "#3fa9f5",
  //         selectedOutlineColor: "#3fa9f5",
  //         selectedColor: "#f15135",
  //         unlistedAreasOutlineColor: "#FFFFFF",
  //         unlistedAreasOutlineAlpha: 0.5
  //       },
  //       ZoomControl: {
  //         buttonFillAlpha:0.7,
  //         buttonIconColor:"#a7a7a7"
  //       }
  //     }
  //
  //     this.map=AmChart.makeChart( 'mapdiv', {
  //           'type': 'map',
  //           'theme': 'light',
  //           'projection': 'eckert6',
  //           'responsive': {
  //                'enabled': true
  //              },
  //           'dataProvider': {
  //             'map': 'worldEUHigh',
  //             'getAreasFromMap': true
  //           },
  //           'areasSettings': {
  //             'autoZoom': true,
  //             'color': '#3311cc',
  //             'selectedColor': '#003366',
  //             'rollOverColor': '#003366',
  //             "selectable": true
  //           }
  //         } )
  // }

  // .style.top  = this.map.latitudeToY(image.latitude) + 'px'
  // .style.left = this.map.longitudeToX(image.longitude) + 'px'
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

    z-index:99999999;
  }
  .pin {
    width: 30px;
    height: 30px;
    cursor: pointer;

    position: absolute;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

    left: 70%;
    bottom: -4px;
    margin: -15px 0 0 -15px;
    z-index:99999999999;
  }
</style>
<style scoped>
  /* .pin{
    position:absolute;
    top: 50%;
    left: 50%;
    z-index:99999999999;
  } */
  /* .pin {
    width: 30px;
    height: 30px;
    cursor: pointer;
    -webkit-border-radius: 50% 50% 50% 0;
    border-radius: 50% 50% 50% 0;
    position: absolute;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -30px 0 0 -15px;
    z-index:99999999999;
  } */
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

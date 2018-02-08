
import Vue from 'vue'
import worldEUHigh  from '~/static/worldEUHigh'


let AmChart
let updateInProgress = false
export default {
  data () {
    return {
    map:null
  } },
  computed: {
    events: function(){return this.$store.state.events.docs[this.$i18n.locale] || []}
  },
  mounted() {
    require('ammap3')
    this.initMap()
    this.createPinImages()
    this.map.validateData()
    this.dropPins()
    this.map.validateData()
    // this.map.addListener("homeButtonClicked", this.updateCustomMarkers);
    // this.map.addListener("positionChanged", this.updateCustomMarkers);
    this.map.addListener('positionChanged',()=>{
        // console.log('updateInProgress:',updateInProgress);
      setTimeout(()=>{updateInProgress=false
        // setTimeout(()=>{if(!updateInProgress) this.map.validateData()}, 1500);
      }, 1000);
      if(!updateInProgress)
        this.updateCustomMarkers();
      updateInProgress=true
    });
  },
  methods:{
    dropPins:dropPins,
    createPinImages:createPinImages,
    initMap:initMap,
    updateCustomMarkers:updateCustomMarkers
  }
}

//=======================================================================
//
//=======================================================================
function renderComp(elId) {
  const pin = {
    template: '<div ><img :src="require(\'~/assets/images/action.svg\')"></img></div>'
  }

  const PinClass = Vue.extend(pin);

  const vm = new PinClass({
    propsData: {
      text: 'HI :)'
    }
  }).$mount(elId)

}

//=======================================================================
//
//=======================================================================
function createPinImages() {
  let events = this.events
  let images = this.map.dataProvider.images
  for (let i in events ) {
    images[i]={}
    images[i].id = `pin-${i}`
    images[i].longitude = events[i].lng_d
    images[i].latitude =  events[i].lat_d
    images[i].label = ' '
    //images[i].imageURL = require('~/assets/images/action.svg')
    // images[i].svgPath ='M44.67,0A44.72,44.72,0,0,0,0,44.67c0,23.7,40.6,85.46,42.34,88.08a2.79,2.79,0,0,0,4.66,0c1.73-2.62,42.34-64.38,42.34-88.08A44.72,44.72,0,0,0,44.67,0Zm0,64.21A19.54,19.54,0,1,1,64.21,44.67,19.57,19.57,0,0,1,44.67,64.21Z'
    // images[i].scale = 0.2
    // images[i].color = '#e8768d'
    // images[i].selectable = true
    // images[i].rollOverColor = '#fac1ff'

  }
}

//=======================================================================
//
//=======================================================================
function dropPins() {
  let images = this.map.dataProvider.images
  let test =0
  for (let image of images ) {

    let holder = document.createElement('div')
    holder.style.position = 'absolute'
    holder.className='holder'
    let pin = document.createElement('img')
// if(test==4){
    pin.setAttribute('src', require('~/assets/images/action.svg'))
    pin.className = 'pin'
    holder.appendChild(pin)

    let px =this.map.coordinatesToStageXY(image.longitude,image.latitude)
    // holder.style.top = this.map.latitudeToY(image.latitude) + 'px'
    // holder.style.left = this.map.longitudeToX(image.longitude) + 'px'
    //
    // console.log('holder.style.top ',holder.style.top )
    // console.log('holder.style.left ',holder.style.left )

    holder.style.top = Number(px.y-21)+ 'px'
    holder.style.left = Number(px.x-2)+ 'px'

//     console.log('holder.style.left - x - long',px.x)
//     console.log('holder.style.top - y - lat',px.y)
//     console.log('holder.style.top ',holder.style.top )
//     console.log('holder.style.left ',holder.style.left )
// console.log(image.latitude)
// console.log(image.longitude)
// console.log(image)

// }
      // console.log(document.getElementById('mapdiv'))
      // console.log(holder);
      document.getElementById('mapdiv').appendChild(holder)
      image.externalElement = holder
      image.validate()
//test++
  }
//  console.log(this.$refs)
}
//=======================================================================
//
//=======================================================================
function createPin() {
  let images = this.map.dataProvider.images
  for (let i in images ) {
    images[i]={}
    images[i].id = `pin-${i}`
    images[i].longitude = this.events[i].lng_d
    images[i].latitude =  this.events[i].lat_d
    images[i].label = ' '

    //this.$createElement('div')

    //images[i].label='<img src=""></img>'
    //images[i].chart.chartDiv = holder
  }
}

//=======================================================================
//
//=======================================================================
function initMap() {
    AmChart = AmCharts
    AmChart.maps.worldEUHigh = worldEUHigh

    AmChart.themes.light = {
      themeName:"light",
      // ammap
      AreasSettings: {
        alpha: 0.8,
        color: "#00405c",
        colorSolid: "#003767",
        unlistedAreasAlpha: 0.4,
        unlistedAreasColor: "#000000",
        outlineColor: "#3fa9f5",
        outlineAlpha: 0.8,
        outlineThickness: 0.5,
        rollOverColor: "#3c5bdc",
        rollOverOutlineColor: "#3fa9f5",
        selectedOutlineColor: "#3fa9f5",
        selectedColor: "#f15135",
        unlistedAreasOutlineColor: "#FFFFFF",
        unlistedAreasOutlineAlpha: 0.5
      },
      ZoomControl: {
        buttonFillAlpha:0.7,
        buttonIconColor:"#a7a7a7"
      }
    }

    this.map=AmChart.makeChart( 'mapdiv', {
          'type': 'map',
          'theme': 'light',
          // 'projection': 'eckert6',
          'responsive': {
               'enabled': true
             },
          'dataProvider': {
            'map': 'worldEUHigh',
            'getAreasFromMap': true
          },
          'areasSettings': {
            'autoZoom': true,
            'color': '#3311cc',
            'selectedColor': '#003366',
            'rollOverColor': '#003366',
            "selectable": true
          }
        } )
        this.map.addListener("click", function(event) {
          let info = event.chart.getDevInfo();

            console.log({
              "latitude": info.latitude,
              "longitude": info.longitude
            });

        })
}

//=======================================================================
//
//=======================================================================
function updateCustomMarkers() {
    let images = this.map.dataProvider.images

console.log('updateCustomMarkersupdateCustomMarkersupdateCustomMarkersupdateCustomMarkers')
    for (var x in images) {
        var image = images[x];
        //
        // if (typeof image.externalElement == 'undefined') {// create pin is it does not exist
        //     image.externalElement = generateMarker(x);
        //   }

        if (typeof image.externalElement !== 'undefined') { //update xy based on movement of map
          let px =this.map.coordinatesToStageXY(image.longitude,image.latitude)
          // holder.style.top = this.map.latitudeToY(image.latitude) + 'px'
          // holder.style.left = this.map.longitudeToX(image.longitude) + 'px'
          //
          // console.log('holder.style.top ',holder.style.top )
          // console.log('holder.style.left ',holder.style.left )

          image.externalElement.style.top = Number(px.y-21)+ 'px'
          image.externalElement.left = Number(px.x-2)+ 'px'
            // image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
            // image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
        }

    } //for
//this.map.validateData()
// this.map.validateNow(true,false)
} //updateCustomMarkers

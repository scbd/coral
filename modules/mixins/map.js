
import Vue          from 'vue'
import worldEUHigh  from '~/static/worldEUHigh'
import Pin          from '~/components/default/MapPin'
// import PinModal     from '~/components/default/PinModal'

let AmChart

export default {
  data () {
    return {
    map:null
  } },
  components:{
    PinModal:()=> import('~/components/default/PinModal')
  },
  computed: {
    events: function(){return this.$store.state.events.docs[this.$i18n.locale] || []}
  },
  mounted() {
    require('ammap3')
    this.initMap()
    this.hideEu()
    this.createPinImages()
    this.map.validateData()
    this.dropPins()

    this.map.addListener("homeButtonClicked", this.updateCustomMarkers);
    this.map.addListener("positionChanged", this.updateCustomMarkers)
    this.map.addListener('zoomCompleted',this.updateCustomMarkers)

    this.map.addListener("click", function(event) {
      let info = event.chart.getDevInfo();
        console.log(info);
    })

  },
  methods:{
    dropPins:dropPins,
    createPinImages:createPinImages,
    initMap:initMap,
    updateCustomMarkers:updateCustomMarkers,
    hideEu:hideEu
  }
}// export


//=======================================================================
//
//=======================================================================
function createPinImages() {
  let events = this.events
  let images = this.map.dataProvider.images

  for (let i in events ) {
    images[i]={}
    images[i].id = events[i].identifier_s
    images[i].longitude = events[i].lng_d
    images[i].latitude =  events[i].lat_d
    images[i].label = ' '
  }
}//createPinImages

//=======================================================================
//
//=======================================================================
function hideEu() {

  if(this.map && this.map.dataProvider)
  for (let map of this.map.dataProvider.areas) {
      if(map.id==='divider1' || map.id==='EU')
        map.colorReal = '#3fa9f5'
  }
}

//=======================================================================
//
//=======================================================================
function dropPins() {
  let images = this.map.dataProvider.images

  for (let image of images ) {
    let holder = document.createElement('div')
    holder.style.position = 'absolute'
    holder.className='holder'
    holder.setAttribute('id',image.id+'-mount' )

    let PinComp = Vue.extend(Pin)
    let props =  {propsData: {identifier: image.id}, parent: this}

    let pin = new PinComp(props).$mount()
    holder.appendChild(pin.$el)

    let px =this.map.coordinatesToStageXY(image.longitude,image.latitude)

    holder.style.top = Number(px.y-21)+ 'px'
    holder.style.left = Number(px.x-2)+ 'px'

    document.getElementById('mapdiv').appendChild(holder)
    image.externalElement = holder
    image.validate()

  }

}//dropPins


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
          },
          images:[]
        } )

}

//=======================================================================
//
//=======================================================================
function updateCustomMarkers() {
    let images = this.map.dataProvider.images

    for (var x in images) {
        var image = images[x];

        if (typeof image.externalElement !== 'undefined') { //update xy based on movement of map
          let px =this.map.coordinatesToStageXY(image.longitude,image.latitude)
          image.externalElement.style.top = Number(px.y-21)+ 'px'
          image.externalElement.style.left = Number(px.x-2)+ 'px'
        }
    } //for
} //updateCustomMarkers

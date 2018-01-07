<template>
  <section ref='ammap'>
    <div id='mapdiv'>&nbsp;</div>
  </section>
</template>

<script>
  export default {
    name: 'SVGMap',
    mounted() {
      require('ammap3')
      require('~/components/default/worldEuHigh')
        // this.loadJs('https://www.amcharts.com/lib/3/maps/js/worldLow.js').then(function(AmCharts){
        AmCharts.themes.light = {

        	themeName:"light",

        	// ammap
        	AreasSettings: {
        		alpha: 0.8,
        		color: "#67b7dc",
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
          AmCharts.makeChart( 'mapdiv', {
                'type': 'map',
                'theme': 'light',
                'projection': 'eckert6',
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
    }
  }


</script>

<style scoped>
  #mapdiv {
    width: 100%;
    background-color: #3fa9f5;
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

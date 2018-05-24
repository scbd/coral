<template>
  <div class="tw-grid" ref="tgrid">
      <a class="twitter-grid"  data-limit="7" data-chrome="noborders" data-link-color="%2300405c" data-border-color="%d44f83" data-maxheight="600" data-width="700" href="https://twitter.com/CBDNews/timelines/947967151062900736?ref_src=twsrc%5Etfw">Coral Portal</a>
  </div>
</template>

<script>
  export default {
    name: 'TwitterGrid',
    mounted() {
        const script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('charset', 'utf-8')
        script.setAttribute('async', 'async')
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
        this.$refs.tgrid.appendChild(script)
    }
  }
</script>
<style>
  .tw-grid{
    margin-bottom:1.5em;
  }
</style>

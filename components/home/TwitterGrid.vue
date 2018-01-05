<template>
  <section ref="tgrid">
    <a class="twitter-grid" href="https://twitter.com/CBDNews/timelines/947967151062900736?ref_src=twsrc%5Etfw">Coral Portal</a>
  </section>
</template>

<script>
  export default {
    name: 'TwitterGrid',
    asyncData ({app,isClient}) {
      return {
        isClient: isClient
      }
    },
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

<style scoped>

</style>

<template>
  <div class="img-div" :style="{ height: this.getSize + 'px'}" v-lazy:background-image="$CBDImage.get('coral-gradient-bar.jpg')">

  </div>
</template>

<script>
  export default {
    name: 'DividerGradBar',
    props: {
        size: {
          type: Number,
          default: 12
        }
    },
    computed:{
      getSize: function () {
        if(this.$breakpoints.isMobile)
          return this.size/2;
        if(this.$breakpoints.isTablet)
          return this.size/2;
        return this.size
      }
    }
  }
</script>

<style scopped>

  .img-div{
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 100%;
    height:4px;
  }

</style>

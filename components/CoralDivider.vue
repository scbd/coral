<template>
  <div class="coral-div"  v-lazy:background-image="$CBDImage.get('coral-divier.jpg',989,108)">
  </div>
</template>

<script>
  export default {
    name: 'CoralDivider'
  }
</script>

<style scopped>

  .coral-div{
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 70%;
    height:35px;
    margin-bottom:-2px;
  }
  @media (min-width:500px){
    .coral-div{
      height:40px;
    }
  }
  @media (min-width:600px){
    .coral-div{
      height:52px;
    }
  }
  @media (min-width:700px){
    .coral-div{
      height:60px;
    }
  }
  @media (min-width:800px){
    .coral-div{
      height:67px;
    }
  }
  @media (min-width:900px){
    .coral-div{
      height:74px;
    }
  }
  @media (min-width:989px){
    .coral-div{
      background-size: auto;
      height:108px;
    }
  }
</style>

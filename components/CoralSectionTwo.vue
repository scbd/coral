<template>
  <div class="holder-two"  v-lazy:background-image="$CBDImage.get('blue-div-with-pink-embellishments.jpg')">
    <div class="text-holder-two">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CoralSectionTwo'
  }
</script>

<style scopped>
  .holder-two{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 3em 3em 3em 3em;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    margin-bottom: 1.5em;
    min-height:450px;
  }
  .text-holder-two{
    max-width:700px;
    color:white;
  }
</style>

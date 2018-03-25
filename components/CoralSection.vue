<template>
  <div class="holder"  v-lazy:background-image="$CBDImage.get('coral-bk.jpg')">
    <div class="text-holder ">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CoralSection'
  }
</script>

<style scopped>
  .holder{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 3em 3em 3em 3em;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
        margin-bottom: 1.5em;
  }
  .text-holder{
    max-width:400px;
    min-width:200px;
    color:white;
    text-align: justify;
  }
</style>

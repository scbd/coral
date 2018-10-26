<template>
  <div class="coral-section-holder"  v-lazy:background-image="$CBDImage.get('coral-bk.svg')">
    <div class="coral-section-text-holder">
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
  .coral-section-holder{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 3em 3em 3em 3em;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
        margin-bottom: 4em;
        min-height:450px;
  }
  .coral-section-holder:after{
    content:'';
    min-height:inherit;
    font-size:0;
    display: block;
  }
  .coral-section-text-holder{
    max-width:400px;
    min-width:200px;
    color:white;
    text-align: justify;
    font-size: 1.5em;
  }
</style>

<template>
  <div class="holder"  v-lazy:background-image="'https://s3.amazonaws.com/cbddocumentsimages-imagebucket-emyy2umszkrb/coral-background-bg.jpg'">
    <div class="text-holder">
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
  }
  .text-holder{
    max-width:400px;
    min-width:200px;
    color:white;
    text-align: justify;
  }
</style>

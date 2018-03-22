<template>
  <div class="holder">
    <img v-lazy="'https://s3.amazonaws.com/cbddocumentsimages-imagebucket-emyy2umszkrb/bubbles-left.png'"/>
    <div class="text-holder">
      <slot>

      </slot>
    </div>
    <img v-lazy="'https://s3.amazonaws.com/cbddocumentsimages-imagebucket-emyy2umszkrb/bubbles-right.png'"/>
  </div>
</template>

<script>
  export default {
    name: 'BubblesSection'
  }
</script>

<style scopped>
  .holder{
    background-color: #00405c;
    margin-bottom: 1.5em;
  }
  .holder{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 1.2em 1.2em 1.2em 1.2em;
  }
  .text-holder{
    max-width:400px;
    min-width:200px;
    color:white;
    text-align: justify;
  }

</style>

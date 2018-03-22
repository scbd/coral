<template>
  <div class="container outer">
      <div class="inner">
          <div class="img-div" v-lazy:background-image="'https://s3.amazonaws.com/cbddocumentsimages-imagebucket-emyy2umszkrb/coral-title-gradient-bar.png'">
          </div>
          <h2>
            <slot></slot>
          </h2>
          <div class="img-div" v-lazy:background-image="'https://s3.amazonaws.com/cbddocumentsimages-imagebucket-emyy2umszkrb/coral-title-gradient-bar.png'">
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Subtitle'
  }
</script>

<style scopped>
  H2{
    font-size: 2em;
    font-weight: 600;
  }
  .img-div{
    background-repeat: no-repeat;
    background-position:center center;
    background-size:100% 100%;
    backdrop-filter: alpha(opacity=70);
    height:4px;
    width:150%
  }
  .inner{
    display:flex;
    flex-direction:column;
    align-items: center;
  }
  .outer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5em;
  }
</style>

<template>
    <div class="container outer">
        <div class="inner">
            <div class="img-div" v-lazy:background-image="$CBDImage.get('coral-title-gradient-bar.png')">
            </div>
            <h2>
              <slot></slot>
            </h2>
            <div class="img-div" v-lazy:background-image="$CBDImage.get('coral-title-gradient-bar.png')">
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

  .inner H2{
    font-size: 1.5em;
    font-weight: 600;
    padding: 0 1em 0 1em ;
    text-align: center;
  }
  .img-div{
    background-repeat: no-repeat;
    background-position:center center;
    background-size:100% 100%;
    backdrop-filter: alpha(opacity=70);
    height:4px;
    width:100%
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
    margin-bottom: 4em;
  }

</style>

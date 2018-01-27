<template>
  <div :class="{grid: !gridStyle, gridTwo: gridStyle}" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OrganizationGrid',
  props: {
      gridStyle: {
        type: Boolean,
        default: false
      }
  }
}
</script>
<style scoped>
  .grid, .gridTwo{
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 1.5em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .grid{
      grid-template-columns: 1fr 1fr ;
    }
  }
  @media (min-width:1024px){
    .grid{
      grid-template-columns: 1fr 1fr 1fr;
    }
    .gridTwo{
      grid-template-columns: 1fr 1fr 1fr  ;
    }
  }
  @media (min-width:1216px){
    .grid{
      grid-template-columns: 1fr 1fr 1fr ;
    }
    .gridTwo{
      grid-template-columns: 1fr 1fr 1fr  ;
    
    }
  }
  @media (min-width:1408px){
    .grid{
      grid-template-columns: 1fr 1fr 1fr ;
    }
    .gridTwo{
      grid-template-columns: 1fr 1fr 1fr  ;

    }
  }
</style>

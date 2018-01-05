<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OrganizationGrid'
}
</script>
<style scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr ;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr ;
      grid-gap: 1em;
    }
  }

  @media (min-width:1024px){
    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1em;
    }
  }

</style>

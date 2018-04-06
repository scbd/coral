<template>
  <div class="columns is-multiline org-grid" >
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
  .org-grid{margin-bottom: 4em;}
</style>

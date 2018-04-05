<template>
  <div class="columns is-multiline" >
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

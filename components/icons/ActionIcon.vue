<template>

    <svg xmlns="http://www.w3.org/2000/svg" :style="{fill:color}" style="max-height:127px;" viewBox="0 0 89.34 134.01"><title>Coral Reef's Action Icon</title><path  d="M44.67,0A44.72,44.72,0,0,0,0,44.67c0,23.7,40.6,85.46,42.34,88.08a2.79,2.79,0,0,0,4.66,0c1.73-2.62,42.34-64.38,42.34-88.08A44.72,44.72,0,0,0,44.67,0Zm0,64.21A19.54,19.54,0,1,1,64.21,44.67h0A19.58,19.58,0,0,1,44.67,64.21Z"/></svg>

</template>
<!-- :viewBox="viewPort()" -->
<script>
export default {
  name: 'ActionIcon',
  props: {
      color: {
          type: String,
          default: '#000000'
      }
  }
}
</script>

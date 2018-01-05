<template>

  <svg xmlns="http://www.w3.org/2000/svg" :style="{fill:color}" style="max-height:128px;" viewBox="0 0 114.37 134.03"><title>Coral Reef Initiatives Icon</title><path  d="M50.2,97.69A47.49,47.49,0,1,0,2.71,50.2h0A47.54,47.54,0,0,0,50.2,97.69Z" transform="translate(-0.01 0.03)"/><path  d="M95.63,95.63A64.27,64.27,0,0,0,97.5,6.84l2.08-2.08a2.81,2.81,0,0,0-4-3.95h0l-7.9,7.9a2.81,2.81,0,1,0,3.95,4h0l1.87-1.88A58.58,58.58,0,0,1,10.79,93.56l1.88-1.88a2.81,2.81,0,1,0-3.95-4L.82,95.63a2.81,2.81,0,0,0,4,4h0l2-2.08a63.92,63.92,0,0,0,37.77,16.65v3.38A58.15,58.15,0,0,0,15.1,129a2.79,2.79,0,0,0,1.67,5H83.62a2.79,2.79,0,0,0,1.67-5,58.14,58.14,0,0,0-29.51-11.44v-3.38A64,64,0,0,0,95.63,95.63Z" transform="translate(-0.01 0.03)"/></svg>

</template>
<!-- :viewBox="viewPort()" -->
<script>
export default {
  name: 'InitiativeIcon',
  props: {
      color: {
          type: String,
          default: '#000000'
      }
  }
}
</script>

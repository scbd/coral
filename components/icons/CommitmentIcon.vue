<template>
<svg xmlns="http://www.w3.org/2000/svg" :style="{fill:color}" style="max-height:97px;" viewBox="0 0 128.31 133.04" preserveAspectRatio="xMaxYMax meet"><title>Coral Reef Commitment Icon</title><path d="M.06,121.43H72.63v12.09H.06Zm25.67-78.2L42.84,26.12l85.53,85.54-17.1,17.1ZM68.48.48,102.69,34.7,85.59,51.8,51.38,17.59ZM17.17,51.8,51.38,86,34.27,103.12.06,68.91Z" transform="translate(-0.06 -0.48)"/></svg>
</template>
<!-- :viewBox="viewPort()" -->
<script>
export default {
  name: 'CommitmentIcon',
  props: {
      color: {
          type: String,
          default: '#000000'
      }
  }
}
</script>

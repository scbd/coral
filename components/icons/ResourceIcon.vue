<template>

<svg xmlns="http://www.w3.org/2000/svg" :style="{fill:color}" style="max-height:97px;" viewBox="0 0 125.62 134" preserveAspectRatio="xMaxYMax meet"><title>Coral Reeef Resource Icon</title><path   d="M47.46,97.71a41.81,41.81,0,0,1,64.21-35.36V25.13a2.8,2.8,0,0,0-2.79-2.79H14A8.38,8.38,0,0,1,14,5.58h94.92a2.79,2.79,0,0,0,0-5.58H14A14,14,0,0,0,0,14V120a14,14,0,0,0,14,14H68.53A41.86,41.86,0,0,1,47.46,97.71Z"/><path   d="M89.33,61.42a36.29,36.29,0,1,0,36.29,36.29A36.29,36.29,0,0,0,89.33,61.42Zm13.14,41.06L91.31,113.63a2.85,2.85,0,0,1-4,0L76.19,102.47a2.79,2.79,0,0,1,4-4h0l6.4,6.4V83.75a2.79,2.79,0,1,1,5.58,0v21.18l6.4-6.4a2.79,2.79,0,1,1,4,4Z"/><path   d="M14,11.17a2.79,2.79,0,0,0,0,5.58h89.33a2.79,2.79,0,1,0,0-5.58H14Z"/></svg>
</template>
<!-- :viewBox="viewPort()" -->
<script>
export default {
  name: 'ResourceIcon',
  props: {
      color: {
          type: String
      }
  }
}
</script>

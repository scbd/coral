<template>

      <img class="pin" v-lazy="require('~/assets/images/action.svg')" v-on:click="getAction"/>

</template>

<script>

  export default {
    name: 'MapPin',
    props: {
        identifier: {
          type: String
        }
    },

    methods:{

      getAction: function(){  this.$store.dispatch('events/getAction',this.identifier);}
    }
  }
</script>

<style >

.pin {
  width: 30px;
  height: 30px;
  cursor: pointer;

  position: absolute;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);

  left: 70%;
  bottom: -4px;
  margin: -15px 0 0 -15px;
  z-index:9998;
}
</style>

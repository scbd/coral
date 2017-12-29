<template>
  <section>
    <div class="navbar-item has-dropdown is-hoverable" >
      <a class="navbar-link is-uppercase cbd-size" v-on:click="showMobile()" v-if="!mobileOptionsOnly" >
        <span v-show="!showMobileFlag"><img class="logo" src="~/assets/images/logo/cbd-leaf-green.svg"></img>  UN Biodiversity</span>
        <span class="is-hidden-desktop" v-show="showMobileFlag"><i class="fontello icon-cancel" ></i></span>
      </a>
      <options class="is-hidden-desktop"  v-show="showMobileFlag && mobileOptionsOnly" />
      <options class="is-hidden-touch" />
    </div>
  </section>
</template>

<script>
import options from '~/components/scbd/GlobalBar/scbd/options.vue'

let showLinks = false
export default {
  name: 'SCBDNavItem',
  props: {
      mobileOptionsOnly: {
        type: Boolean,
        default: false
      }
  },
  components: {options},
  computed: {

    showMobileFlag: function () {
      return this.$store.state.scbd.showMobileFlag
    }
  },
  // define methods under the `methods` object
  methods: {
    showMobile: function () {
      let showMobileFlag = !this.$store.state.scbd.showMobileFlag
      this.$store.commit('scbd/setMobileShow', showMobileFlag)
    }
  }
}
</script>
<style scoped>

.gobal-menu{
  min-height: 30px;
  margin-bottom: 0;
  border: 0;
  z-index: 100;
  border-bottom: 1px solid rgb(231, 231, 231);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 5px rgba(0,0,0,.075);
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  transition: top 0.2s ease-in-out;
  position:fixed;
  top:0px;
  width:100%;
}
.nav-up {
  top: -35px;
}
.gobal-menu .logo{
  max-height: 24px;
}
.cbd-links:hover {
  color: #000000;
}
.cbd-links a {
  text-shadow: 0 1px 0 rgba(255,255,255,.25);
  color: #4d4d4d;
  font-family: "Helvetica Neue", Helvetica, sans-serif, Trebuchet MS;
  text-rendering: optimizeLegibility;
  font-size: 14px;
  margin: 0 10px 0 10px;
}
.cbd-links a:hover{
  color:#111;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatey(-35px);
  opacity: 0;
}
</style>

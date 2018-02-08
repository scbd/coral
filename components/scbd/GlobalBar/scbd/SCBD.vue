<template>
  <section>
    <div class="navbar-item has-dropdown is-hoverable pointer" >

      <a class="navbar-link name" v-on:click="toggle()" v-if="!mobileOptionsOnly" >

        <img class="logo is-hidden-desktop" :src="getImg('cbd-leaf-green.jpg',83,106)" :alt="$t('scbdLogoLeaf')" :title="$t('scbdLogoLeafTitle')" v-if="!mobileOptionsOnly && !showMobileFlag"/>
        <i v-if="!showDesktopFlag" class="fontello icon-menu is-size-6 is-hidden-touch" ></i>
        <span  v-if="showMobileFlag || showDesktopFlag"><i class="fontello icon-cancel" ></i></span>
        <span v-show="!$breakpoints.isTouch">Convention on Biological Diversity</span>
        <span class="mobi-name" v-show="!showMobileFlag && this.$breakpoints.isTouch">CBD</span>

      </a>

      <options class="is-hidden-desktop"  v-if="mobileOptionsOnly" />
      <!-- <options class="is-hidden-touch" /> -->
      <transition name="slide-fade-ltr">
       <div class="navbar-menu" v-if="showDesktopFlag">
         <a class="navbar-link"> The Convention </a>
         <a class="navbar-link">Cartagena Protocol</a>
         <a class="navbar-link">Nagoya Protocol</a>
         <a class="navbar-link">Programmes</a>
         <a class="navbar-link ">Information</a>
         <a class="navbar-link ">Secretariat</a>
       </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import options from '~/components/scbd/GlobalBar/scbd/options.vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

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
    showDesktopFlag: function () {
      return this.$store.state.scbd.showDesktopFlag
    },
    showMobileFlag: function () {
      return this.$store.state.scbd.showMobileFlag
    }
  },
  // define methods under the `methods` object
  methods: {
    toggle: function () {

      if(this.$breakpoints.isTouch) this.showMobile()
      else this.showDesktop()
    },
    showDesktop: function () {
      let showDesktopFlag = !this.$store.state.scbd.showDesktopFlag
      this.$store.commit('scbd/setDesktopShow', showDesktopFlag)
    },
    showMobile: function () {
      let showMobileFlag = !this.$store.state.scbd.showMobileFlag
      this.$store.commit('scbd/setMobileShow', showMobileFlag)
    },
    getImg: function (name,width) {
          return this.$CBDImage.get(name,width)
    }
  }
  //getImg('cbd-leaf-green.jpg',83,106)
}
</script>
<style scoped>
.logo{
  max-height: 25px;
  vertical-align: middle;
  margin-right: 3px;
}
.mobi-name{
  vertical-align: middle;
}
.icon-menu{
    color:#bdbdbd;
}
.navbar-item:hover  .icon-menu{
    color:#979797;
}
.navbar-item.has-dropdown.is-active .navbar-link, .navbar-item.has-dropdown:hover .navbar-link{
  background-color: #ffffff !important;
}
.navbar-item:hover,.navbar-link:hover, .is-active {
    background-color: #ffffff !important;
    color: #979797  !important;
}

.name {
  padding-left: 2em;
}
.navbar-item{
  line-height: 25px;
}
.navbar-link{
  padding-top: 0;
  padding-bottom: 0;
  padding-left: .4em;
  padding-right: 1em;
  font-size: 1em;
  white-space: nowrap;
  display:inline-block;
  color:#bdbdbd;
  font-family: "Helvetica Neue", Helvetica, sans-serif, "Trebuchet MS";
  text-shadow: 0 1px 0 rgba(255,255,255,.25);
  font-size: 16px;
  line-height: 20px;
}
.navbar-link:after{
  border: unset;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-ltr-enter-active {
  transition: all .3s ease;
}
.slide-fade-ltr-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-ltr-enter, .slide-fade-ltr-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatex(-35px);
  opacity: 0;
}

@media (min-width:1024px){
  .navbar-item{
    padding-left:15px;
  }

  .navbar-link{
    padding-top: .2em;
  }
}
</style>

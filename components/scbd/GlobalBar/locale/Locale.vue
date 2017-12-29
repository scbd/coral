<template>
  <section>
    <div class="navbar-item has-dropdown is-hoverable" >
      <a class="navbar-link is-uppercase cbd-size" v-on:click="showMobile()" v-if="!mobileOptionsOnly">
        <span v-show="!showMobileFlag"><i class="fontello icon-language is-size-6" ></i></span>
        <span class="is-hidden-desktop" v-show="showMobileFlag"><i class="fontello icon-cancel is-size-5" ></i></span>
      </a>
      <options class="is-hidden-desktop" v-show="showMobileFlag && mobileOptionsOnly" />
      <options class="is-hidden-touch" />
    </div>
 </section>
</template>

<script>
import options from '~/components/scbd/GlobalBar/locale/options.vue'
export default {
  name: 'Locale',
  components: {options},
  props: {
      mobileOptionsOnly: {
        type: Boolean,
        default: false
      }
  },
  computed: {
    locale: function () {
      return this.$store.state.locale.locale
    },
    showMobileFlag: function () {
      return this.$store.state.locale.showMobileFlag
    }
  },
  // define methods under the `methods` object
  methods: {
    showMobile: function () {
      let showMobileFlag = !this.$store.state.locale.showMobileFlag
      this.$store.commit('locale/setMobileShow', showMobileFlag)
    }
  }

}

</script>
<style scoped>
.cbd-size{
  font-size: 14px;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatey(-5px);
  opacity: 0;
}
</style>

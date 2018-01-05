<template>
  <section>
    <div class="navbar-item has-dropdown is-hoverable" >
      <a class="navbar-link is-uppercase cbd-size is-paddingless" v-on:click="showMobile()" v-if="!mobileOptionsOnly">
        <span v-show="!showMobileFlag"><i class="fontello icon-language is-size-5" ></i></span>
        <span class="is-hidden-desktop is-pulled-right" v-show="showMobileFlag"><i class="fontello icon-cancel is-size-5" ></i></span>
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
  font-size: 1em;
}
.navbar-link:after{
  border: unset;
}
</style>

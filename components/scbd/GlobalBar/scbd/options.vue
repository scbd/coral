<template>
    <transition name="slide-fade">

        <div class="navbar-dropdown is-boxed" style="white-space: normal;">
          <span class="navbar-item cbd-size">
               <strong>{{ $t('component.SCBD.cbd') }} </strong>
          </span>
          <hr class="dropdown-divider" style="margin:10px 0 0 0;">

          <a class="navbar-item" v-on:click="showMobile()" href="https://www.cbd.int" target="_blank" rel="noopener">{{ $t('component.SCBD.theConvention') }} </a>
          <a class="navbar-item" v-on:click="showMobile()" href="http://bch.cbd.int/protocol" target="_blank" rel="noopener"> {{ $t('component.SCBD.cartagenaProtocol') }} </a>
          <a class="navbar-item" v-on:click="showMobile()" href="https://www.cbd.int/abs/" target="_blank" rel="noopener"> {{ $t('component.SCBD.nagoyaProtocol') }} </a>
          <a class="navbar-item" v-on:click="showMobile()" href="https://www.cbd.int/programmes/" target="_blank" rel="noopener"> {{ $t('component.SCBD.programmes') }}</a>
          <a class="navbar-item" v-on:click="showMobile()" href="https://www.cbd.int/information/" target="_blank" rel="noopener"> {{ $t('component.SCBD.information') }}</a>
          <a class="navbar-item" v-on:click="showMobile()" href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> {{ $t('component.SCBD.secretariat') }}</a>


        </div>

    </transition>
</template>

<script>
export default {
  name: 'SCBDOptions',
  methods: {
    showMobile: function () {
      let showMobileFlag = !this.$store.state.scbd.showMobileFlag
      this.$store.commit('scbd/setMobileShow', showMobileFlag)
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1024px){

  .is-active {
      background-color: #f5f5f5 !important;
      color: #979797 !important;
  }
}
</style>

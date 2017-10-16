<template>

  <div class="navbar-item " v-bind:class="{ 'has-dropdown': isAuthenticated, 'is-hoverable': isAuthenticated, 'rtl':isAr}">

    <nuxt-link class="navbar-link cbd-size" :to="{path:locale+'/me/profile'}" v-if="isAuthenticated">{{me.firstName}} {{me.lastName}}</nuxt-link>
    <a  class="cbd-size" href="https://accounts.cbd.int/signin?returnUrl=" v-else >{{ $t('component.Me.signin') }}</a>

    <div class="navbar-dropdown is-right is-boxed" v-if="isAuthenticated">
      <a class="navbar-item cbd-size" href="https://accounts.cbd.int/profile?redirect_uri=">{{ $t('component.Me.profile') }}</a>
      <hr class="navbar-divider"/>
      <nuxt-link class="navbar-item cbd-size" :to="{path:locale+'/me/logout'}">{{ $t('component.Me.logout') }} </nuxt-link>

    </div>
  </div>

</template>

<script>

export default {
  name: 'Me',

  computed: {
    me: function () {
      return this.$store.state.me
    },
    isAuthenticated: function () {
      return !!this.$store.state.me.isAuthenticated
    },
    isAr: function () {
      return !!(this.$store.state.locale.locale === 'ar')
    },

    locale: function () {
      if (this.$store.state.locale.locale !== 'en') { return '/' + this.$store.state.locale.locale }
      return ''
    }
  }
}
</script>
<style scoped>
.cbd-size{
  font-size: 14px;
}
</style>

<template>
  <a href="https://www.cbd.int">
    <img src="~/assets/images/logo/cbd-logo-green-en.svg" alt="UN Biodiversity / Secretariat of the Convention on Biological Diversity Logo" width="185" height="70"></img>
  </a>
</template>

<script>

export default {
  name: 'Logo',

  computed: {
    locale: function () {
      if (this.$store.state.locale.locale !== 'en') { return '/' + this.$store.state.locale.locale }
      return ''
    }
  }
}
</script>

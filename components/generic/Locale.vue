<template>
  <div class="navbar-item has-dropdown is-hoverable" >


    <a class="navbar-link is-uppercase cbd-size"  >
      {{locale}}
    </a>
    <div class="navbar-dropdown is-right is-boxed">


      <span class="navbar-item cbd-size">
           <strong>{{ $t('component.Locale.languages') }}</strong>
      </span>

      <hr class="dropdown-divider" style="margin:10px 0 0 0;">
      <a class="navbar-item rtl" v-on:click="setLocale('ar')" >لعربية</a>
      <a class="navbar-item" v-on:click="setLocale('zh')" >中文</a>
      <a class="navbar-item" v-on:click="setLocale('en')" >English</a>
      <a class="navbar-item" v-on:click="setLocale('es')" >Español</a>
      <a class="navbar-item" v-on:click="setLocale('fr')" >Français</a>
      <a class="navbar-item" v-on:click="setLocale('ru')" >Русский</a>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Locale',

  computed: {
    locale: function () {
      return this.$store.state.locale.locale
    }
  },
  // define methods under the `methods` object
  methods: {
    setLocale: function (locale) {
      this.$store.commit('locale/setLocale', locale)
      let path
      if (this.$route.params.lang) {
        let pathArr = this.$route.path.split('/')
        pathArr.splice(1, 1)
        path = '/' + this.locale + pathArr.join('/')
      } else path = '/' + this.locale + this.$route.path

      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.cbd-size{
  font-size: 14px;
}
</style>

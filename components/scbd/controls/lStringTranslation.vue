<template>
  <div class="dropdown is-hoverable is-right">
  <div class="dropdown-trigger">
      <i class="hoolicon icon-language" aria-haspopup="true" aria-controls="dropdown-menu4"></i>

  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">

      <span class="navbar-item">
           <strong>{{ $t('component.locale.languages') }}</strong>
      </span>

      <hr class="dropdown-divider" style="margin:10px 0 0 0;">
      <div class="dropdown-item rtl pointer" v-on:click="setLocale('ar')" >لعربية   <span v-if="isSelected('ar')" class="icon has-text-success is-pulled-left"><i class="hoolicon icon-ok"></i></span></div>
      <div class="dropdown-item pointer" v-on:click="setLocale('zh')" >中文 <span v-if="isSelected('zh')" class="icon has-text-success is-pulled-right"><i class="hoolicon icon-ok"></i></span></div>
      <div class="dropdown-item pointer" v-on:click="setLocale('en')" >English <span v-if="isSelected('en')" class="icon has-text-success is-pulled-right"><i class="hoolicon icon-ok"></i></span></div>
      <div class="dropdown-item pointer" v-on:click="setLocale('es')" >Español <span v-if="isSelected('es')" class="icon has-text-success is-pulled-right"><i class="hoolicon icon-ok"></i></span></div>
      <div class="dropdown-item pointer" v-on:click="setLocale('fr')" >Français <span v-if="isSelected('fr')" class="icon has-text-success is-pulled-right"><i class="hoolicon icon-ok"></i></span></div>
      <div class="dropdown-item pointer" v-on:click="setLocale('ru')" >Русский <span v-if="isSelected('ru')" class="icon has-text-success is-pulled-right"><i class="hoolicon icon-ok"></i></span></div>

    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'lStringTranslation',

  computed: {
      isSelected: function () {
          var vm = this;
          return function(locale){

            return ~vm.$store.state.lStringTranslation.locales.indexOf(locale)
          }
      }
  },
  // define methods under the `methods` object
  methods: {
    setLocale: function (locale) {
      this.$store.dispatch('lStringTranslation/setLocale',locale)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/main";
@import '~bulma/sass/components/dropdown';

.level {
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 5px;

}
.pointer {
  cursor: pointer;
}
</style>


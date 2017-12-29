<template>
  <section>
    <transition name="slide-fade">
      <div class="tile is-ancestor has-text-centered" v-show="!isHiddenAssotiation" :class="{ 'is-hidden-touch' : isHiddenAssotiation }">
          <div class="tile is-vertical">
              <div class="tile">
                  <div class="tile is-parent">
                      <a href="http://ec.europa.eu/environment/nature/index_en.htm" target="_blank" rel="noopener">
                          <div class="tile is-child box">
                              <img width="100%" src="~/assets/images/euflag.svg"></img>
                          </div>
                      </a>
                  </div>
                  <div class="tile is-parent">
                      <a href="https://www.unenvironment.org/" target="_blank" rel="noopener">
                          <div class="tile is-child box">
                              <img src="~/assets/images/UNEP_Logo_en.png" style="margin-top:6px"></img>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="tile is-parent">
                  <a href="https://www.cbd.int" target="_blank" rel="noopener">
                      <div class="tile is-child box">
                          <img width="100%" src="~/assets/images/logo/cbd-logo-green-en.svg"></img>
                      </div>
                  </a>
              </div>
          </div>
      </div>
</transition>
<transition name="slide-fade">
      <div class="box menu has-text-centered"  v-show="!isHiddenSitemap" :class="{ 'is-hidden-touch' : isHiddenSitemap }">
          <ul class="menu-list" style="list-style-type: none; margin-left:0;">
              <li>
                  <nuxt-link class="footer-links is-size-5-desktop" :to="$i18n.path('about')">{{ $t('about') }} </nuxt-link>
              </li>
              <li>
                  <nuxt-link class="footer-links is-size-5-desktop" :to="$i18n.path('commitments')">{{ $t('commitments') }} </nuxt-link>
              </li>
              <li>
                  <nuxt-link class="footer-links is-size-5-desktop" :to="$i18n.path('initiatives')">{{ $t('initiatives') }} </nuxt-link>
              </li>
              <li>
                  <nuxt-link class="footer-links is-size-5-desktop" :to="$i18n.path('actions')">{{ $t('actions') }} </nuxt-link>
              </li>
              <li>
                  <nuxt-link class="footer-links is-size-5-desktop" :to="$i18n.path('resources')">{{ $t('resources') }} </nuxt-link>
              </li>
          </ul>
      </div>
</transition>
  <transition name="slide-fade">
      <div class="box" v-show="!isHiddenContact" :class="{ 'is-hidden-touch' : isHiddenContact }">
        <div class="address has-text-centered">{{ $t('nameCbdSecretariat') }} </div>
        <div class="address has-text-centered">{{ $t('cbdAddressStreet') }} </div>
        <div class="address has-text-centered">{{ $t('cbdAddressSuite') }} </div>
        <div class="address has-text-centered">{{ $t('cbdAddressCityProvPostal') }} </div>
        <div class="address has-text-centered">{{ $t('cbdAddressCountry') }} </div>
        <div class="has-text-centered"><a href="mailto:secretariate@cbd.int">secretariate@cbd.int</a> </div>
        <div class="has-text-centered"><a href="https://www.cbd.int" target="_blank" rel="nooppener">www.cbd.int</a></div>
      </div>
    </transition>
  </section>
</template>

<script>

export default {
  name: 'FooterMobile',
  computed: {
    isHiddenAssotiation: function () {
      return this.$store.state.footer.isHiddenAssotiation
    },
    isHiddenContact: function () {
      return this.$store.state.footer.isHiddenContact
    },
    isHiddenSitemap: function () {
      return this.$store.state.footer.isHiddenSitemap
    }
  }
}
</script>

<style scoped>
  .bottom-links {
    font-family: "Roboto";
    font-weight: 100;
  }
  .address {
    font-weight: 100;
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

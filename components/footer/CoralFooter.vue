<template>
  <section>
      <div class="reef-divider">
          &nbsp;
          <img data-sizes="auto" :src="require('~/assets/images/coral-bar.svg')"  title="Coral Gradient Bar Divider" alt="Coral Gradient Bar Illustration" />
      </div>
      <footer class="footer coral-footer">
        <div class="f-grid">
          <span class="is-hidden-touch">&nbsp;</span>
          <div class="f-title">
              <span v-on:click="toggleAssotiation()" class="footer-title is-size-5-desktop is-size-7-touch">{{ $t('inAssociation') }}</span>
          </div>
          <div class="f-title">
              <span class="footer-title is-size-5-desktop is-size-7-touch" v-on:click="toggleSitemap()">{{ $t('siteMap') }}</span><br>
          </div>
          <div class="f-title">
              <span class="footer-title is-size-5-desktop is-size-7-touch" v-on:click="toggleContact()">{{ $t('contact') }}</span><br>
          </div>
          <span class="is-hidden-touch">&nbsp;</span>
          <span class="is-hidden-touch">&nbsp;</span>
          <transition name="slide-fade">
            <div class="f-content img-grid" v-if="!$breakpoints.isTouch() || (!isHiddenAssotiation && $breakpoints.isTouch())" :class="{ 'card' : !isHiddenAssotiation }">
                <span class="is-hidden-touch">&nbsp;</span>
                <a href="http://ec.europa.eu/environment/nature/index_en.htm" target="_blank" rel="noopener">

                    <img class="eu-img" :src="require('~/assets/images/euflag.svg')" :alt="$t('europeanUnionFlag')" :title="$t('europeanUnionFlagTitle')"></img>
                </a>
                <a href="https://www.unenvironment.org/" target="_blank" rel="noopener">
                    <img  :src="require('~/assets/images/UNEP_Logo_en.png')" :alt="$t('unEnvironmentLogo')" :title="$t('unEnvironmentLogoTitle')"></img>
                </a>
                <a class="bottom-row" href="https://www.cbd.int" target="_blank" rel="noopener">
                    <img width="100%" :src="require('~/assets/images/logo/cbd-logo-green-en.svg')" :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
                </a>
                <span class="is-hidden-touch">&nbsp;</span>
            </div>
          </transition>
          <transition name="slide-fade">
            <div class="f-content"  v-if="!$breakpoints.isTouch() || (!isHiddenSitemap && $breakpoints.isTouch())" :class="{ 'card' : !isHiddenSitemap}">
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
            <div class="f-content" isHiddenContact v-if="!$breakpoints.isTouch() || (!isHiddenContact && $breakpoints.isTouch())" :class="{ 'card' : !isHiddenContact}">
                <div class="address is-size-5-desktop">{{ $t('nameCbdSecretariat') }} </div>
                <div class="address is-size-5-desktop">{{ $t('cbdAddressStreet') }} </div>
                <div class="address is-size-5-desktop">{{ $t('cbdAddressSuite') }} </div>
                <div class="address is-size-5-desktop">{{ $t('cbdAddressCityProvPostal') }} </div>
                <div class="address is-size-5-desktop">{{ $t('cbdAddressCountry') }} </div>
                <div class="is-size-5-desktop bottom-links"><a href="mailto:secretariate@cbd.int">secretariate@cbd.int</a> </div>
                <div class="is-size-5-desktop bottom-links"><a href="https://www.cbd.int" target="_blank" rel="noopener">www.cbd.int</a></div>
            </div>
          </transition>
          <span class="is-hidden-touch">&nbsp;</span>
        </div>

        <div class="bottom-grid"  :class="{ 'is-hidden-touch' : isAnyHidden }">
            <span class="is-hidden-touch">&nbsp;</span>
            <a class="bottom-links is-size-7-touch" href="https://www.cbd.int/terms/" target="_blank" rel="noopener"> {{ $t('termsOfUse') }} </a>
            <a class="bottom-links is-size-7-touch" href="https://www.cbd.int/privacy/" target="_blank" rel="noopener"> {{ $t('privacyPolicy') }}</a>
            <a class="bottom-links is-size-7-touch" href="https://www.cbd.int/credits/" target="_blank" rel="noopener"> {{ $t('credits') }}  </a>
            <a class="bottom-links is-size-7-touch" href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> {{$t('secretariat')}} </a>
            <span class="is-hidden-touch">&nbsp;</span>
        </div>

      </footer>
  </section>
</template>

<script>


export default {
  name: 'CoralFooter',

  computed: {
    isHiddenAssotiation: function () {
      return this.$store.state.footer.isHiddenAssotiation
    },
    isHiddenContact: function () {
      return this.$store.state.footer.isHiddenContact
    },
    isHiddenSitemap: function () {
      return this.$store.state.footer.isHiddenSitemap
    },
    isAnyHidden: function () {
      return this.$store.state.footer.isHiddenAssotiation || this.$store.state.footer.isHiddenContact || this.$store.state.footer.isHiddenSitemap
    }
  },
  // define methods under the `methods` object
  methods: {
    toggleContact: function () {
      this.hideAll('setContact')
      this.$store.commit('footer/setContact', !this.$store.state.footer.isHiddenContact)
    },
    toggleSitemap: function () {
      this.hideAll('setSitemap')
      this.$store.commit('footer/setSitemap', !this.$store.state.footer.isHiddenSitemap)
    },
    toggleAssotiation: function () {
      this.hideAll('setAssotiation')
      this.$store.commit('footer/setAssotiation', !this.$store.state.footer.isHiddenAssotiation)
    },
    hideAll: function (except) {
      if(except !==  'setAssotiation')
        this.$store.commit('footer/setAssotiation', true)
      if(except !==  'setSitemap')
        this.$store.commit('footer/setSitemap', true)
      if(except !==  'setContact')
        this.$store.commit('footer/setContact', true)
    }
  }
}

</script>

<style scoped>
    .reef-divider img{
      width:100%;
    }

    .f-grid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;
      grid-gap: 10px;
      background-color: #fff;
    }

    .f-title{
      text-align: center;
    }
    .f-title span{
      text-transform: uppercase;
      white-space: nowrap;
      font-weight: 900;
      font-family: "Roboto";
    }

    .f-content{
      text-align: center;
      grid-column: 1 / 5;
      padding: 10px 10px 10px 10px;
    }
    .bottom-grid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
    }
    .bottom-links {
      text-align: center;
      font-family: "Roboto";
      font-weight: 500;
      color:#363636;
    }
    .bottom-links:hover {
      text-align: center;
      font-family: "Roboto";
      font-weight: 500;
      color:#a7a5a5;
    }
    .img-grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 80px;
      grid-gap: 25px;
    }
    .bottom-row{
      grid-column: 1 /3;
      grid-row: 2;
    }
    .eu-img{
      width: 100%;
    }


  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .img-grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(2, [row] auto  );
      grid-gap: 25px;
    }
    .bottom-row{
      grid-column: 1 /3;
      grid-row: 2;
    }
  }

  @media (min-width:1024px){
    .f-grid{
      display: grid;
      grid-template-columns: .25fr 1fr 1fr 1fr .25fr;
      grid-gap: 10px;
      background-color: #fff;
    }

    .f-content{
      grid-column: unset;
    }
    .address {
      font-weight: 100;
    }

    .img-grid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 80px;
      grid-gap: 10px;
    }
    .bottom-row{
      grid-column: 2 / 4;
      grid-row: 2;
    }
    .eu-img{
      width: 100%;
    }
    .bottom-grid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
    }
    .footer-links {
      font-family: "Roboto";
      font-weight: 100;
    }
    .footer-links:hover {
      font-family: "Roboto";
      font-weight: 400;
    }
    .menu-list a.is-active  {
      font-family: "Roboto";
      font-weight: 400;
      background-color: #f5f5f5;
      color:#363636;
    }
  }
</style>

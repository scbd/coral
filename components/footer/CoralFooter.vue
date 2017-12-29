<template>
<section>

  <div class="reef-divider">
    &nbsp;
    <img src="~/assets/images/coral-bar.svg"></img>
  </div>
  <footer class="footer coral-footer">

    <div class="container is-fluid">
      <div class="content has-text-centered">
        <div class="columns is-mobile">
          <div class="column" >
            <strong v-on:click="toggleAssotiation()" class="footer-title is-size-5-desktop is-size-7-touch" >{{ $t('inAssociation') }}</strong>

            <div class="tile is-ancestor has-text-centered is-hidden-touch">
              <div class="tile is-vertical is-2">
                &nbsp;
              </div>
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
                      <img src="~/assets/images/UNEP_Logo_en.png" style="margin:5px 0 5px 0;"></img>
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
              <div class="tile is-vertical is-2">
                &nbsp;
              </div>
            </div>
          </div>
          <div class="column has-text-centered">

            <strong class="footer-title is-size-5-desktop is-size-7-touch" v-on:click="toggleSitemap()">{{ $t('siteMap') }}</strong><br>
            <div class="menu is-hidden-touch" >
              <ul class="menu-list" style="list-style-type: none; margin-left:0;">
                <li><nuxt-link class="footer-links is-size-5-desktop"  :to="$i18n.path('about')">{{ $t('about') }} </nuxt-link></li>
                <li><nuxt-link class="footer-links is-size-5-desktop"  :to="$i18n.path('commitments')">{{ $t('commitments') }} </nuxt-link></li>
                <li><nuxt-link class="footer-links is-size-5-desktop"  :to="$i18n.path('initiatives')">{{ $t('initiatives') }} </nuxt-link></li>
                <li><nuxt-link class="footer-links is-size-5-desktop"  :to="$i18n.path('actions')">{{ $t('actions') }} </nuxt-link></li>
                <li><nuxt-link class="footer-links is-size-5-desktop"  :to="$i18n.path('resources')">{{ $t('resources') }} </nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="column">
            <strong class="footer-title is-size-5-desktop is-size-7-touch"  v-on:click="toggleContact()" >{{ $t('contact') }}</strong><br>
            <div class="tile is-ancestor has-text-centered is-hidden-touch">
              <div class="tile is-vertical is-2 is-hidden-touch">
                &nbsp;
              </div>
              <div class="tile is-vertical">
                <div class="tile is-parent">
                  <div class="tile is-child box">
                    <div class="address is-size-5-desktop">{{ $t('nameCbdSecretariat') }} </div>
                    <div class="address is-size-5-desktop">{{ $t('cbdAddressStreet') }} </div>
                    <div class="address is-size-5-desktop">{{ $t('cbdAddressSuite') }} </div>
                    <div class="address is-size-5-desktop">{{ $t('cbdAddressCityProvPostal') }} </div>
                    <div class="address is-size-5-desktop">{{ $t('cbdAddressCountry') }} </div>
                    <div class="is-size-5-desktop bottom-links"><a href="mailto:secretariate@cbd.int">secretariate@cbd.int</a> </div>
                    <div class="is-size-5-desktop bottom-links"><a href="https://www.cbd.int" target="_blank" rel="nooppener">www.cbd.int</a></div>
                  </div>
                </div>
              </div>
              <div class="tile is-vertical is-2 is-hidden-touch">
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterMobile class="is-hidden-desktop"/>
    <div class="level is-mobile" style="margin: 10px 0 0 0;">

      <div class="level-item " >
        &nbsp;
      </div>
      <div class="level-item " >
        <nuxt-link class="bottom-links is-size-7-touch" :to="$i18n.path('terms')" >{{ $t('termsOfUse') }} </nuxt-link>
      </div>
      <div class="level-item " >
        <nuxt-link class="bottom-links is-size-7-touch" :to="$i18n.path('privacy')" >{{ $t('privacyPolicy') }} </nuxt-link>
      </div>
      <div class="level-item " >
        <nuxt-link class="bottom-links is-size-7-touch" :to="$i18n.path('credits')" >{{ $t('credits') }} </nuxt-link>
      </div>
      <div class="level-item " >
        <a class="bottom-links is-size-7-touch" href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> Secretariat </a>
      </div>
      <div class="level-item " >
        &nbsp;
      </div>
    </div>
  </footer>
</section>
</template>

<script>
import FooterMobile from '~/components/footer/FooterMobile.vue'

export default {
  name: 'CoralFooter',
  components: {FooterMobile},
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
  .assosiation{width:50%;}
  .reef-divider img{
    width:100%;
  }
  .footer-title{
    text-transform: uppercase;
    white-space: nowrap;
  }
  .bottom-links {
    font-family: "Roboto";
    font-weight: 400;
    color:#363636;
  }
  .bottom-links:hover {
    font-family: "Roboto";
    font-weight: 400;
    color:#a7a5a5;
  }
  .address {
    font-weight: 100;
  }
@media (min-width:1024px){
  .footer-links {
    font-family: "Roboto";
    font-weight: 100;
  }
  .footer-links:hover {
    font-family: "Roboto";
    font-weight: 400;
  }
}
</style>
<style lang="sass" >
  @import '~@/assets/css/main.sass'
  .coral-footer
    @extend .footer
    background-color: #ffffff
    padding-top: 0px !important
    padding-top: 5px !important

</style>

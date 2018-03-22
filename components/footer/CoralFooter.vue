<template>
  <section >
    <div  class="coral-footer" v-lazy:background-image="$CBDImage.get('coral-blue-camo-background-footer.jpg')">
      <footer class="container is-fullhd debug">
        <div class="f-grid debug">
          <div class="debug">1</div>
          <div class="debug">1</div>
          <div class="debug">1</div>
          <div class="debug">

              <span class="f-title">{{ $t('siteMap') }}</span>
              <ul class="menu-list" >
                  <li>
                      <nuxt-link class="footer-links" :to="$i18n.path('about')">{{ $t('about') }} </nuxt-link>
                  </li>
                  <li>
                      <nuxt-link class="footer-links" :to="$i18n.path('commitments')">{{ $t('commitments') }} </nuxt-link>
                  </li>
                  <li>
                      <nuxt-link class="footer-links" :to="$i18n.path('initiatives')">{{ $t('initiatives') }} </nuxt-link>
                  </li>
                  <li>
                      <nuxt-link class="footer-links " :to="$i18n.path('actions')">{{ $t('actions') }} </nuxt-link>
                  </li>
                  <li>
                      <nuxt-link class="footer-links" :to="$i18n.path('resources')">{{ $t('resources') }} </nuxt-link>
                  </li>
              </ul>

          </div>
          <div class="debug">
            <span class="f-title">{{ $t('contact') }}</span>
            <div class="address">{{ $t('nameCbdSecretariat') }} </div>
            <div class="address">{{ $t('cbdAddressStreet') }} </div>
            <div class="address">{{ $t('cbdAddressSuite') }} </div>
            <div class="address">{{ $t('cbdAddressCityProvPostal') }} </div>
            <div class="address">{{ $t('cbdAddressCountry') }} </div>
            <div class="address"><a href="mailto:secretariat@cbd.int">secretariat@cbd.int</a> </div>
            <div class="address"><a href="tel:+1-514-288-2220" target="_blank" rel="noopener">1 514 288 2220 </a></div>
          </div>
          <div class="debug">1</div>
          <div class="debug">1</div>
          <div class="debug">1</div>
        </div>
        <div class="bottom-grid is-hidden-touch debug">
          <div><a class="debug" href="https://www.cbd.int/terms/" target="_blank" rel="noopener"> {{ $t('termsOfUse') }} </a></div>
          <div><a class="debug" href="https://www.cbd.int/privacy/" target="_blank" rel="noopener"> {{ $t('privacyPolicy') }}</a></div>
          <div><a class="debug" href="https://www.cbd.int/credits/" target="_blank" rel="noopener"> {{ $t('credits') }}  </a></div>
          <div><a class="debug" href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> {{$t('secretariat')}} </a></div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)

  export default {
    name: 'CoralFooter'
  }
</script>

<style scoped>
.address{
  font-family: "Roboto" Arial, Helvetica, sans-serif, sans-serif, Trebuchet MS;
  font-weight: 400;
  color:#ffffff;
  font-size: .75em;
  padding: 0 0 0 0;
  line-height: normal;
  white-space: nowrap;
}
.address a{
  color:#ffffff;
}
.address a:hover{
  color:#ff3e94;
}
.menu-list  a{
  font-family: "Roboto" Arial, Helvetica, sans-serif, sans-serif, Trebuchet MS;
  font-weight: 400;
  background-color: unset;
  color:#ffffff;
  font-size: .75em;
  padding: 0 0 0 0;
}
.menu-list a.is-active  {
  font-family: "Roboto" Arial, Helvetica, sans-serif, sans-serif, Trebuchet MS;
  font-weight: 400;
  background-color: unset;
  color:#ff3e94 !important;
}
.f-title{
  text-transform: uppercase;
  font-weight: 900;
}
.bottom-grid{
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
.f-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

}
.f-grid div {color:#ffffff}
.bottom-grid a{  font-size: .75em;font-weight: 500;color:white;}
.bottom-grid a:hover{color:#ff3e94;}
.bottom-grid div{text-align: center;}
.coral-footer{
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
}
footer{
  min-height: 275px;
}

</style>

<template>
  <section class="is-hidden-touch">
    <div  class="coral-footer" v-lazy:background-image="$CBDImage.get('coral-blue-camo-background-footer.jpg')">
      <footer class="container is-fullhd ">
        <div class="f-grid ">
          <div class="centered">
            <a href="http://ec.europa.eu/environment/nature/index_en.htm" target="_blank" rel="noopener" >
                <img  v-lazy="$CBDImage.get('european-union-icon.png',83)" :alt="$t('europeanUnionFlag')" :title="$t('europeanUnionFlagTitle')" ></img>
            </a>
          </div>
          <div class="centered">
            <a href="https://www.unenvironment.org/" target="_blank" rel="noopener" >
                <img  v-lazy="$CBDImage.get('un-environment-icon.png',100)" :alt="$t('unEnvironmentLogo')" :title="$t('unEnvironmentLogoTitle')"></img>
            </a>
          </div>
          <div class="centered">
            <a class="bottom-row" href="https://www.cbd.int" target="_blank" rel="noopener">
                <img  v-lazy="$CBDImage.get('CBD-logo.png',133)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
            </a>
          </div>
          <div >

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
          <div >
            <span class="f-title">{{ $t('contact') }}</span>
            <div class="address">{{ $t('nameCbdSecretariat') }} </div>
            <div class="address">{{ $t('cbdAddressStreet') }} </div>
            <div class="address">{{ $t('cbdAddressSuite') }} </div>
            <div class="address">{{ $t('cbdAddressCityProvPostal') }} </div>
            <div class="address">{{ $t('cbdAddressCountry') }} </div>
            <div class="address"><a href="mailto:secretariat@cbd.int">secretariat@cbd.int</a> </div>
            <div class="address"><a href="tel:+1-514-288-2220" target="_blank" rel="noopener">1 514 288 2220 </a></div>
          </div>
          <div class="centered">
              <a class="bottom-row" href="https://www.cbd.int" target="_blank" rel="noopener">
                  <img  v-lazy="$CBDImage.get('facebook-icon.png',40)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
              </a>
          </div>
          <div class="centered">
            <a class="bottom-row" href="https://www.cbd.int" target="_blank" rel="noopener">
                <img  v-lazy="$CBDImage.get('linkedin-icon.png',40)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
            </a>
          </div>
          <div class="centered" v-on:mouseover="twActive=true;" v-on:mouseout="twActive=false;">

              <a class="bottom-row" href="https://www.cbd.int" target="_blank" rel="noopener">
                  <img   v-lazy="$CBDImage.get('twitter-icon.png',40)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
              </a>

          </div>
        </div>
        <div class="bottom-grid is-hidden-touch ">
          <div><a  href="https://www.cbd.int/terms/" target="_blank" rel="noopener"> {{ $t('termsOfUse') }} </a></div>
          <div><a  href="https://www.cbd.int/privacy/" target="_blank" rel="noopener"> {{ $t('privacyPolicy') }}</a></div>
          <div><a  href="https://www.cbd.int/credits/" target="_blank" rel="noopener"> {{ $t('credits') }}  </a></div>
          <div><a  href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> {{$t('secretariat')}} </a></div>
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
    name: 'CoralFooter',
    data () {
      return {
        euActive: false,
        unepActive: false,
        cbdActive:false,
        fbActive:false,
        liActive:false,
        twActive:false
      }
    }
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
  .menu-list a:hover {
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
    grid-gap: 40px;
    padding-top: 40px;
  }
  .f-grid div {color:#ffffff;}
  .f-grid .centered {text-align: center;}
  .bottom-grid a{  font-size: .75em;font-weight: 500;color:white;}
  .bottom-grid a:hover{color:#ff3e94;}
  .bottom-grid div{text-align: center;}
  .coral-footer {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    padding: 0 0 0 0;
  }
  footer{
    min-height: 275px;
    padding: 0 0 20px 0;
  }

  .tint:before {
    content: "";
    display: block;
    height:99.3%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 62, 148, 0.4);
    -moz-transition: background .3s linear;
    -webkit-transition: background .3s linear;
    -o-transition: background .3s linear;
    transition: background .3s linear;
  }
</style>

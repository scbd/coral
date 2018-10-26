<template>
  <section >
    <div class="spacer is-hidden-desktop">&nbsp;</div>
    <div  class="coral-footer is-hidden-touch" v-lazy:background-image="$CBDImage.get('coral-footer-background-blue-camo.svg')">
      <footer class="container is-fullhd">
        <div class="columns">
          <div class="column  centered">
            <a href="http://ec.europa.eu/environment/nature/index_en.htm" target="_blank" rel="noopener nofollow" >
              <div class="hover ">
                <img  v-on:mouseover="mouseOver('euActive')" v-lazy="$CBDImage.get('european-union-icon.png',83)" :alt="$t('europeanUnionFlag')" :title="$t('europeanUnionFlagTitle')" ></img>
                <div class="overlay overlay-logo"  v-if="euActive" v-on:mouseleave="mouseOver('euActive')">&nbsp;</div>
              </div>
            </a>
          </div>
          <div class="column  centered">
            <a href="https://www.unenvironment.org/" target="_blank" rel="noopener nofollow" >
              <div class="hover ">
                <img   v-on:mouseover="mouseOver('unepActive')" v-lazy="$CBDImage.get('un-environment-icon.png',100)" :alt="$t('unEnvironmentLogo')" :title="$t('unEnvironmentLogoTitle')"></img>
                <div class="overlay overlay-logo"  v-if="unepActive" v-on:mouseleave="mouseOver('unepActive')">&nbsp;</div>
              </div>
            </a>
          </div>
          <div class="column  centered">
            <a class="bottom-row" href="https://www.cbd.int" target="_blank" rel="noopener">
                <div class="hover ">
                  <img  v-on:mouseover="mouseOver('cbdActive')" v-lazy="$CBDImage.get('CBD-logo.png',133)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
                  <div class="overlay"  v-if="cbdActive" v-on:mouseleave="mouseOver('cbdActive')">&nbsp;</div>
                </div>
            </a>
          </div>
          <div class="column ">

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
          <div class="column">
            <span class="f-title">{{ $t('contact') }}</span>
            <div class="address">{{ $t('nameCbdSecretariat') }} </div>
            <div class="address">{{ $t('cbdAddressStreet') }} </div>
            <div class="address">{{ $t('cbdAddressSuite') }} </div>
            <div class="address">{{ $t('cbdAddressCityProvPostal') }} </div>
            <div class="address">{{ $t('cbdAddressCountry') }} </div>
            <div class="address"><a href="mailto:secretariat@cbd.int">secretariat@cbd.int</a> </div>
            <div class="address"><a href="tel:+1-514-288-2220" target="_blank" rel="noopener">1 514 288 2220 </a></div>
          </div>
          <div class="column  centered">
              <a class="bottom-row" href="https://www.facebook.com/UNBiodiversity/" target="_blank" rel="noopener nofollow">
                  <div class="hover ">
                    <img    v-on:mouseover="mouseOver('fbActive')" v-lazy="$CBDImage.get('facebook-icon.png',40)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
                    <div class="overlay"  v-if="fbActive" v-on:mouseleave="mouseOver('fbActive')">&nbsp;</div>
                  </div>
              </a>
          </div>
          <div class="column  centered">
            <a class="bottom-row" href="https://www.linkedin.com/company/secretariat-of-the-convention-on-biological-diversity/" target="_blank" rel="noopener nofollow">
               <div class="hover ">
                <img   v-on:mouseover="mouseOver('liActive')" v-lazy="$CBDImage.get('linkedin-icon.png',40)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
                <div class="overlay"  v-if="liActive" v-on:mouseleave="mouseOver('liActive')">&nbsp;</div>
              </div>
            </a>
            <img  class="chm" v-lazy="$CBDImage.get('chm.svg')"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
          </div>
          <div class="column  centered" v-on:mouseover="twActive=true;" v-on:mouseout="twActive=false;">
              <a class="bottom-row" href="https://twitter.com/cbdnews" target="_blank" rel="noopener nofollow">
                <div class="hover">
                  <img   v-on:mouseover="mouseOver('twActive')"  v-lazy="$CBDImage.get('twitter-icon.png',40)"  :alt="$t('scbdLogo')" :title="$t('scbdLogoTitle')"></img>
                  <div class="overlay"  v-if="twActive" v-on:mouseleave="mouseOver('twActive')">&nbsp;</div>
                </div>
              </a>
          </div>
        </div>
        <div class="columns bottom-grid is-hidden-touch ">
          <div class="column"><a  href="https://www.cbd.int/terms/" target="_blank" rel="noopener"> {{ $t('termsOfUse') }} </a></div>
          <div class="column"><a  href="https://www.cbd.int/privacy/" target="_blank" rel="noopener"> {{ $t('privacyPolicy') }}</a></div>
          <div class="column"><a  href="https://www.cbd.int/credits/" target="_blank" rel="noopener"> {{ $t('credits') }}  </a></div>
          <div class="column"><a  href="https://www.cbd.int/secretariat/" target="_blank" rel="noopener"> {{$t('secretariat')}} </a></div>
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
    },
methods: {
        mouseOver: function(flagName){
            this[flagName] = !this[flagName];
        }
    }
  }
</script>

<style scoped>
.chm{
  margin-top:3em;
}
.hover {

  display: inline-block;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  margin: 0 auto;
}

.hover .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(255, 62, 148, .5 );
  transition: all 0.4s  cubic-bezier(0.88,-0.99, 0, 1.81);
  cursor: pointer;
  border-radius: 7px;
}
.hover .overlay-logo {
  border-radius: unset;
}
.hover img {
  display: block;
  position: relative;
}

  .address{
    font-family: "Roboto" Arial, Helvetica, sans-serif, sans-serif, Trebuchet MS;
    font-weight: 400;
    color:#ffffff;
    font-size: 1em;
    padding: 0 0 0 0;
    line-height: 1.3;
    white-space: nowrap;
  }
  .address a{
    color:#ffffff;
  }
  .address a:hover{
    color:#d44f83;
  }
  .menu-list  a{
    font-family: "Roboto" Arial, Helvetica, sans-serif, sans-serif, Trebuchet MS;
    font-weight: 400;
    background-color: unset;
    color:#ffffff;
    font-size: 1em;
    padding: 0 0 0 0;
  }
  .menu-list a.is-active  {
    font-family: "Roboto" Arial, Helvetica, sans-serif, sans-serif, Trebuchet MS;
    font-weight: 400;
    background-color: unset;
    color:#d44f83 !important;
  }
  .menu-list a:hover {
    color:#d44f83 !important;
  }
  .f-title{
    text-transform: uppercase;
    font-weight: 900;
    font-size:1.2em;
    color:#ffffff;
    white-space: nowrap;
  }

  .centered {text-align: center;}

  .bottom-grid a{  font-size: 1em;font-weight: 500;color:white;}
  .bottom-grid a:hover{color:#d44f83;}
  .bottom-grid div{text-align: center;}
  .coral-footer {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    padding: 0 0 0 0;
    background-color: #00405c;
    border: 1px solid #00405c;
  }
  .coral-footer  .columns{
    margin-top: 1em;
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

<template>
  <section>

    <nav class="default-header is-hidden-touch " v-lazy:background-image="$CBDImage.get('coral-header-background-blue-camo.svg')">
      <div class="container is-fullhd" >
            <div class="level is-mobile " >
                <nuxt-link  class="level-item main-nav logo-wrapper"  to="/">
                  <CoralLogo  class="logo"/>
                </nuxt-link>
                <nuxt-link class="level-item main-nav is-marginless"   :to="`${BASE_PATH}about`">
                  <div class="menu-text">{{ $t('about') }}</div>
                </nuxt-link>
              <nuxt-link class="level-item main-nav is-marginless"  :to="`${BASE_PATH}commitments`">
                <div class="menu-text">{{ $t('commitments') }}</div>
              </nuxt-link>
              <nuxt-link class="level-item main-nav is-marginless"  :to="`${BASE_PATH}initiatives`">
                <div class="menu-text">{{ $t('initiatives') }}</div>
              </nuxt-link>
              <nuxt-link class="level-item main-nav is-marginless"  :to="`${BASE_PATH}actions`">
                <div class="menu-text">{{ $t('actions') }}</div>
              </nuxt-link>
              <nuxt-link class="level-item main-nav is-marginless"  :to="`${BASE_PATH}resources`">
                <div class="menu-text">{{ $t('resources') }}</div>
              </nuxt-link>
            </div>
        </div>
    </nav>

    <div class="mobi-header is-hidden-desktop is-mobile">
      <DividerGradBar :size="Number(3)"/>
      <nav class="level is-hidden-desktop is-mobile">
        <p class="level-item has-text-centered" v-on:click="toggleDash()">
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="icon">
            <!-- <i class="fontello icon-gauge is-size-4" v-if="!showDashboard"></i>
            <i class="fontello icon-cancel is-size-4" v-if="showDashboard"></i> -->
          </span>
        </p>
        <p class="level-item has-text-centered">
          &nbsp;
        </p>
        <p class="level-item has-text-centered">
          <nuxt-link   to="`${BASE_PATH}/`">
            <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 220 100">
              <title>{{ $t('CORAL') }} {{ $t('REEFS') }}</title>
              <text class="top" transform="translate(0 46.2)">{{ $t('CORAL') }}</text>
              <text class="bottom" transform="translate(1 92.2)">{{ $t('REEFS') }}</text>
            </svg>
          </nuxt-link>
        </p>
        <p class="level-item has-text-centered">
          &nbsp;
        </p>
        <p class="level-item has-text-centered" v-on:click="toggleMainNav()">
          <span class="icon">
            <i class="fontello icon-menu is-size-4" v-if="!showMainNav"></i>
            <i class="fontello icon-cancel is-size-4" v-if="showMainNav"></i>
          </span>
        </p>
      </nav>
    </div>


    <transition name="slide-fade">

      <!-- main menu mobile -->
      <div class="box main-nav-mobi" v-if="showMainNav">
        <div class="navbar-item has-dropdown" >
          <div class="navbar-dropdown  is-boxed" >
            <span class="navbar-item cbd-size">
                 <strong>{{ $t('coralReefs') }}</strong>
            </span>
            <hr class="dropdown-divider" style="margin:10px 0 0 0;">
            <ul>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="`${BASE_PATH}about`">
                {{ $t('about') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item"  :to="`${BASE_PATH}commitments`">
                {{ $t('commitments') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="`${BASE_PATH}initiatives`">
                {{ $t('initiatives') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="`${BASE_PATH}actions`">
                {{ $t('actions') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="`${BASE_PATH}resources`">
                {{ $t('resources') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="`${BASE_PATH}/`"  exact>
                {{ $t('home') }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import Vue            from 'vue'
import VueLazyload    from 'vue-lazyload'
import DividerGradBar from '~/components/DividerGradBar.vue'
import CoralLogo      from '~/components/CoralLogo'

Vue.use(VueLazyload)

let showDashboard = false
let showMainNav = false
export default {
  name: 'DefaultHeader',
  components: {DividerGradBar,CoralLogo},
  data: function () {
      return {showMainNav:showMainNav, 
        showDashboard:showDashboard,
        BASE_PATH:process.env.BASE_PATH?process.env.BASE_PATH+'/' : ''
      }

  },
  // define methods under the `methods` object
  methods: {
    toggleMainNav: function () {
      this.showMainNav = !this.showMainNav
    },
    toggleDash: function () {
      this.showDashboard = !this.showDashboard
    }
  }

}
</script>
<style scoped>
.container .level {
  height:120px;
}

.logo-wrapper{
  min-width:300px;
}
.default-header{
  background-color: #00405c;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.navbar-item:hover,.navbar-link:hover, .is-active {
    color: #d44f83  !important;

}
.menu-text{
  width:100%;
  text-align:right;
}
.main-nav-mobi{
  position: fixed;
  bottom:52px;
  background-color: #ffffff;
  width: 100%;
  z-index:  99999;
}
.navbar-brand{
  align-self:center;
  /* padding-left: 1.5em; */
}
.top{font-size:54px;}
.top,.bottom{fill:#00405c;font-family:Roboto-Black, Roboto, Arial, Helvetica, sans-serif, Trebuchet MS; font-weight: 900;}
.bottom{font-size:55px;letter-spacing:0.06em;}

.mobi-header{
  position:fixed;
  bottom:0px;
  max-height: 52px;
  z-index:  99999;
  background-color: #ffffff;
  width:100%;
}
.grad-bar{
  width:100%;
  z-index:  99999;
}
.top-bar img{
  width:100%;
}
.top-bar{
  position:fixed;
  bottom:52px;
  z-index:  99999;
  width:100%;
  line-height: 5px;
}
.logo{
  width:75px;
  margin-top: 5px;
  margin-left: 9px;

}

@media (min-width:1024px){
  .navbar{
    min-height:120px;
  }
  .level{
    min-height:120px;
  }
  .top,.bottom{fill:#ffffff;}
  .nav-bar-img{
    position:absolute;
    bottom:3px;
    width: 100%;
  }
  .navbar-brand{
    align-self:flex-end;
  }
  .navbar-brand a{
    padding-left: 0;
  }
  .grad-bar{
    width:100%;
    position: absolute;
    bottom: 0px;
    top:  unset;
  }
  .logo{
    width:100%;
    max-width:379px;
    align-self:start;
    /* margin-right:1em; */
    /* margin-left:.7em; */
  }
  .default-header{
    position:relative;
    background-color: #00405c;
    /* margin-top:65px; */
    height:120px;
  }
  .navbar-item{
    align-self: flex-end;
  }
  .main-nav{
    font-weight: 600;
    font-size: 1.2em;
    color:#ffffff;
    align-self: flex-end;
  }
  .main-nav:hover{
    color:#d44f83;
  }
}

.is-active {
  color:#d44f83;
}

</style>

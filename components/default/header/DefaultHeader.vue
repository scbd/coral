<template>
  <section>
    <div class="header-nav">
      <nav class="navbar is-transparent default-header">
        <div class="navbar-brand is-hidden-touch">
          <nuxt-link class="navbar-item"  to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 178.89 100">
              <title>{{ $t('CORAL') }} {{ $t('REEFS') }}</title>
              <text class="top" transform="translate(0 46.2)">{{ $t('CORAL') }}</text>
              <text class="bottom" transform="translate(1 92.2)">{{ $t('REEFS') }}</text>
            </svg>
          </nuxt-link>
        </div>

        <div class="navbar-item is-hidden-touch" style="flex-grow: 1;">
          <div class="level is-mobile" style="width:100%;">
            <div class="level-item" >
              <nuxt-link class="main-nav is-size-4"  :to="$i18n.path('about')">
                {{ $t('about') }}
              </nuxt-link>
            </div>
            <nuxt-link class="level-item main-nav is-size-4"  :to="$i18n.path('commitments')">
              {{ $t('commitments') }}
            </nuxt-link>
            <nuxt-link class="level-item main-nav is-size-4"  :to="$i18n.path('initiatives')">
              {{ $t('initiatives') }}
            </nuxt-link>
            <nuxt-link class="level-item main-nav is-size-4"  :to="$i18n.path('actions')">
              {{ $t('actions') }}
            </nuxt-link>
            <nuxt-link class="level-item main-nav is-size-4"  :to="$i18n.path('resources')">
              {{ $t('resources') }}
            </nuxt-link>
          </div>
        </div>

          <svg  width="100%" xmlns="http://www.w3.org/2000/svg" class="grad-bar " xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2000 12">
            <defs><style>.a{fill:url(#gradiaentHeader);}</style>
              <linearGradient id="gradiaentHeader" y1="6" x2="2000" y2="6" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#008095"/>
                <stop offset="0.22" stop-color="#008095"/>
                <stop offset="0.37" stop-color="#86abff"/>
                <stop offset="0.56" stop-color="#d79eff"/>
                <stop offset="0.77" stop-color="#c67680"/>
                <stop offset="1" stop-color="#ff3e80"/>
              </linearGradient>
            </defs>
            <title>Header Gradient Bar</title>
            <rect class="a" width="2000" height="12"/>
          </svg>


      <nav class="level is-hidden-desktop is-mobile">

        <p class="level-item has-text-centered" v-on:click="toggleDash()">
          <span class="icon">&nbsp;
            <!-- <i class="fontello icon-gauge is-size-4" v-if="!showDashboard"></i>
            <i class="fontello icon-cancel is-size-4" v-if="showDashboard"></i> -->
          </span>

        </p>
        <p class="level-item has-text-centered">
          &nbsp;
        </p>
        <p class="level-item has-text-centered">
          <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 178.89 100">
            <title>{{ $t('CORAL') }} {{ $t('REEFS') }}</title>
            <text class="top" transform="translate(0 46.2)">{{ $t('CORAL') }}</text>
            <text class="bottom" transform="translate(1 92.2)">{{ $t('REEFS') }}</text>
          </svg>
        </p>
        <p class="level-item has-text-centered">
          &nbsp;
        </p>
        <div class="level-item has-text-centered" v-on:click="toggleMainNav()">
          <span class="icon">
            <i class="fontello icon-menu is-size-4" v-if="!showMainNav"></i>
            <i class="fontello icon-cancel is-size-4" v-if="showMainNav"></i>
          </span>
        </div>
      </nav>
</nav>
    </div>

    <transition name="slide-fade">
      <div class="box main-nav-mobi" v-if="showDashboard">
        <div class="navbar-item has-dropdown" >
          <div class="navbar-dropdown  is-boxed" >
            <span class="navbar-item cbd-size">
                 <strong>{{ $t('dashboard') }}</strong>
            </span>
            <hr class="dropdown-divider" style="margin:10px 0 0 0;">
            <nuxt-link class="navbar-item" v-on:click="toggleDash()" :to="$i18n.path('dashboard')">
              {{ $t('dashboardControl') }}
            </nuxt-link>
            <nuxt-link class="navbar-item" v-on:click="toggleDash()" :to="$i18n.path('dashboard/events')">
              {{ $t('yourEvents') }}
            </nuxt-link>
            <nuxt-link class="navbar-item" v-on:click="toggleDash()" :to="$i18n.path('dashboard/organizations')">
              {{ $t('yourOrganizations') }}
            </nuxt-link>

          </div>
        </div>
      </div>
      <div class="box main-nav-mobi" v-if="showMainNav">
        <div class="navbar-item has-dropdown" >
          <div class="navbar-dropdown  is-boxed" >
            <span class="navbar-item cbd-size">
                 <strong>{{ $t('coralReefs') }}</strong>
            </span>
            <hr class="dropdown-divider" style="margin:10px 0 0 0;">
            <ul>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="$i18n.path('about')">
                {{ $t('about') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item"  :to="$i18n.path('commitments')">
                {{ $t('commitments') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="$i18n.path('initiatives')">
                {{ $t('initiatives') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="$i18n.path('actions')">
                {{ $t('actions') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="$i18n.path('resources')">
                {{ $t('resources') }}
                </nuxt-link>
              </li>
              <li @click="toggleMainNav()">
                <nuxt-link class="navbar-item" @click="toggleMainNav()" :to="$i18n.path('')"  exact>
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
let showDashboard = false
let showMainNav = false
export default {
  name: 'DefaultHeader',
  components: {},
  data: function () {
      return {showMainNav:showMainNav, showDashboard:showDashboard}

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
.main-nav-mobi{
  position: fixed;
  bottom:52px;
  background-color: #ffffff;
  width: 100%;
  z-index:  50;
}
.navbar-brand{
  align-self:center;
}
.top{font-size:54px;}
.top,.bottom{fill:#0086b7;font-family:Roboto-Black, Roboto, sans-serif, Trebuchet MS; font-weight: 900;}
.bottom{font-size:55px;letter-spacing:0.06em;}

.header-nav{
  position:fixed;
  bottom:0px;
  max-height: 52px;
  z-index: 5;
  background-color: #ffffff;
  width:100%;
}
.grad-bar{
  width:100%;
  position:absolute;
  top: 0px;
}
.logo{
  width:75px;
  margin-top: 5px;
}

@media (min-width:1024px){
  .navbar-brand{
    align-self:flex-start;
  }
  .header-nav{
    position:relative;
    background-color: unset;
  }
  .grad-bar{
    width:100%;
    position: absolute;
    bottom: 0px;
    top:  unset;
  }
  .logo{
    margin-bottom:5px;
    width:125px;
    margin-top: unset;
  }
  .default-header{
    margin-top:30px;
  }
  .navbar-item{
    align-self: flex-end;
  }
  .main-nav{
    font-weight: 500;
    color:#0086b7;
  }
  .main-nav:hover{
    color:#ff3e94;
  }
}

.is-active {
  color:#ff3e94;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatey(35px);
  opacity: 0;
}
</style>

<template>
  <section  >
        <GlobalBar  />
        <DefaultHeader v-if="$breakpoints.isTouch"/>
        <div class="hero">
          <div class="hero-header" :class="{tint:$breakpoints.isMobile}">

                <img class="home-img" v-lazy="getHomeImg()"  :title="$t('homeImage')" :alt="$t('homeImage')">
                <div class="filler" >&nbsp;</div>

              <div class="logo-container" >
                <CoralLogo class="logo"/>
              </div>

              <div class="hero-body">
                <div class="container is-fullhd">
                  <MainNav class="main-nav"/>
                </div>
              </div>
          </div>
        </div>
        <main >
          <nuxt class="main" :class="{'rtl':isAr}"/>
        </main>
        <CoralDivider/>
        <DividerGradBar/>
        <CoralFooter/>
  </section>
</template>

<script>


import CoralLogo      from '~/components/CoralLogo'
import GlobalBar      from '~/components/scbd/GlobalBar/GlobalBar.vue'
import CoralFooter    from '~/components/footer/CoralFooter.vue'
import MainNav        from '~/components/home/MainNav.vue'
import DefaultHeader  from '~/components/default/header/DefaultHeader.vue'
import DividerGradBar from '~/components/DividerGradBar.vue'
import CoralDivider   from '~/components/CoralDivider.vue'
// import pageMixin      from '~/modules/mixins/page'


export default {

  // mixins: [pageMixin],
  components: {GlobalBar,MainNav,CoralFooter,DefaultHeader,CoralLogo,DividerGradBar,CoralDivider},
  head () {

    return {
      meta: [
        { hid:'og:image', name: 'og:image', content: 'https://attachments.cbd.int/1200x630/coral-reef-biodiversity.jpg' },
        { hid:'twitter:image', name: 'twitter:image', content: 'https://attachments.cbd.int/1200x675/coral-reef-biodiversity.jpg' }
      ]
    }
  },
  methods:{
    getHomeImg: function () {
          return this.$CBDImage.get('coral-water-boat-blue-overlay-lg.jpg')//coral-reef-biodiversity.jpg

    }
  },
  computed: {
    isAr: function () {
      return !!(this.$store.state.locale.locale === 'ar')
    }
  }
}

</script>

<style lang="sass" scopped>
  @import '~assets/sass/vars.sass'
  @import "~bulma/sass/elements/button.sass"
  @import "~bulma/sass/layout/hero.sass"
  .hero-home
    @extend .hero
    background-repeat: no-repeat
    background-size: cover
    background-position: center top
    background-color: #00405c
</style>

<style scoped>
.main{margin-bottom:6em;}
.hero{
    background-color: #00405c;
    margin-bottom:4em;
}
.filler{
  margin-top:-.7em;
  background-color:#ffffff;
  height:1px;
  line-height: .1em;
}
.tint:before {
  content: "";
  display: block;
  height:100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,64,92, 0.7);
  -moz-transition: background .3s linear;
  -webkit-transition: background .3s linear;
  -o-transition: background .3s linear;
  transition: background .3s linear;
}
.hero-header{
  position:relative;
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
}
.hero-body{
  z-index: 100;
  position:absolute;
  top:15%;
  width:100%;

}

.logo{
  direction:ltr;
  margin: 50px 0 0 0;
  width: 350px;
}

.logo-container{
  position:absolute;
  top:0px;
  width:100%;
  display:flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  z-index: 100;
}

.home-img{
  min-height: 800px;
  object-fit: cover;
}

  @media (min-width:769px){

    .tint:before {background: unset;}
    .hero-body{
      top:54%;
    }
    .logo{
      direction:ltr;
      -webkit-align-self: center; /* Safari 7.0+ */
      align-self: center;
      margin: 50px 0 0 400px;
      width: 700px;
    }
    .home-img{
      object-fit: cover;
          width:100%;
    }
  }
  @media (min-width:1024px){
    .tint:before {background: unset;}
    .hero-body{
      top:54%;
    }
    .logo{
      direction:ltr;
      -webkit-align-self: center; /* Safari 7.0+ */
      align-self: center;
      margin: 50px 0 0 400px;
      width: 700px;
    }
    .home-img{
      object-fit: cover;
          width:100%;
    }

  }
</style>

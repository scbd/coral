<template>
<section  >
      <GlobalBar  />
      <DefaultHeader v-if="$breakpoints.isTouch"/>
      <div class="hero">
        <div class="hero-header tint" >

              <img class="home-img" v-lazy="getHomeImg()"  :title="$t('homeImage')" :alt="$t('homeImage')">
              <div class="filler debug" >&nbsp;</div>

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
      <main>
        <nuxt :class="{'rtl':isAr}"/>
      </main>
      <CoralDivider/>
      <DividerGradBar/>
      <CoralFooter/>
</section>
</template>

<script>
import Vue            from 'vue'
import CoralLogo      from '~/components/CoralLogo'
import GlobalBar      from '~/components/scbd/GlobalBar/GlobalBar.vue'
import CoralFooter    from '~/components/footer/CoralFooter.vue'
import MainNav        from '~/components/home/MainNav.vue'
import DefaultHeader  from '~/components/default/header/DefaultHeader.vue'
import DividerGradBar from '~/components/DividerGradBar.vue'
import CoralDivider   from '~/components/CoralDivider.vue'
import VueLazyload    from 'vue-lazyload'
Vue.use(VueLazyload,{preload:10})

export default {
  scrollToTop: true,
  components: {GlobalBar,MainNav,CoralFooter,DefaultHeader,CoralLogo,DividerGradBar,CoralDivider},
  computed: {
    isAr: function () {
      return !!(this.$store.state.locale.locale === 'ar')
    }
  },
  mounted (){

    if(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) { console.log = function(){}; }
  },
  head () {
    return {
      link: [
        // We use $route.path since we don't use query parameters
        {
          hid:'canonical',
          rel: 'canonical',
          href: `${process.env.baseUrl}${this.$route.path}`
        }
      ],
      meta: [
        // We use $route.path since we don't use query parameters
        { hid:'lang', name: 'lang', content: this.$i18n.locale },
        { hid:'og:title', name: 'og:title', content: this.$i18n.t('title') },
        { hid:'og:description', name: 'og:description', content: this.$i18n.t('description') },
        { hid:'og:image', name: 'og:image', content: 'http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/1200x630/coral-reef-biodiversity.jpg' },
        { hid:'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid:'twitter:site', name: 'twitter:site', content: '@CBDNews' },
        { hid:'twitter:title', name: 'twitter:title', content: this.$i18n.t('title') },
        { hid:'twitter:description', name: 'twitter:description', content: this.$i18n.t('description') },
        { hid:'twitter:image', name: 'twitter:image', content: 'http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/1200x675/coral-reef-biodiversity.jpg' },
        { hid:'twitter:image:alt', name: 'twitter:image:alt', content: 'CBD Coral Reefs Portal' }
      ],
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir:  this.$i18n.getDirection(this.$i18n.locale)
      }
    }
  },
  methods:{
    getHomeImg: function () {
          return this.$CBDImage.get('coral-water-boat-blue-overlay-lg.jpg')//coral-reef-biodiversity.jpg

    }
  }
}

</script>

<style scoped>
main{padding-top:1.3em;}
.hero{
    background-color: #00405c;
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
  height:99.3%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,139, 0.4);
  -moz-transition: background .3s linear;
  -webkit-transition: background .3s linear;
  -o-transition: background .3s linear;
  transition: background .3s linear;
}
.hero-header{
  position:relative;
  background-repeat: no-repeat;
  background-size: cover;

}
.hero-body{
  z-index: 100;
  position:absolute;
  top:20%;
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

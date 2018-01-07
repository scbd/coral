<template>
  <section>
      <transition name="slide-fade">
        <div v-if="show" class="gobal-menu" :style="{ 'background-color' : backgroundColor }">
          <div class="gobal-grid" >
              <scbd />
              <span>&nbsp;</span>
              <locale/>
          </div>
          <div class="is-hidden-desktop" >
            <transition name="slide-fade">
              <scbd :mobile-options-only="true" v-show="showSCBD"/>
            </transition>
            <transition name="slide-fade">
              <locale :mobile-options-only="true" v-show="showLocale" />
            </transition>
          </div>
        </div>
      </transition>
  </section>
</template>

<script>
import me from '~/components/scbd/GlobalBar/Me.vue'
import locale from '~/components/scbd/GlobalBar/locale/Locale.vue'
import scbd from '~/components/scbd/GlobalBar/scbd/SCBD.vue'
let showLinks = false
export default {
  name: 'GlobalBar',
  components: {me, locale, scbd},
  props: {
    backgroundColor: {type: String, default: 'rgba(255, 255, 255,1)'}
  },
  data () {
    return {
      me: this.$store.state.me,
      showLinks: showLinks,
      lastScrollTop: 0,
      show: true
    }
  },
  computed: {
    locale: function () {
      if (this.$store.state.locale.locale !== 'en') { return '/' + this.$store.state.locale.locale }
      return ''
    },
    showLocale: function () {
      return this.$store.state.locale.showMobileFlag
    },
    showSCBD: function () {
      return this.$store.state.scbd.showMobileFlag
    }
  },
  methods: {
    onScroll () {
      this.scrolled = true
    },
    hasScrolled () {
      let doc = document.documentElement
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      let diff = Math.abs(top - this.lastScrollTop)

      if (top < this.lastScrollTop && diff > 25)
        this.show = true

      if (top > this.lastScrollTop && diff > 25)
        this.show = false

      if (diff > 25) this.lastScrollTop = top

    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll)
    setInterval(function () {
      if (this.scrolled) {
        this.hasScrolled()
        this.scrolled = false
      }
    }.bind(this), 250)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.gobal-grid{
  display: grid;
  grid-template-columns: .8fr 1fr .02fr;
}
  .gobal-menu{
    background-color: #fff;
    min-height: 30px;
    margin-bottom: 0;
    border: 0;
    z-index: 500;
    border-bottom: 1px solid rgb(231, 231, 231);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 5px rgba(0,0,0,.075);
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    transition: top 0.2s ease-in-out;
    position:fixed;
    top:0px;
    width:100%;
  }
  .nav-up {
    top: -35px;
  }
  .gobal-menu .logo{
    max-height: 24px;
    display: inline;
  }
  .cbd-links:hover {
    color: #000000;
  }
  .cbd-links a {
    text-shadow: 0 1px 0 rgba(255,255,255,.25);
    color: #4d4d4d;
    font-family: "Helvetica Neue", Helvetica, sans-serif, Trebuchet MS;
    text-rendering: optimizeLegibility;
    font-size: 14px;
    margin: 0 10px 0 10px;
  }
  .cbd-links a:hover{
    color:#111;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
 {
    transform: translatey(-35px);
    opacity: 0;
  }
  @media (min-width:1024px){
    .gobal-grid{
      grid-template-columns: .17fr 1fr .02fr;
    }
  }
  @media (min-width:1024px){
    .gobal-grid{
      grid-template-columns: .17fr 1fr .02fr;
    }
  }
</style>

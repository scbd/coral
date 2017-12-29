<template>
<section>
    <transition name="slide-fade">

        <div v-if="show" class="gobal-menu" :style="{ 'background-color' : backgroundColor }">

            <div class="level is-mobile" style="margin:0;">
                <!-- Left side -->
                <div class="level-left">
                  <scbd />
                </div>
                <!-- Right side -->
                <div class="level-right">
                    <!-- <me/> -->
                    <locale/>
                </div>
            </div>
            <div class="is-hidden-desktop">
              <locale :mobile-options-only="true" />
              <scbd :mobile-options-only="true"/>
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

.gobal-menu{
  min-height: 30px;
  margin-bottom: 0;
  border: 0;
  z-index: 100;
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
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatey(-35px);
  opacity: 0;
}
</style>

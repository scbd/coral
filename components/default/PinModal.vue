<template>
    <transition name="modal">
      <div class="modal-mask" >
        <div class="modal-wrapper" v-on:click.stop="close($event)">
          <div class="modal-container" >
            <div class="modal-header" :class="{'modal-header-height':hasCover}"  v-lazy:background-image="getCover()">
                <div class="hero-body" >
                    <h1 class="title" :class="{'has-cover':hasCover}" >
                    {{doc.title}}
                    </h1>
                </div>
            </div>

            <div class="modal-body ">
              <div class="box">
              <article class="media" >

                <div class="media-content">
                  <div class="content">
                    <p v-if="!doc.disclaimer">
                      <strong>{{doc.city}}<span v-if="doc.country && doc.city">,</span> {{doc.country}}</strong>
                    </p>
                    <p v-if="!doc.disclaimer">
                      <small>{{doc.startDate | lux($i18n.locale)}}</small>
                    </p>
                    <p class="content">
                      {{doc.description}}
                    </p>
                    <p class="content" v-if="doc.disclaimer">
                      Please note if a nation, territory or area of land is not found kindly refer to the high resolution version:<br>
                      <nuxt-link  :to="$i18n.path('actions-high-resolution')">
                        High Resolution Map
                      </nuxt-link><br>
                      The low resolution is served by default in order to prioritise user experiance for nations with low internet speeds.
                    </p>
                  </div>
                </div>
                <figure class="media-right">
                  <p class="image is-128x128">
                    <img v-lazy="getLogo()">
                  </p>
                </figure>
              </article>
            </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
  import { DateTime }  from 'luxon'
  export default {
    name: 'Modal',
    computed:{
      doc: function(){  return this.$store.state.events.pin },
      hasCover: function(){
        let doc = this.$store.state.events.pin
        if(doc.cover)
          return true
        return false
      }

    },
    methods:{
      // test: function($event){ console.log($event); $event.preventDefault()},
      close: function($event){  this.$store.commit('events/setPin', false); $event.preventDefault()},
      getCover:function(){
        let doc = this.$store.state.events.pin
        if(doc.cover){

          return `https://api.cbd.int/`+doc.cover.url
        }
        else return this.$CBDImage.get('coral-title-gradient-bar.png')
      },
      getLogo:function(){
        let doc = this.$store.state.events.pin
        if(doc.disclaimer) return 'https://attachments.cbd.int/cbd-logo-en.svg'
        if(doc.logo) return `https://api.cbd.int/`+doc.logo
        else return this.$CBDImage.get('red-coral-blue-back.jpg',100)
      }
    },
    filters:{
      lux: toLocaleString
    }
  }

  //============================================================
  //
  //============================================================
  function  toLocaleString (isoDate,locale, preset = 'DATETIME_MED')  {
    return DateTime.fromISO(isoDate).setLocale(locale).toLocaleString(DateTime[preset])
  }
</script>

<style lang="sass">
  @import '~assets/sass/vars.sass'
  @import "~bulma/sass/elements/box.sass"
  @import '~bulma/sass/components/media.sass'
  @import "~bulma/sass/elements/image.sass"
</style>

<style scoped>

/* .media{
  overflow: hidden;
  padding: .5em .5em 1em .5em;
} */
.hero-body .has-cover{
  position: absolute;
  width:100%;
  left:0px;
  padding: unset;
}
.media-content .content{
  font-size: .8em;
}
.media-content .content .content{
  font-size: .8em;
}
.hero-body .title{
  position: absolute;
  top:25%;
  right: 0px;
  left: 0px;
  text-align: center;
  color:#fff;
  background-color: rgba(0, 0, 0, .5);
  padding: .5em .5em .5em .5em;
  font-size: 1em;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  z-index: 99998;
  width: 50vw;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}



.modal-header{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    position: relative;
    min-height: 150px;
}

.modal-header-height{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    min-height: 250px;
}

.modal-body {
  /* margin: 1em 1em 1em 1em; */
  padding: 1em 1em 1em 1em;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 767px) {
  .modal-container {
    width: 100vw;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .modal-container {
    width: 80vw;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .modal-container {
    width: 70vw;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .modal-container {
    width: 50vw;
  }
}

@media screen and (min-width: 1408px) {
  .modal-container {
    width: 50vw;
  }
}
</style>

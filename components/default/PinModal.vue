<template>
    <transition name="modal">
      <div class="modal-mask" >
        <div class="modal-wrapper" v-on:click.stop="close($event)">
          <!-- v-on:click.stop="test($event)"  allow click on modal-->
          <div class="modal-container" >

            <div class="modal-header" :class="{'modal-header-height':hasCover}"  v-lazy:background-image="getCover()">
              <section class="hero">
                <div class="hero-body" >
                    <h1 class="title" :class="{'has-cover':hasCover}" >
                    {{doc.title}}
                    </h1>
                </div>
              </section>
            </div>

            <div class="modal-body ">
              <article class="media" >

                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{doc.city}}<span v-if="doc.country && doc.city">,</span> {{doc.country}}</strong>
                    </p>
                    <p>
                      <small>{{doc.startDate | lux($i18n.locale)}}</small>
                    </p>
                    <p class="content">
                      {{doc.description}}
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

<style scoped>
.media{
  overflow: hidden;
}
.hero-body .has-cover{
  position: absolute;
  bottom: 0px;
  width:100%;
  left:0px;
  padding: unset;
}
.media {
  padding: .5em .5em 1em .5em;
}

.media-content .content{
  font-size: .8em;
}
.media-content .content .content{
  font-size: .8em;
}
.hero-body .title{
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
  margin: 1em 1em 1em 1em;
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

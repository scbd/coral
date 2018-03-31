<template>
    <transition name="modal">
      <div class="modal-mask" >
        <div class="modal-wrapper" v-on:click.stop="close($event)">
          <div class="modal-container" v-on:click.stop="test($event)">

            <div class="modal-header" :class="{'has-cover':hasCover}" v-lazy:background-image="getCover()">
              <section class="hero">
                <div class="hero-body" :class="{'has-cover':hasCover}">
                    <h1 class="title">
                      {{doc.title}}
                    </h1>
                </div>
              </section>
            </div>

            <div class="modal-body ">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-128x128">
                    <img v-lazy="getLogo()">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    </p>
                    <p class="content">
                      {{doc.description}}
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>

              </article>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
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
    test: function($event){ console.log($event); $event.preventDefault()},
    close: function($event){ console.log($event); this.$store.commit('events/setPin', false); $event.preventDefault()},
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
  }

}
</script>
<style lang="sass" scoped>
  @import "~assets/sass/main.sass"
</style>
<style scoped>
.hero-body .has-cover{
  position: absolute;
  bottom: 5px;
  padding: unset;
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
  width: 800px;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header .has-cover{
  min-height: 250px;
}

.modal-header{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    position: relative;
    min-height: 150px;
}

.modal-container .has-cover{
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
</style>

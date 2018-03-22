<template>
  <section >

    <TitleDescription
      :title="$t('titleShort')"
      :description="$t('description')"
      color="#00405c">
      <AboutIcon width="100%"   color="#00405c"/>
    </TitleDescription>

    <div class="grid">
      <div class="ingog left" >
        <div class="logo-holder">
          <span class="title-cr">{{ $t('CORAL') }}</span> <br v-if="!$breakpoints.isTouch">
          <span class="title-cr"> {{ $t('REEFS') }}</span>
        </div>
        <div id="selection">
          <ul class="selection">
            <li   ><span v-on:click="closeAll(),flags.importance=true" ><span v-if="!$breakpoints.isMobile">{{$t('importanceTitle')}}</span> <a v-if="$breakpoints.isMobile" class="selection-link" href="#selection">{{$t('importanceTitle')}}</a></span></li>
            <li  ><span v-on:click="closeAll(),flags.target=true" >{{$t('targetTenTitle')}}</span></li>
            <li ><span  v-on:click="closeAll(),flags.priority=true" >{{$t('priorityActionsTitle')}}</span></li>
            <li ><span v-on:click="closeAll(),flags.tca=true" >{{$t('tcaTitle')}}</span></li>
          </ul>
        </div>
      </div>

      <div class="ingog right" >
        <div >
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.importance"><span class="title-slider">{{$t('importanceTitle')}}</span> <br> {{$t('importanceDescription')}}</span>
          </transition>
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.target"><span class="title-slider">{{$t('targetTenTitle')}}</span> <br>{{$t('targetTenDescription')}}</span>
          </transition>
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.priority"><span class="title-slider">{{$t('priorityActionsTitle')}}</span> <br>{{$t('priorityActionsDescription')}}</span>
          </transition>
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.tca"><span class="title-slider">{{$t('tcaTitle')}}</span> <br>{{$t('tcaDescription')}}</span>
          </transition>
        </div>

      </div>
    </div>
    <div class="title-grid">
      <div class="title-item has-text-centered">
        <img class="grad-bar"  width="110%" :title="$t('dividerImg')"  :alt="$t('dividerImg')"  v-lazy="$CBDImage.get('title-divider.jpg',210)"/>
        <div class="title ">{{$t('otherMarineWork')}}</div>
        <img class="grad-bar" width="110%" :title="$t('dividerImg')"  :alt="$t('dividerImg')"  v-lazy="$CBDImage.get('title-divider.jpg',210)"/>
      </div>
    </div>

    <div class="other-work-grid debug2">
      <div class="square-box debug">
        <div class="square-content debug" >
          <div class="top debug"><div><img :src="$CBDImage.get('cbd-logo-green.jpg',265)"/></div></div>
          <div class="bottom debug2"><div> sss</div></div>
        </div>
      </div>
      <div class="square-box debug">
        <div class="square-content debug" >
          <div class="top debug"><div><img :src="$CBDImage.get('EBSA_Logo.jpg',140)"/></div></div>
          <div class="bottom debug2"><div> sss</div></div>
        </div>
      </div>
      <div class="square-box debug">
        <div class="square-content debug" >
          <div class="top debug"><div><img :src="$CBDImage.get('SOI_Logo.jpg',153)"/></div></div>
          <div class="bottom debug2"><div> sss </div></div>
        </div>
      </div>
    </div>

    <!-- <OrganizatoinGrid :grid-style="Boolean(true)" >
      <OrganizatoinGridItem
        :title="$t('cbdPOWMCB')"
        url="https://www.cbd.int/marine/"
        :image="$CBDImage.get('cbd-logo-green.jpg',265)"
        :padding="Boolean(false)"
      />
      <OrganizatoinGridItem
        :title="$t('ebsa')"
        url="https://www.cbd.int/ebsa/"
        :image="$CBDImage.get('EBSA_Logo.jpg',100)"
        :padding="Boolean(false)"
      />
      <OrganizatoinGridItem
      :title="$t('soi')"
        url="https://www.cbd.int/soi/"
        :image="$CBDImage.get('SOI_Logo.jpg',153)"
        :padding="Boolean(false)"
      />
    </OrganizatoinGrid> -->
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import pageMixin from '~/modules/mixins/page'
  import AboutIcon from '~/components/icons/AboutIcon'
  Vue.use(VueLazyload)
  let flags = {importance:true,target:false,priority:false,tca:false}
  export default {
    name:'about',
    mixins: [pageMixin],
    components: {
      AboutIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      OrganizatoinGrid:() => import('~/components/default/OrganizationGrid/OrganizationGrid'),
      OrganizatoinGridItem:() => import('~/components/default/OrganizationGrid/OrganizationGridItem')
    },
    data:() => {return{flags:flags}},
    methods:{
      closeAll:()=>{
         Vue.set(flags, 'importance', false)
         Vue.set(flags, 'target', false)
         Vue.set(flags, 'priority', false)
         Vue.set(flags, 'tca', false)
      }
    }
  }
</script>

<style scoped>
.square-box{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.square-box:before{
    content: "";
    display: block;
    padding-top: 100%;
}
.square-content{
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.square-content .top {
   display: table;
   width: 100%;
   height: 70%;
}
.square-content .bottom {
   display: table;
   width: 100%;
   height: 30%;
}
.square-content div div {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}


  .other-work-grid {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
  }
  .other-work{
    width:100%;
  }
  .other-work-img{
    height:;
  }
  .other-work:after {
    content: "";
    display: block;
    padding-bottom: 61%;
  }
  .grad-bar{
    width:100%;
    object-fit: fill;
  }
  .title-grid {
    margin-bottom: 1em;
  }
  .title{padding-top: .25em;}

  .logo-holder{
    width:100%;
  }
  .title-cr{
    color:white;
    font-weight: 900;
    font-size: 1.4em;

  }
  .grid{
    padding: 20px 0 20px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 1em;
  }
  .ingog{
    position: relative;
    background-repeat: no-repeat;
    background-size: 6em;
    background-position: right bottom;

    padding: 1.2em 1.2em 1.2em 1.2em;
  }
  .left{
    background-image: url('~/assets/images/left-background.svg');
    background-color: #00405c;
    border-bottom-left-radius: 2em;
    border-top-right-radius: 2em;
  }
  .right{
    background-image: url('~/assets/images/right-background.svg');
    background-color: #ff5690;

    min-height: 280px;
    padding-left: 20px;
    border-bottom-right-radius: 2em;
    border-top-left-radius: 2em;
  }
  .title-item .title{
    margin: 0 0 0 0;
    font-size: 1.5em;
  }
  .sliders{
    position:absolute;
    color:white;
    font-size: 1.3em;
    padding-right: 2em;
  }
  .title-slider{
    color:white;
    font-weight: 900;
    font-size: 1.4em;
    line-height: 1em
  }
  .selection {
    color:white;
    text-decoration: underline;
    font-weight:500;
    line-height: 3em;
    font-size: 1em;
    cursor: pointer;
  }
  .selection li {
    text-decoration: underline;
    margin: 1em 0;
  }
  .selection-link  {
    color: white; /* blue colors for links too */
    text-decoration: none; /* no underline */
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .grid{
      padding: 20px 0 20px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2em;
    }
    .right{
      background-size: 4em;
    }
  }
@media screen and (min-width: 1024px)  {
  .title-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-template-areas:
      ". a a ."
      ". a a .";
  }
  .title-item {
    grid-area: a;
    align-self: center;
    justify-self: center;
  }
  .title-item img{
    width:100%;
  }
  .title-item .title{
    margin: 0 0 0 0;
  }
  .sliders{
    font-size: 1em;
  }
  .selection {
    margin-top: 5%;
    line-height: 1em;
    font-size: 1.5em;
  }
  .grid{
    padding: 20px 0 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5em;
  }
  .logo{
    width:125px;
  }
  .title-cr{
    color:white;
    font-weight: 900;
    font-size: 3em;
    line-height: 1em;
  }
  .title-slider{
    font-size: 2em;
    line-height: 1em
  }
  /* .logo-holder{
    position: absolute;
    top: 15px;
    left: 20px;

  } */

}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-600px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(600px);
  opacity: 0;
}
</style>

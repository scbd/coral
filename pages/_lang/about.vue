<template>
  <section >

    <TitleDescription
      :title="$t('titleShort')"
      :description="$t('description')"
      color="#00405c">
      <AboutIcon width="100%"   color="#00405c"/>
    </TitleDescription>

    <div class="container is-fullhd columns is-4em-mb">
      <div class="column is-half-tablet ingog left" >
        <!-- <div class="logo-holder">
          <span class="title-cr">{{ $t('CORAL') }}</span> <br v-if="!$breakpoints.isTouch">
          <span class="title-cr"> {{ $t('REEFS') }}</span>
        </div> -->
        <div id="selection">
          <ul class="selection">
            <li   ><span  v-on:click="closeAll(),flags.importance=true" ><span v-if="!$breakpoints.isMobile">{{$t('importanceTitle')}}</span> <a v-if="$breakpoints.isMobile" class="selection-link" href="#selection">{{$t('importanceTitle')}}</a></span></li>
            <li  ><span   v-on:click="closeAll(),flags.target=true" >{{$t('targetTenTitle')}}</span></li>
            <li ><span    v-on:click="closeAll(),flags.priority=true" >{{$t('priorityActionsTitle')}}</span></li>
            <li ><span   v-on:click="closeAll(),flags.tca=true" >{{$t('tcaTitle')}}</span></li>
          </ul>
        </div>
      </div>

      <div class="column is-half-tablet ingog right" >
        <div >
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.importance"> {{$t('importanceDescription')}}</span>
          </transition>
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.target"> {{$t('targetTenDescription')}}</span>
          </transition>
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.priority">{{$t('priorityActionsDescription')}}</span>
          </transition>
          <transition name="slide-fade">
            <span class="sliders" v-show="flags.tca">{{$t('tcaDescription')}}</span>
          </transition>
        </div>

      </div>
    </div>

    <Subtitle>{{$t('otherMarineWork')}}</Subtitle>

    <div class="container is-fullhd columns is-4em-mb" :class="{'is-mobile':!$breakpoints.isMobile}">
      <div class="column is-one-third-tablet is-one-mobile">
        <div class="square-box">
          <a href="https://www.cbd.int/marine/" target="_blank" rel="noopener" :title="$t('scbdLogo')" :alt="$t('scbdLogo')">
          <div class="square-content" >
            <div class="top"><div>
              <img v-lazy="$CBDImage.get('cbd-logo-green.jpg',295)" :title="$t('scbdLogo')" :alt="$t('scbdLogo')" v-if="!$breakpoints.isTouch"/>
              <img v-lazy="$CBDImage.get('cbd-logo-green.jpg',147)" :title="$t('scbdLogo')" :alt="$t('scbdLogo')" v-if="$breakpoints.isTouch"/>
            </div></div>
            <div class="bottom"><div> {{$t('cbdPOWMCB')}}</div></div>
          </div>
          </a>
        </div>
      </div>

      <div class="column is-one-third-tablet">
        <div class="square-box">
          <div class="square-content" >
            <a href="https://www.cbd.int/ebsa/" target="_blank" rel="noopener" :title="$t('ebsaLogo')" :alt="$t('ebsaLogo')">
              <div class="top"><div>
                <img v-lazy="$CBDImage.get('EBSA_Logo.jpg',220)" :title="$t('ebsaLogo')" :alt="$t('ebsaLogo')" v-if="!$breakpoints.isTouch"/>
                <img v-lazy="$CBDImage.get('EBSA_Logo.jpg',110)" :title="$t('ebsaLogo')" :alt="$t('ebsaLogo')" v-if="$breakpoints.isTouch"/>
              </div></div>
              <div class="bottom"><div>{{$t('ebsa')}}</div></div>
            </a>
          </div>
        </div>
      </div>

      <div class="column is-one-third-tablet">
        <div class="square-box">
          <div class="square-content" >
            <a href="https://www.cbd.int/soi/" target="_blank" rel="noopener" :title="$t('soiLogo')" :alt="$t('soiLogo')">
              <div class="top"><div>
                <img v-lazy="$CBDImage.get('SOI_Logo.jpg',220)" :title="$t('soiLogo')" :alt="$t('soiLogo')" v-if="!$breakpoints.isTouch"/>
                <img v-lazy="$CBDImage.get('SOI_Logo.jpg',110)" :title="$t('soiLogo')" :alt="$t('soiLogo')" v-if="$breakpoints.isTouch"/>
              </div></div>
              <div class="bottom"><div>{{$t('soi')}}</div></div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

  import Vue            from 'vue'
  import AboutIcon      from '~/components/icons/AboutIcon'
  import Subtitle       from '~/components/Subtitle'
  import pageMixin      from '~/modules/mixins/page'

  let flags = {importance:true,target:false,priority:false,tca:false}
  export default {
    name:   'about',
    layout: 'default',
    mixins: [pageMixin],
    components: {
      AboutIcon,
      Subtitle,
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
.is-4em-mb{
  margin-bottom:4em;
}
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
     border:  1px solid #00405c;
  }
  .square-content .bottom {
     display: table;
     width: 100%;
     height: 30%;
     background-color: #00405c;
     color:#ffffff;
     padding: 1em 1em 1em 1em;
     font-weight: 600;
     font-size: .8em;
  }
  .square-content div div {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
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

  .title{padding-top: .25em;}

  .logo-holder{
    width:100%;
  }
  .title-cr{
    color:white;
    font-weight: 900;
    font-size: 1.4em;
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
    margin: 0 .5em 1em .5em;
  }
  .right{
    background-image: url('~/assets/images/right-background.svg');
    background-color: #d44f83;

    min-height: 280px;
    padding-left: 20px;
    border-bottom-right-radius: 2em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    margin: 0 .5em 4em .5em;
  }
  .title-item .title{
    margin: 0 0 0 0;
    font-size: 1.5em;
  }
  .sliders{
    position:absolute;
    color:white;
    /* font-size: 1em; */
    padding-right: 1em;
  }
  .title-slider{
    color:white;
    font-weight: 900;
    /* font-size: 1em; */
  }
  .selection {
    color:white;
    text-decoration: none;
    font-weight:500;
    line-height: 3em;
    font-size: 1em;
    cursor: pointer;
  }
  .selection li {
    text-decoration: none;
    margin: 1em 0;
  }
  .selection-link  {
    color: white; /* blue colors for links too */
    text-decoration: none; /* no underline */
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .right{
      background-size: 4em;
      margin: 0 0 0 .5em;
    }
    .left{
      background-size: 4em;
      margin: 0 .5em 0 0;
    }
    .other-work-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
@media screen and (min-width: 1024px)  {
  .other-work-grid {
    grid-template-columns: 1fr 1fr 1fr;
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
    padding: 0 0 0 0;
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
    /* font-size: 3em; */
    line-height: 1em;
  }
  .title-slider{
    color:white;
    font-weight: 900;
    /* font-size: 1.4em; */
  }
  .sliders{
    position:absolute;
    color:white;
    /* font-size: 1.3em; */
    padding-right: 2em;
  }
  .right{
    background-size: 4em;
    margin: 0 0 0 .5em;
  }
  .left{
    background-size: 4em;
    margin: 0 .5em 0 0;
  }
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

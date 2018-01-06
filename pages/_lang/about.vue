<template>
  <section >

    <TitleDescription
      :title="$t('titleShort')"
      :description="$t('description')"
      color="#0086b7">
      <AboutIcon width="90%"   color="#0086b7"/>
    </TitleDescription>

    <div class="grid">
      <div class="ingog left " >
        <div class="logo-holder">
          <span class="title-cr">{{ $t('CORAL') }}</span>

          <span class="title-cr"> {{ $t('REEFS') }}</span>
        </div>
        <div id="selection">
          <ul class="selection">
            <li  v-on:mouseover="importance=true" v-on:mouseout="importance=false"><span v-on:click="importance=true" ><span v-if="!$breakpoints.isMobile">{{$t('importanceTitle')}}</span> <a v-if="$breakpoints.isMobile" class="selection-link" href="#selection">{{$t('importanceTitle')}}</a></span></li>
            <li  v-on:mouseover="target=true" v-on:mouseout="target=false"><span v-on:click="target=true" >{{$t('targetTenTitle')}}</span></li>
            <li v-on:mouseover="priority=true" v-on:mouseout="priority=false"><span  v-on:click="priority=true" >{{$t('priorityActionsTitle')}}</span></li>
            <li v-on:mouseover="tca=true" v-on:mouseout="tca=false" ><span v-on:click="tca=true" >{{$t('tcaTitle')}}</span></li>
          </ul>

        </div>
      </div>

      <div class="ingog right" >
        <div >
          <transition name="slide-fade">
            <span class="sliders" v-if="importance"><span class="title-slider">{{$t('importanceTitle')}}</span> <br> {{$t('importanceDescription')}}</span>
            <span class="sliders" v-if="target"><span class="title-slider">{{$t('targetTenTitle')}}</span> <br>{{$t('targetTenDescription')}}</span>
            <span class="sliders" v-if="priority"><span class="title-slider">{{$t('priorityActionsTitle')}}</span> <br>{{$t('priorityActionsDescription')}}</span>
            <span class="sliders" v-if="tca"><span class="title-slider">{{$t('tcaTitle')}}</span> <br>{{$t('tcaDescription')}}</span>
          </transition>
        </div>

      </div>
    </div>
    <div class="title-grid">
      <div class="title-item has-text-centered ">
        <img class="grad-bar" width="100%" :title="$t('dividerImg')"  :alt="$t('dividerImg')" v-lazy="require('~/assets/images/footer-bar.svg')"/>
        <div class="title is-capitalized">{{$t('otherMarineWork')}}</div>
        <img class="grad-bar" width="100%" :title="$t('dividerImg')"  :alt="$t('dividerImg')" v-lazy="require('~/assets/images/footer-bar.svg')"/>
      </div>
    </div>


    <OrganizatoinGrid>
      <OrganizatoinGridItem
        :title="$t('cbdPOWMCB')"
        url="https://www.cbd.int"
        :image="require('~/assets/images/logo/cbd-logo-green-en.svg')"
      />
      <OrganizatoinGridItem
        :title="$t('ebsa')"
        url="https://www.cbd.int/ebsa/"
        :image="require('~/assets/images/logo/EBSA_Logo.svg')"
      />
      <OrganizatoinGridItem
      :title="$t('soi')"
        url="https://www.cbd.int/soi/"
        :image="require('~/assets/images/logo/SOI_Logo.svg')"
      />
    </OrganizatoinGrid>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import pageMixin from '~/modules/mixins/page'
  import AboutIcon from '~/components/icons/AboutIcon'
  Vue.use(VueLazyload)
  export default {
    name:'about',
    mixins: [pageMixin],
    components: {
      AboutIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      OrganizatoinGrid:() => import('~/components/default/OrganizationGrid/OrganizationGrid'),
      OrganizatoinGridItem:() => import('~/components/default/OrganizationGrid/OrganizationGridItem')
    },
    data:() => {return{importance:false,target:false,priority:false,tca:false}}
  }
</script>

<style scoped>
  .logo-holder{
    text-align: center;
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
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 20px 20px 20px 20px;
  }
  .left{
    background-image: url('~/assets/images/left-background.svg');
    background-color: #0086b7;
  }
  .right{
    background-image: url('~/assets/images/right-background.svg');
    background-color: #ff5690;
    background-size: 3em;
    min-height: 280px;
    padding-left: 20px;
  }
  .title-item .title{
    margin: 0 0 0 0;
  }
  .sliders{
    position:absolute;
    color:white;
    font-size: 1em;
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
    font-size: 1.3em;
  }
  .selection {
    margin-top: 5%;
    line-height: 2em;
    font-size: 1.5em;
  }
  .grid{
    padding: 20px 0 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
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
  .logo-holder{
    position: absolute;
    top: 15px;
    left: 20px;

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

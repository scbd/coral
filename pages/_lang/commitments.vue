<template>
  <section>

        <TitleDescription
          :title="$t('titleShort')"
          :description="$t('description')"
          color="#aacfff">
          <CommitmentIcon width="100%" color="#aacfff"/>
        </TitleDescription>

        <div class="container is-fullhd grid-gbo ">
          <div class="item-left" v-lazy:background-image="getBGImg()">
              <div class="target" >
              </div>
          </div>

          <div class="item-right">
            &nbsp;
            <div class="gbo-description"  v-if="$breakpoints.isMobile">
              {{$t('gboFourDescription')}}
            </div>
          </div>

          <div class="target-inner">
            <a href="https://www.cbd.int/doc/publications/cbd-aichi-target-10-en.pdf" download>
            <div class="grid-gbo">
                <div >

                      <div class="title-gbo-sub">{{$t('gboFourTitleOne')}}</div>

                      <div class="title is-capitalized" v-if="$breakpoints.isTouch">
                        {{$t('gboFourTitleTwo')}}
                      </div>
                      <div class="title title-gbo is-capitalized" v-if="!$breakpoints.isTouch">

                        {{$t('gboFourTitleTwoA')}}<br>
                        {{$t('gboFourTitleTwoB')}}<br>
                        {{$t('gboFourTitleTwoC')}}
                        {{$t('gboFourTitleTwoD')}}

                      </div>

                      <div  v-if="$breakpoints.isTouch">{{$t('gboFourTitleThree')}}</div>
                      <div class="title-gbo-sub" v-if="!$breakpoints.isTouch">
                        {{$t('gboFourTitleThreeA')}}<br>
                        {{$t('gboFourTitleThreeB')}}<br>
                        {{$t('gboFourTitleThreeC')}}<br>
                      </div>

                </div>
                <div class="item-right" v-if="!$breakpoints.isMobile">
                  <!-- <img :alt="$t('aBT')+' 10'" :title="$t('aBT')+' 10'" class="is-pulled-right" style="margin:5px 5px 5px 5px;" width="40px" v-lazy="require('~/assets/images/biodiversity-targets/biodiversity-target-10.svg')" /> -->
                    <div class="target" >

                      <div class="target-inner">

                          {{$t('gboFourDescription')}}

                      </div>
                    </div>
                </div>
            </div>
          </a>
          </div>
        </div>

        <Subtitle>{{$t('subTitle')}}</Subtitle>
        <CoralSectionTwo><div >{{$t('subDescription')}}</div></CoralSectionTwo>
        
        <div class="container is-fullhd linkages">

          <Commitment :title="$t('climateChangeTitle')" :description="$t('climateChangeDescription')" color="#00405c"
          :abt="['05','10','15']"
          :sdg="['13','11','15']"/>

          <Commitment :title="$t('tourismTitle')" :description="$t('tourismDescription')" color="#aacfff"
          :abt="['06','13','14']"
          :sdg="['01','08','14']"/>

          <Commitment :title="$t('environmentalIndicatorsTitle')" :description="$t('environmentalIndicatorsDescription')" color="#fac1ff"
          :abt="['08','10']"
          :sdg="['06','11','14']"/>

          <Commitment :title="$t('educationAndAwarenessTitle')" :description="$t('educationAndAwarenessDescription')" color="#e8768d"
          :sdg="['04','12','14']"
          :abt="['01','02','04']"/>

          <Commitment :title="$t('healthTitle')" :description="$t('healthDescription')" color="#ff3e94"
          :abt="['13','14','16']"
          :sdg="['03','06']"/>

        </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import pageMixin from '~/modules/mixins/page'
  import CommitmentIcon from '~/components/icons/CommitmentIcon'
  import TitleDescription from '~/components/default/TitleDescription'
  import Commitment from '~/components/default/commitments/Commitment'
  import VueLazyload from 'vue-lazyload'
  import Subtitle     from '~/components/Subtitle'
  import CoralSectionTwo from '~/components/CoralSectionTwo'

  Vue.use(VueLazyload)

  export default {
    name:'commitments',
    mixins: [pageMixin],
    components: {
      CommitmentIcon,TitleDescription,Commitment,Subtitle,CoralSectionTwo
    },
    methods:{
      getBGImg: function () {
          if(this.$breakpoints.isDesktopHD)
            return this.$CBDImage.get('red-coral-blue-back.jpg',950)

          if(this.$breakpoints.isDesktopWS)
            return this.$CBDImage.get('red-coral-blue-back.jpg',750)

          if(this.$breakpoints.isDesktop)
            return this.$CBDImage.get('red-coral-blue-back.jpg',700)

          if(this.$breakpoints.isTablet)
            return this.$CBDImage.get('red-coral-blue-back.jpg',1024)

          return this.$CBDImage.get('red-coral-blue-back.jpg',400)
      }
    }
  }
</script>

<style scoped>

  .title-gbo{
    font-size: 2.5em;
    line-height: .8em;
  }
  .title-gbo-sub{
    font-size: 1.5em;
    font-weight: 900;
    line-height: .85em;
  }
  a .grid-gbo{
    color:#ffffff;
  }

  .linkages{
    margin-top:20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap:20px;
  }
  .desc{
    color:#00405c;
  }

  .item-left {
    grid-area: left;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 70%;
    /* background-color: #00405c; */
  }
  .item-right {
    grid-area: right;
  }
  .target-inner {
    grid-area: target-inner;
    grid-column: left-start / left-end;
    grid-row: left-start / left-end;

    z-index: 20;
    margin: 20% 0 20% 0;
    padding: 1em 1em 0 1em;
    background-color: #00405c;
    color: #fff;
    font-weight: 500;
    width:100%;
  }

  .target-inner div{
    margin: 0 0 10px 0;
    padding: 0 .5em 0 0;
  }

  .grid-gbo{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto .1fr;

    grid-template-areas:
    "left"
    "right"
    "target-inner";
    margin-top:-40px;
    margin-bottom:1.5em;
  }

  .target {
    display: flex;
    justify-content: end;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  }
  .gbo-description{

    background-color: #00405c;
    color: #fff;

  }

  .target-inner .title {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .linkages{
      grid-template-columns: 1fr 1fr;
    }
    .grid-gbo{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
      "left right" ;
      grid-template-rows: auto;
      margin-top:-120px;
      margin-bottom:-95px;
    }
    .target {
      background-repeat: no-repeat;
      background-size: 50% auto;
      background-position: left center;
      justify-content: flex-start;
    }

    .target-inner {
      grid-column: left-start / right-end;
      grid-row: left-start / left-end;
      z-index: 20;
      /* margin: 100px 0 10% 0; */
      background-color: #00405c;
      color: #fff;
      font-weight: 400;
      width:100%;
      padding: 1.5em 1em 0 1em;
    }
  }
</style>

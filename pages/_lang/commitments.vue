<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#aacfff">
        <CommitmentIcon width="100%" color="#aacfff"/>
      </TitleDescription>
      <!-- <a href="https://www.cbd.int/doc/publications/cbd-aichi-target-10-en.pdf" target="_blank" rel="noopener" > -->
        <div class="grid-gbo">

          <div class="item-left" v-lazy:background-image="getBGImg()">
            <a href="https://www.cbd.int/doc/publications/cbd-aichi-target-10-en.pdf" target="_blank" rel="noopener">
              <div class="target" >

              </div>
            </a>
          </div>

          <div class="item-right">
            &nbsp;
            <div class="gbo-description"  v-if="$breakpoints.isMobile()">
              {{$t('gboFourDescription')}}
            </div>
          </div>

          <div class="target-inner">
            <div class="grid-gbo">
                <div>

                    <span >{{$t('gboFourTitleOne')}}</span><br><br>
                    <span class="title is-capitalized">
                      <span v-if="$breakpoints.isTouch()">
                        {{$t('gboFourTitleTwo')}} <br>
                      </span>
                      <span v-if="!$breakpoints.isTouch()">
                        {{$t('gboFourTitleTwoA')}}<br>
                        {{$t('gboFourTitleTwoB')}}<br>
                        {{$t('gboFourTitleTwoC')}}
                        {{$t('gboFourTitleTwoD')}}<br><br>
                      </span>
                    </span>
                    <span v-if="$breakpoints.isTouch()">{{$t('gboFourTitleThree')}}</span>
                    <span v-if="!$breakpoints.isTouch()">
                      {{$t('gboFourTitleThreeA')}}<br>
                      {{$t('gboFourTitleThreeB')}}<br>
                      {{$t('gboFourTitleThreeC')}}<br>
                    </span>
                </div>
                <div class="item-right" v-if="!$breakpoints.isMobile()">
                  <img class="is-pulled-right" style="margin:5px 5px 5px 5px;" width="40px" :src="require('~/assets/images/biodiversity-targets/biodiversity-target-10.svg')" />
                    <div class="target" >
                      <span></span>
                      <div class="target-inner">
                        {{$t('gboFourDescription')}}
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div class="linkages-title">
          <span class="title">{{$t('subTitle')}}</span>
          <p class="desc">{{$t('subDescription')}}</p>
        </div>

        <div class="linkages">

          <Commitment :title="$t('climateChangeTitle')" :description="$t('climateChangeDescription')" color="#0086b7"
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


      <!-- </a> -->
  </section>
</template>

<script>
  import Vue from 'vue'
  import pageMixin from '~/modules/mixins/page'
  import CommitmentIcon from '~/components/icons/CommitmentIcon'
  import TitleDescription from '~/components/default/TitleDescription'
  import Commitment from '~/components/default/commitments/Commitment'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)

  export default {
    name:'commitments',
    mixins: [pageMixin],
    components: {
      CommitmentIcon,TitleDescription,Commitment
    },
    methods:{
      getBGImg: function () {
          if(this.$breakpoints.isDesktopHD)
            return this.$CBDImage.get('red-coral-blue-back.jpg',1100)

          if(this.$breakpoints.isDesktopWS)
            return this.$CBDImage.get('red-coral-blue-back.jpg',700)

          if(this.$breakpoints.isDesktop)
            return this.$CBDImage.get('red-coral-blue-back.jpg',600)

          if(this.$breakpoints.isTablet)
            return this.$CBDImage.get('coral-reef-biodiversity.jpg',500)

          return this.$CBDImage.get('coral-reef-biodiversity.jpg',250)
      }
    }
  }
</script>

<style scoped>
.linkages-title{
  margin-top:20px;
}
.linkages{
  margin-top:20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:20px;
}
.desc{
  color:#0086b7;
}
  .item-left {
    grid-area: left;
  }
  .item-right {
    grid-area: right;
  }
  .target-inner {
    grid-area: target-inner;
    grid-column: left-start / left-end;
    grid-row: left-start / left-end;

    z-index: 20;
    margin: 25% 0 25% 0;
    background-color: #0086b7;
    color: #fff;
    font-weight: 500;
    width:100%;
    padding: 20px 20px 20px 20px;
  }

  .grid-gbo{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto .1fr;
    grid-gap: 10px;
    grid-template-areas:
    "left"
    "right"
    "target-inner";
    margin-top: 20px;
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

    background-color: #0086b7;
    color: #fff;
    padding: 10px 10px 10px 10px;
  }
  .target-inner {
    /* margin: 20% 0 20% 0; */
    background-color: #0086b7;
    color: #fff;
    font-weight: 500;
  }
  .target-inner .title {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .grid-gbo{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
      "left right" ;
      grid-template-rows: auto;
      margin-top: 20px;
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
      margin: 5% 0 5% 0;
      background-color: #0086b7;
      color: #fff;
      font-weight: 500;
      width:100%;
      padding: 20px 20px 20px 20px;
    }
  }
</style>

<template>
  <section>

        <TitleDescription
          :title="$t('titleShort')"
          :description="$t('description')"
          color="#aacfff">
          <svg xmlns="http://www.w3.org/2000/svg" :style="{fill:'#aacfff','margin-bottom':'-15px;'}"><title>Coral Reef Commitment Icon</title><path d="M.06,121.43H72.63v12.09H.06Zm25.67-78.2L42.84,26.12l85.53,85.54-17.1,17.1ZM68.48.48,102.69,34.7,85.59,51.8,51.38,17.59ZM17.17,51.8,51.38,86,34.27,103.12.06,68.91Z" transform="translate(-0.06 -0.48)"/></svg>
        </TitleDescription>

        <div class="container is-fullhd">
          <div class="gbo-container">
            <div class="columns gbo-background">
              <div class="column is-half-tablet is-one-mobile is-half-desktop backer-one" v-lazy:background-image="getBGImg()">
                &nbsp;
              </div>
            </div>

            <div class="container gbo-content-container">
              <a href="https://www.cbd.int/doc/publications/cbd-aichi-target-10-en.pdf" download>
                <div class="columns " :class="{'is-mobile':!$breakpoints.isMobile}">
                  <div class="column is-half-tablet is-one-mobile is-paddingless">
                    <div class="left-side">

                          <div class="title-gbo-sub">{{$t('gboFourTitleOne')}}</div>
                          <div class="title-gbo is-capitalized" >
                            {{$t('gboFourTitleTwoA')}}<br>
                            {{$t('gboFourTitleTwoB')}}<br>
                            {{$t('gboFourTitleTwoC')}}
                            {{$t('gboFourTitleTwoD')}}
                          </div>

                          <div class="title-gbo-sub" >
                            {{$t('gboFourTitleThreeA')}}<br>
                            {{$t('gboFourTitleThreeB')}}<br>
                            {{$t('gboFourTitleThreeC')}}<br>
                          </div>
                    </div>
                  </div>
                  <div class="column is-half-tablet" v-if="!$breakpoints.isMobile">
                    <div class="right-side">
                      <div>{{$t('gboFourDescription')}}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div class="gbo-description bottom-m"  v-if="$breakpoints.isMobile">
            {{$t('gboFourDescription')}}
          </div>
        </div>

        <Subtitle>{{$t('subTitle')}}</Subtitle>

        <CoralSectionTwo><div >{{$t('subDescription')}}</div></CoralSectionTwo>

        <div class="container is-fullhd columns is-multiline linkages">
          <div class="column is-half-tablet">
            <Commitment  :title="$t('climateChangeTitle')" :description="$t('climateChangeDescription')" color="#00405c"
            :abt="['05','10','15']"
            :sdg="['13','11','15']"/>
          </div>

          <div class="column is-half-tablet">
            <Commitment :title="$t('tourismTitle')" :description="$t('tourismDescription')" color="#aacfff"
            :abt="['06','13','14']"
            :sdg="['01','08','14']"/>
          </div>

          <div class="column is-half-tablet">
            <Commitment :title="$t('environmentalIndicatorsTitle')" :description="$t('environmentalIndicatorsDescription')" color="#fac1ff"
            :abt="['08','10']"
            :sdg="['06','11','14']"/>
          </div>

          <div class="column is-half-tablet">
            <Commitment :title="$t('educationAndAwarenessTitle')" :description="$t('educationAndAwarenessDescription')" color="#e8768d"
            :sdg="['04','12','14']"
            :abt="['01','02','04']"/>
          </div>

          <div class="column is-half-tablet">
            <Commitment  :title="$t('healthTitle')" :description="$t('healthDescription')" color="#ff3e94"
            :abt="['13','14','16']"
            :sdg="['03','06']"/>
          </div>
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
  .gbo-container{
    position:relative;
    min-height: 500px;
    margin-bottom:4em;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    flex-direction:row;
  }
  .gbo-container:after{
    content:'';
    min-height:inherit;
    font-size:0;
    display: block;
  }
  .gbo-background{
    position:absolute;
    top:10px;
    left: 10px;
    z-index:-10;
  }
  .gbo-content-container{

    color:white;
    /* width: 100%; */
  }
  .backer-one{
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    min-height: 500px;
    min-width: 400px;
    background-color: #00405c;
  }
  .left-side{
    margin: 2em 0 2em 0;
    background-color: #00405c;
    padding: 2em 1em 2em 1em;
  }
  .right-side{
    display:flex;
    align-items: center;
    padding: 0 2em 0 2em;
    height:100%
  }

  .title-gbo{
    font-size: 2.5em;
    font-weight: 900;
    line-height: .8em;
    margin: .5em 0 .5em 0;
  }

  .title-gbo-sub{
    font-size: 1.5em;
    font-weight: 900;
    line-height: .85em;
  }
  .gbo-content-container a {
    color:#ffffff;
  }

  .desc{
    color:#00405c;
  }

  .bottom-m{
    margin-bottom:4em;
  }

  .gbo-description{
    background-color: #00405c;
    color: #fff;
    margin: 0 0 4em 0;
    padding: 1em 1em 1em 1em;
  }

  @media screen and (min-width: 768px) {
    .gbo-content-container{
      background-color: #00405c;
    }
  }

  @media screen and (min-width: 1024px) {
    .gbo-container{
      min-height: 512px;
      margin-bottom:4em;
    }
    .backer-one{
      min-height: 512px;
      min-width: 512px;
    }
    .left-side{
      margin: 2em 0 2em 2em;
    }
    .gbo-content-container{
      background-color: #00405c;
    }
    .gbo-background{
      left: 12px;
    }
  }

  @media screen and (min-width: 1216px)  {
    .gbo-container{
      min-height: 672px;
      margin-bottom:4em;
    }
    .backer-one{
      min-height: 672px;
      min-width: 672px;
    }
    .left-side{
      margin: 2em 0 2em 2em;
    }
    .gbo-content-container{
      background-color: #00405c;
    }
    .gbo-background{
      left: 12px;
    }
  }


</style>

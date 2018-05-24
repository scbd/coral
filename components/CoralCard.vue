<template>
  <div class="card coral-card">
      <div class="card-image">
          <figure class="image">
              <img class="header-img" v-lazy="getImage" :alt="$t('pinkCamo')">
          </figure>
      </div>
      <div class="card-content">

          <div class="content coral-card-content">
              {{(doc.title || doc.title_t) | trunc}}
          </div>
          <div class="card-bottom" :class="{'card-bottom-paginated':this.paginated}">
            <p class="has-text-centered "><time :datetime="doc.startDate  || doc.startDate_dt" v-if="doc.startDate || doc.startDate_dt">{{toLocaleString(doc.startDate || doc.startDate_dt)}}</time></p>
            <div class="has-text-centered button-container"><a class="button  is-ligh"  :href="doc.url_ss[0]" target="_blank" rel="noopener nofollow">
              View Record
            </a></div>
          </div>
      </div>
  </div>
</template>

<script>
  import { DateTime }  from 'luxon'
  export default {
    name: 'CoralCard',
    props: {
        doc: {
          type: Object
        },
        paginated: {
          type: Boolean,
          default: true
        }
    },
    methods:{
      toLocaleString:toLocaleString
    },
    computed:{
      getImage:function(){

        if(this.doc.resourceType==='ed')
          return this.$CBDImage.get('empty-resource.svg')

        if(this.doc.schema==='event')
          return this.$CBDImage.get('Actions_.svg')

        return this.$CBDImage.get('scbd-resources.svg')
      },
      isEvent:function(){
        if(this.doc.schema==='event')
          return true

        return false
      }
    },
    filters:{
      trunc(text,length=110,tail='...'){
        if(text.length>length)
          return text.substring(0,110)+' ...'
        return text
      }
    }
  }

  //============================================================
  //
  //============================================================
  function  toLocaleString (isoDate, preset = 'DATE_FULL')  {
    return DateTime.fromISO(isoDate).setLocale(this.$i18n.locale).toLocaleString(DateTime[preset])
  }

</script>

<style scopped>
  .header-img{
    width:100%;
  }
  .button-container{
    width:100%;
  }
  .pink {
    font-size: 1em;
    background-color: #d44f83 !important;
    font-weight: 900;
    margin-top: .5em;
    transition: all 0.3s ease 0s;
    border-radius: 10px;
    font-weight: 500;
  }

  .pink:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);

  }
  .coral-card {
    max-width: 100%;
    max-height: 476px;
    background-color: #ffffff;
  }
  .coral-card-content{
    margin-bottom: 110px;
    line-height: 1.3em;

  }
  .card-bottom{
    position: absolute;
    bottom: 0px;
    left:0;
    right:0;
    padding: 1em 0 1em 0;
  }
  .card-bottom-paginated{
    padding: 1em 0 2.5em 0;
  }
  @media (min-width:767px){
    .coral-card {
      max-width: 320px;
      bottom: 10px;
      /* max-height: 320px; */
    }
  }

</style>

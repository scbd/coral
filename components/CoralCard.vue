<template>
  <div class="card">
      <div class="card-image">
          <figure class="image">
              <img v-lazy="$CBDImage.get('card-bg.jpg',320)" :alt="$t('pinkCamo')">
          </figure>
      </div>
      <div class="card-content">

          <div class="content">
              {{doc.title || doc.title_t}}
          </div>
          <div class="card-bottom">
            <p><time :datetime="doc.startDate  || doc.startDate_dt" v-if="doc.startDate || doc.startDate_dt">{{toLocaleString(doc.startDate || doc.startDate_dt)}}</time></p>
            <a class="button is-primary pink" :href="doc.url_ss[0]" target="_blank" rel="noopener">
              View
            </a>
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
        }
    },
    methods:{
      toLocaleString:toLocaleString
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
  .pink {
    font-size: 1em;
    background-color: #e8768d !important;
    font-weight: 900;
    margin-top: .5em;
    transition: all 0.3s ease 0s;
    border-radius: 10px;
  }
  .pink:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);

  }
  .card {
    max-width: 100%;
    background-color: #ffffff;
  }
  .content{
    margin-bottom: 110px;
    line-height: 1.3em;

  }
  .card-bottom{
    position: absolute;
    bottom: 0px;
    padding: 1em 0 1em 0;
  }
  @media (min-width:767px){
    .card {
      max-width: 320px;
    }
  }

</style>

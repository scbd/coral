<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#e8768d">
        <ActionIcon width="100%" color="#e8768d"/>
      </TitleDescription>

      <Subtitle >
        <a class="button regg" href="https://www.cbd.int/2011-2020/dashboard/submit/event/new" target="_blank" rel="nofollow noopener" >{{$t('rya')}}</a>
      </Subtitle>

      <SVGMap  :high-res="Boolean(true)" class="is-4em-mb"/>
  </section>
</template>

<script>

  import TitleDescription from '~/components/default/TitleDescription'
  import Subtitle         from '~/components/Subtitle'
  import pageMixin        from '~/modules/mixins/page'

  export default {
    layout: 'default',
    name:   'actions',
    mixins: [pageMixin],
    components: {
      ActionIcon:() => import('~/components/icons/ActionIcon'),
      SVGMap:() => import('~/components/default/SVGMap'),
      TitleDescription,
      Subtitle

    },
    async asyncData ({app,store}) {

      await store.dispatch('events/get')

    },
    mounted(){
      require('ammap3')
      require('ammap3/ammap/maps/js/worldHigh')
    }

  }
</script>
<style>
  .is-4em-mb{
    margin-bottom:4em;
  }
  .regg{

    background-color: #00405c !important;
    border-color: #00405c!important;
    color:#ffffff!important;
    z-index: 100;
    margin-top: .4em;
    width:300px;
  }
  .regg:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
    color:#ffffff;
    border-color: #00405c;

  }
  .regg:focus {
    color:#ffffff;
    border-color: #00405c;

  }
</style>

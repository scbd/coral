<template>
  <section >
    <div class="columns">
      <div class="column is-one-quarter">
        <div >{{$t('titleShort')}}</div>
      </div>
      <div class="column">
        <p>{{$t('description')}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import i18nMixin from '~/modules/mixins/LazyLoadi18n'

  export default {
    layout: 'default',
    name:'about',
    scrollToTop: true,
    components: {},
    mixins: [i18nMixin]
  }
</script>

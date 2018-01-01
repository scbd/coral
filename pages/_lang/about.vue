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
  import pageMixin from '~/modules/mixins/page'

  export default {
    name:'about',
    mixins: [pageMixin],
    components: {},
    asyncData({app}) {
      return {
        title: 'About Coral Reefs Portal'
      }
    },
  }
</script>

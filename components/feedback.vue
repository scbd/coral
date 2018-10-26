<template>
    <section>
        <div class="notification" v-if="pop && open"  v-bind:class="[type]" style="margin-bottom:10px;">
          <button class="delete" v-on:click="open=false"> </button>
          <strong>{{msg.title}}</strong>
          <p>{{msg.description}}</p>
        </div>

    </section>
</template>

<script>
export default {
  name: 'feedback',
  props: ['id'],
  data () {
    return {
      variant: 'info',
      open:true,
      msg:{}
    }
  },
  computed: {
    pop:function(){
        let msg = this.$store.getters['feedback/pop']
//console.log(msg)
        if(msg) {
            this.variant = msg.type
            this.msg = msg
            this.open = true
            return true
        }else
            this.msg = {}

        return false
    },
    type:function(){
        if(this.msg.type) return 'is-'+this.msg.type
        else return 'is-info'
    }

},
    methods:{
        close:function(){
            this.$store.commit('feedback/clear')
            return this.msg={}
        }
    }
}
</script>
  <style lang="sass">
  // @import "~bulma/sass/utilities/initial-variables"
  @import "~bulma/sass/utilities/_all"
  // @import "~bulma/sass/base/_all"
  @import "~bulma/sass/elements/other"
  @import "~bulma/sass/elements/button"
  @import "~bulma/sass/elements/notification"
  </style>
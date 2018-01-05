<template>
  <section>
    <transition-group class="resources" name="list-complete" tag="p" v-if="isClient">
      <Resource v-if="index >=start && index < end" v-for="(item, index) in resource" class="list-complete-item" :total="length" :index="index+1" :title="item.title_t" :description="item.description_t" :key="item.identifier_s" :url="item.url_ss[0]"/>
        <div class="controls" key="control123">
          <span v-on:click="prev"><i class="fontello icon-left-circled " :class="{'disabled':!start,'control':start}"></i></span> <span v-on:click="next"><i class="fontello icon-right-circled" :class="{'disabled':(end===length-1),'control':!(end===length-1)}"></i></span>
        </div>
    </transition-group >
    <div class="resources debug" name="list-complete" tag="p" v-if="!isClient">
      <Resource v-if="index >=start && index< end" v-for="(item, index) in resource" class="list-complete-item" :title="item.title_t" :description="item.description_t" :key="item.identifier_s" :url="item.url_ss[0]"/>
        <div>
          <span v-on:click="prev"><i class="fontello icon-left-circled " :class="{'disabled':!start,'control':start}"></i></span> <span v-on:click="next"><i class="fontello icon-right-circled" :class="{'disabled':(end===length-1),'control':!(end===length-1)}"></i></span>
        </div>
    </div >
  </section>
</template>

<script>
import Resource from '~/components/default/Resources/Resource'

export default {

  name: 'ResourcesContainer',
  components:{Resource},
  data: function(){
    return {
      isClient: false,
      start: 0,
      end: this.total
    }
  },
  mounted () {
    this.isClient = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  computed:{
    resource: function(){return this.$store.state.resource.docs[this.$i18n.locale]},
    length: function(){return this.$store.state.resource.docs[this.$i18n.locale].length}
  },
  methods:{
    prev: function() {
        if(!this.start)return
        this.start--
        this.end--
     },
     next: async function() {
         if(this.end >= this.$store.state.resource.docs[this.$i18n.locale].length) return

         this.start++
         await setTimeout(()=>{ this.end++}, 250);

      }

  },
  props: {
      filter: {
          type: String
      },
      total: {
          type: Number,
          default: 7
      }
  }
}
</script>
<style scoped>
.controls{
  display: flex;
  align-items: center;
  justify-content: center;
}
.control{
  font-size: 5em;
  color: #ff3e94;
  cursor: pointer;
}
.disabled{
  font-size: 5em;
  color: #eee;
  cursor: not-allowed;
}
.resources{
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
.list-complete-item {
  transition: all 250ms;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

</style>

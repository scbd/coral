<template>
  <div class="card" >
    <a :href="url" target="_blank" rel="noopener">
      <div class="card-content" >
        <div class="content">

          <span class="title is-size-6"  >{{title}}</span><br><br>
          <!-- <p >{{trunc}}</p> -->
          <span class="tag is-pulled-right">{{index}} of {{total}}</span>
          <br>
        </div>

      </div>
    </a>
  </div>
</template>

<script>


export default {
  name: 'Resource',
  props: {
      title: {
          type: String,
          default: 'example title'
      },
      description: {
          type: String,
          default: ' '
      },
      url: {
          type: String
      },
      index: {
          type: Number
      },
      total: {
          type: Number
      }
  },
  computed:{
    trunc:function(){
      if (this.description <= 100) return this.description;
      let tcText = this.description.slice(0, 200)
      return tcText + ' ...'
    }
  }
  // filters:{
  //   //from https://github.com/imcvampire/vue-truncate-filter
  //   truncate: function (text, length, clamp){
  //     clamp = clamp || '...';
  //     length = length || 30;
  //
  //     if (text.length <= length) return text;
  //
  //     var tcText = text.slice(0, length - clamp.length);
  //     var last = tcText.length - 1;
  //
  //
  //     while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;
  //
  //     // Fix for case when text dont have any `space`
  //     last = last || length - clamp.length;
  //
  //     tcText =  tcText.slice(0, last);
  //
  //     return tcText + clamp;
  //   }
  //}
}

</script>
<style scoped>
  .card{
    cursor: pointer;
    background-color: #00405c;
    color: #ffffff;
    border-radius: 20px 20px 20px 20px;
    position:relative;
  }
  .card a{
    color:#ffffff;
  }
  .card .title{
    color: #ffffff;
  }
  .target{
    width:40px;
    display:inline-block;
    margin: 5px 5px 5px 5px;
  }
  .tag{
    position:absolute;
    bottom:3px;
    right:45%;
  }
</style>

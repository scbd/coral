<template>
<section>
    <div class="container">
        <div class="columns ">
            <div class="column"> name</div>
            <div class="column is-10">
                <nav class="level" style="height:36px;margin:0;">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <p>
                                &nbsp;
                            </p>
                        </div>

                    </div>

                    <!-- Right side -->
                    <div class="level-right">
                        <p class="level-item">
                            <a class="fb-like" data-href="https://www.facebook.com/CristianaPascaPalmer/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></a>
                        </p>
                        <p class="level-item">

                            <a style="" class="twitter-follow-button" href="https://twitter.com/CristianaPascaP" data-size="small" data-show-count="false" data-show-screen-name="false"></a>

                        </p>
                    </div>
                </nav>
                <nav class="level" style="height:36px;margin:0;">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <p>
                                &nbsp;
                            </p>
                        </div>

                    </div>

                    <!-- Right side -->
                    <div class="level-right">
                        <p class="level-item">
                            menu1
                        </p>
                        <p class="level-item">
                            <a>
                                menu2
                            </a>
                        </p>
                    </div>
                </nav>
            </div>
        </div>
    </div>

</section>
</template>

<script>

export default {
  name: 'EsHeaderBar',
  // components: {me, locale},
  data () {
    // this.$store.commit('SECURIZE', ['admin','root'])
    return {
      me: this.$store.state.me
    }
  },
  computed: {
    locale: function () {
      if (this.$store.state.locale.locale !== 'en') { return '/' + this.$store.state.locale.locale }
      return ''
    }
  }
}
</script>
<style scoped>

.cbd-menu{
  color:#009B48;
  font-size: 14px;
}
.cbd-menu:hover{
  color:#ffffff;
  background-color: #009B48 !important;
  border-top-left-radius:7px;
  border-top-right-radius:7px;
  font-size: 14px;
}
.bottom-border {
  border-bottom: 1px solid rgb(231, 231, 231);
}
.debug {
  border: 1px solid red;
}

</style>

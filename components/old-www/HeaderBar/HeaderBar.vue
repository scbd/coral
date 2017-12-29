<template>
<section>
    <div class="container navbar-fixed bottom-border">
        <div class="columns ">
            <div class="column"> <a href="https://www.cbd.int">
        <img src="~/assets/images/logo/cbd-logo-green-en.svg" alt="UN Biodiversity / Secretariat of the Convention on Biological Diversity Logo" width="185" height="70"></img>
      </a></div>
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

                            <me/>



                                <locale/>

                    </div>
                </nav>
                <nav class="navbar is-transparent">

                    <div class="navbar-menu">

                        <div class="navbar-end">
                          <a class="navbar-item cbd-menu"> The Convention </a>
                          <a class="navbar-item cbd-menu">Cartagena Protocol</a>
                          <a class="navbar-item cbd-menu">Nagoya Protocol</a>
                          <a class="navbar-item cbd-menu">Programmes</a>
                          <a class="navbar-item cbd-menu">Information</a>
                          <a class="navbar-item cbd-menu">Secretariat</a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>

</section>
</template>

<script>
// import me from '~/components/generic/Me.vue'
// import locale from '~/components/generic/Locale.vue'
export default {
  name: 'HeaderBar',
  // components: {me, locale},
  data () {
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

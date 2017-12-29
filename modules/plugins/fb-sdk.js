import Vue from 'vue'
export default ({ app: {isClient} }) => {
  let vueFb = {}
  if (isClient) {
    vueFb.install = function install (Vue, options) {
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) { return }
        js = d.createElement(s)
        js.id = id
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))

      window.fbAsyncInit = function onSDKInit () {
        FB.init(options)
        FB.AppEvents.logPageView()
        Vue.FB = FB
        window.dispatchEvent(new Event('fb-sdk-ready'))
      }
      Vue.FB = undefined
    }

    Vue.use(vueFb, {
      appId: '168158870409056',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.10',
      cookie: true
    })
  }
}

//============================================================
//
//============================================================
export default  ({ app: { router, store } }) => {

  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');


  ga('create', 'UA-1996573-1', 'auto')


    // if ( window.addEventListener ) {
  	// 	window.addEventListener('error', function(e) {
  	// 		if ( e.lineno != 0 ) {
  	// 			ga('send', 'event', 'Error', 'JavaScript Error', e.message + ' in: ' + e.filename + ' on line ' + e.lineno);
  	// 			ga('send', 'exception', e.message, false);
  	// 		}
  	// 	});
  	// }
if(router)
    router.afterEach((to, from) => {

        if (!window['ga']) {
          console.warn('google analytics is not available')
          return
        }
        const settings = Object.assign({}, routeOption('analytics', from, to, store), to.meta && to.meta.analytics)


        if (store.state.me._id)
          ga('set', 'userId', store.state.me._id);

        ga('set', 'page', to.fullPath)
        ga('send', 'pageview')
        Object.keys(settings).forEach(key => {
            ga('set', key, settings[key])
        })

    })
    //============================================================
    //
    //============================================================
    function routeOption(key, from, to, store) {
        let matched = to.matched[0]
        if(!matched) return
        let matchedComponent = matched.components.default
        return componentOption(matchedComponent, key, from, to, store)
    }
    //============================================================
    //
    //============================================================
    function componentOption(component, key, ...args) {
        if (!component || !component.options || !component.options[key])
            return {}

        let option = component.options[key]
        if (typeof option === 'function')
            option = option(...args)
        return option
    }
}
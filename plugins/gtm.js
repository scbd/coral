//============================================================
//
//============================================================
export default ({ app:{router,head} }) => {


  let id = 'GTM-KWV4WJM';
  if (process.env.STACK === 'production')
    id='GTM-P879CL8';
  (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', id);


//
//
//
//     head.script.push({
//       src: 'https://www.googletagmanager.com/gtm.js?id=GTM-KWV4WJM&l=dataLayer',
//       async: true
//     })
// console.log(head.script);
    if(router)
      router.afterEach((to, from) => {
        window['dataLayer'].push(to.gtm || {pageType: 'PageView', pageUrl: to.fullPath})
    })
}
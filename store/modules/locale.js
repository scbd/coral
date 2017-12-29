import cookie   from '~/modules/cookie'
import Vue from 'vue'


const state = {
      locales: ['en','es', 'fr','ru','ar','zh'],
      locale: 'en',
      pageMessages:{},
      showMobileFlag:false
}

// getters
const getters = {

}

// actions
const actions = {
    setLocale: setLocale
}

// mutations
const mutations = {
    setLocale: setLocaleMutation,
    setPageMessage: setPageMessageMutation,
    setMobileShow:setMobileShowMutation
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}

//============================================================
//
//============================================================
function setLocale ({app,state,commit},locale){
    try {

        if(!locale)locale='en';

        cookie.setItem('locale',locale,Infinity,'/')
        commit('setLocale',locale)
        if(app && app.i18n)
          app.i18n.locale = locale;

        // axios.defaults.headers.common['Accept-Language'] = lang
        // document.querySelector('html').setAttribute('lang', lang)
    } catch (e){
        // commit('feedback/danger',{
        //     title:'Not Found',
        //     description:'The authentication service is not found'
        // },{ root: true })
        console.log(e)
    }

}

//============================================================
//
//============================================================
function setLocaleMutation (state,locale){

    if(locale && locale!=='false')
      Vue.set(state,'locale',locale);
    else
      Vue.set(state,'locale','en');
}
//============================================================
//
//============================================================
function setMobileShowMutation (state,show){
      Vue.set(state,'showMobileFlag',show);
}
//============================================================
//
//============================================================
function setPageMessageMutation (state,payload){
      if(!payload.messages || !payload.page) throw new Error('Cannot pass empty data to $store.locale.setPageMessageMutation')
      if(!state.pageMessages[payload.page])
        Vue.set(state.pageMessages,payload.page,{});

        for (var locale in payload.messages) 
          Vue.set(state.pageMessages[payload.page],locale,payload.messages[locale]);

}

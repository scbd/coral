import cookie   from '~/modules/cookie'
import Vue from 'vue'


const state = {
      locales: ['en','es', 'fr','ru','ar','zh'],
      locale: 'en'
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
    setI18nLocale:setI18nLocaleMutation
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

        app.i18n.locale = locale;
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
function setI18nLocaleMutation (state,locale){

    if(locale && locale!=='false')
      Vue.set(state.i18n,'locale',locale);
    else
      Vue.set(state.i18n,'locale','en');
}




import Vue from 'vue'

const state = {
      baseUrl:process.env.baseUrl
}

// mutations
const mutations = {
    setBaseUrl: setBaseUrlMutation
}

export default {
  namespaced: true,
  state,
  mutations
}

//============================================================
//
//============================================================
function setBaseUrlMutation (state,baseUrl){
    Vue.set(state,'baseUrl',baseUrl)
}

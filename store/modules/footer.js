import Vue from 'vue'


const state = {
      isHiddenAssotiation:true,
      isHiddenSitemap:true,
      isHiddenContact:true
}

// getters
const getters = {

}

// mutations
const mutations = {
    setAssotiation: setAssotiation,
    setContact: setContact,
    setSitemap: setSitemap
}

export default {
  namespaced: true,
  getters,
  state,
  mutations
}

//============================================================
//
//============================================================
function setAssotiation (state,show){
      Vue.set(state,'isHiddenAssotiation',show);
}
//============================================================
//
//============================================================
function setContact (state,show){
      Vue.set(state,'isHiddenContact',show);
}
//============================================================
//
//============================================================
function setSitemap (state,show){
      Vue.set(state,'isHiddenSitemap',show);
}

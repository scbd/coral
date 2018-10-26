import Vue from 'vue'


const state = {
      showMobileFlag:false,
      showDesktopFlag:false
}


// mutations
const mutations = {
    setMobileShow:setMobileShowMutation,
    setDesktopShow:setDesktopShowMutation
}

export default {
  namespaced: true,
  mutations,
  state
}

//============================================================
//
//============================================================
function setMobileShowMutation (state,show){
      Vue.set(state,'showMobileFlag',show);
}
function setDesktopShowMutation (state,show){
      Vue.set(state,'showDesktopFlag',show);
}

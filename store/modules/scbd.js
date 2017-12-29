import cookie   from '~/modules/cookie'
import Vue from 'vue'


const state = {
      showMobileFlag:false
}


// mutations
const mutations = {
    setMobileShow:setMobileShowMutation
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

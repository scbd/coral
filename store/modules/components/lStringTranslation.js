import Vue from 'vue'
import cookie from '~/modules/cookie'

var state = {
  locales: ['en']
}

const actions = {
  setLocale: setLocale
}

const mutations = {
  setLocale: setLocaleMutation
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

// ============================================================
//
// ============================================================

function setLocale ({app, state, commit}, locale) {
  try {
    let locales = JSON.parse(JSON.stringify(state.locales))

    if (~locales.indexOf(locale)) { locales.splice(locales.indexOf(locale), 1) } else { locales.push(locale) }

    cookie.setItem('lSTlocale', JSON.stringify(locales), Infinity, '/')
    commit('setLocale', locales)
  } catch (e) {
    // commit('feedback/danger',{
    //     title:'Not Found',
    //     description:'The authentication service is not found'
    // },{ root: true })
    console.log(e)
  }
}

// ============================================================
//
// ============================================================
function setLocaleMutation (state, locales) {
  if (Array.isArray(locales)) { Vue.set(state, 'locales', locales) }
}

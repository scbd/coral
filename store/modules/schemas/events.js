import Vue    from 'vue'
import api    from '~/modules/api'
import { DateTime }  from 'luxon'

var state = {
  docs: {en:[],fr:[],ru:[],ar:[],zh:[],es:[]},
  pin: false
}

const actions = {
  get: getActions,
  getAction: getAction
}

const getters = {
  getByIdentifier: getByIdentifier,
  getThisMonth:getThisMonth,
  getHighlight:getHighlight,
  getHighlights:getHighlights
}
const mutations = {
  set: eventsMutation,
  setPin: pinMutation
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

//============================================================
//
//============================================================
function getAction ({state, commit},data){
  let action = data ? getByIdentifier(state,data) : {title:'Disclaimer', description:'The designations employed and the presentation of material in this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or area or of its authorities, or concerning the delimitation of its frontiers or boundaries.Upon its Approval of the Nagoya Protocol on Access and Benefit Sharing, the Government of Denmark notified the Secretary-General that the Protocol shall not apply in respect of Greenland and the Faroe Islands.', disclaimer:true}

  if(action)
    commit('setPin',action)
}
//============================================================
//
//============================================================
async function getActions ({state,dispatch,commit,rootState},data){
    let response='';
    let locale = rootState.locale.locale

    let queryParameters = {
        'q': '(schema_s:event) AND (thematicArea_ss:F0514ED7-D80F-4CF7-813A-36D46C82E181) AND onlineEvent_b:false',
        'sort': 'createdDate_dt desc',
        'fl': `schema_s,identifier_s,title_${locale.toUpperCase()}_t,description_${locale.toUpperCase()}_t,country_${locale.toUpperCase()}_t,city_${locale.toUpperCase()}_t,url_ss,logo_s,createdDate_dt,startDate_dt,lat_d,lng_d, cover_C_s`,
        'wt': 'json',
        'rows':10000
    }

    try {

        response = await api.ax.get('https://api.cbd.int/api/v2013/index/select', {'params': queryParameters})

        switch(response.status){
            case 200:
                let payload = {}
                payload.locale = locale
                payload.docs = response.data.response.docs
                commit('set',payload)
            break;
            default:
                commit('feedback/danger',{
                    title:'Unkown Error Occured default',
                    description:'An unkown error occured.'
                },{ root: true })
            break
        }

    } catch (e){
      switch(e.status){

          case 401:
              commit('feedback/warn',{
                  title:'Not Authorized',
                  description:'Your email and/or password are incorrect.'
              },{ root: true })
          break;
          case 404:
              commit('feedback/danger',{
                  title:'Not Found',
                  description:'The authentication service is not found'
              },{ root: true })
          break;
          case 400:
              commit('feedback/danger',{
                  title:'Bad Request',
                  description:'The request to the authentication service is incorrect.'
              },{ root: true })
          break;
          default:
              commit('feedback/danger',{
                  title:'Unkown Error Occured default',
                  description:'An unkown error occured.'
              },{ root: true })
          break
      }
        console.log(e)
    }
}

//============================================================
//
//============================================================
function eventsMutation (state,payLoad){
    let locale = payLoad.locale
    let docs = payLoad.docs
    state.docs[locale] = docs || []

    for (let index in state.docs[locale])
      state.docs[locale][index] = normalize(state.docs[locale][index], locale)

    Vue.set(state.docs,locale,removeDuplicates(state.docs[locale], 'identifier_s'))
}

//============================================================
//
//============================================================
function pinMutation (state,payLoad){
    Vue.set(state,'pin',payLoad)
}

//============================================================
//
//============================================================
function getByIdentifier (state,identifier) {

  let found
  for (let locale in state.docs) {
    found = state.docs[locale].find(doc => doc.identifier_s === identifier)
    if(found) return found
  }
  return false
}

//============================================================
//
//============================================================
function getHighlight (state) {
  return (locale) => {
    let length = state.docs[locale].length-1
    let index = Math.floor(Math.random() * (length - 0 + 1));

    return normalize (state.docs[locale][index], locale)
  }
}
//============================================================
//
//============================================================
function getHighlights (state) {
  return (locale) => {

    let slice = state.docs[locale].slice(0,4)
    for (var i = 0; i < slice.length; i++) {
      slice[i] = normalize (slice[i], locale)
    }

    return slice
  }
}

//============================================================
//
//============================================================
function normalize (doc, locale) {

    for (let prop in doc) {
      let propCopy = prop
      // let locPattern = '_'+locale.toUpperCase()+'_'

      if(~prop.indexOf('_')) {
        propCopy = propCopy.substring(0,prop.indexOf('_'))
        doc[propCopy] = doc[prop]

      }
    }
    if(doc.cover)doc.cover = JSON.parse(doc.cover)
    return doc
}

//============================================================
//
//============================================================
function getThisMonth (state) {
  let count = 0
  return (locale) => {
    for (let doc of state.docs[locale]) {
      let diff = DateTime.fromISO(doc.createdDate_dt).diff(DateTime.local(),'months').toObject()
      if( diff.months < 1 )
        count++
    }
    return count
  }
}

function removeDuplicates(arr, key) {
    if (!(arr instanceof Array) || (key && typeof key !== 'string')) {
        return false;
    }

    if (key && typeof key === 'string') {
        return arr.filter((obj, index, arr) => {
            return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === index;
        });

    } else {
        return arr.filter(function(item, index, arr) {
            return arr.indexOf(item) == index;
        });
    }
}

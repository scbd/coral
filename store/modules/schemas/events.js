import Vue    from 'vue'
import api    from '~/modules/api'
import { DateTime }  from 'luxon'

var state = {
  docs: {en:[],fr:[],ru:[],ar:[],zh:[],es:[]}
}

const actions = {
  get: getAction
}

const getters = {
  getBiIdentifier: getByIdentifier,
  getThisMonth:getThisMonth,
  getHighlight:getHighlight
}
const mutations = {
  set: eventsMutation
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
async function getAction ({state,dispatch,commit,rootState},data){
    let response='';
    let locale = rootState.locale.locale

    let queryParameters = {
        'q': 'realm_ss:chm AND (schema_s:event) AND (aichiTarget_ss:AICHI-TARGET-10)',
        'sort': 'createdDate_dt desc',
        'fl': `identifier_s,title_${locale.toUpperCase()}_t,description_${locale.toUpperCase()}_t,url_ss,schema_${locale.toUpperCase()}_t,logo_s,createdDate_dt,startDate_dt,lat_d,lng_d`,
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

    } catch (e){
        commit('feedback/danger',{
            title:'Unkown Error Occured in catch',
            description:'An unkown error occured.',
            e:e
        },{ root: true })
        console.log(e)
    }
}

//============================================================
//
//============================================================
function eventsMutation (state,payLoad){
    let locale = payLoad.locale
    let docs = payLoad.docs
    state.docs[locale] = state.docs[locale].concat(docs)
    Vue.set(state.docs,locale,removeDuplicates(state.docs[locale], 'identifier_s'))
}

//============================================================
//
//============================================================
function getByIdentifier (state) {
  return (identifier) => { return state.docs.find(doc => doc.identifier_s === identifier) }
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
function normalize (doc, locale) {

    for (let prop in doc) {
      let propCopy = prop
      let locPattern = '_'+locale.toUpperCase()+'_'

      if(~prop.indexOf(locPattern)) {
        propCopy = propCopy.replace(locPattern,'_')
        doc[propCopy] = doc[prop]
        delete(doc[prop])
      }
    }

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

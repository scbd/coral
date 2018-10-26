import Vue    from 'vue'
import api    from '~/modules/api'

var state = {
  docs: {en:[],fr:[],ru:[],ar:[],zh:[],es:[]},
  // edDocs:{en:[],fr:[],ru:[],ar:[],zh:[],es:[]},
  // cbdDocs:{en:[],fr:[],ru:[],ar:[],zh:[],es:[]},
  locale:'en',
  edMaterials:[
    '0CA88602-7281-0EBC-CF92-B6E085145173',
    '11C1EC87-ACCB-8B8A-9AEE-F1D63510FDB5',
    '422519CE-2FE5-E5CF-DD7D-66BC8ADB9073',
    '0C5AA1D9-EEE5-05A3-1096-963A7A37D4F1',
    'B9130D14-CD29-2BFA-CC53-DCCFE7937758',
    'A8823BA2-2FD5-CF6D-EAD9-2E152BFEC9B9'
  ],
  scdbMaterials:['226C2B5C-4A21-B065-3714-997A10D98B15',
                  'A95C31F7-1897-5EC7-FC04-669D05FC3855',
                  '4A04D1AE-A394-0B6C-56D0-84A1308D7F37',
                  '5F92F728-5197-C20B-C888-5C48966BA9F9',
                  'AA555853-BE32-9AF7-D007-99FA1C77A107',
                  '3F20A40B-2448-A6FE-C975-02EE5844BBE3',
                  '5540F0D7-322C-873F-9979-9B9A75135E1E',
                  '61DED9DE-1982-6173-C234-85862F6E3D3B',
                  '24971E7F-DA65-1A0A-9E33-054E1003B987',
                  '2FF2CA9B-F994-A1C0-298F-3BC05A878700']
}

const actions = {
  get: getResource
}

const getters = {
  getYears: getYears,
  getEd:getEdMaterials,
  getCBD:getCBDMaterials
}

const mutations = {
  set: setMutation,
  setLocale: setLocaleMutation,
  setEd: setEdMutation,
  setCBD: setCBDMutation
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
async function getResource({state,dispatch,commit,rootState},data){

    let response='';

    let locale = rootState.locale.locale

    commit('setLocale', locale)

    let queryParameters = {
        'q': generateQuery(state,locale,data || {}),
        'sort': 'createdDate_dt desc',
        'fl': `identifier_s,title_${locale.toUpperCase()}_t,summary_${locale.toUpperCase()}_t,description_${locale.toUpperCase()}_t,url_ss,publicationYear_i,createdDate_dt`,
        'wt': 'json',
        'rows':10000
    }

    response = await api.ax.get('https://api.cbd.int/api/v2013/index/select', {'params': queryParameters})

    if(response.status != 200)
      responseHandeler (commit, response)

    let payload = {}
    payload.locale = locale
    payload.docs = response.data.response.docs
    commit('set',payload)
}

//============================================================
//
//============================================================
function generateQuery(state,locale,payload){
  return generateIdQuery(state,payload) + generateTextQuery(locale, payload) + generateYearQuery(payload)
}
//endDate_dt:[2017-01-01T05:00:00.000Z TO * ]
//publicationYear_i

//============================================================
//
//============================================================
function generateYearQuery(payload){
  if(payload.year)
    return ` AND (publicationYear_i:${payload.year})`
  return ''
}

//============================================================
//
//============================================================
function generateTextQuery(locale, payload){
  if(payload.search)
    return ` AND (title_${locale.toUpperCase()}_t:"${payload.search}*" OR description_${locale.toUpperCase()}__t:"${payload.search}*" OR text_${locale.toUpperCase()}_txt:"${payload.search}*")`
  return ''
}

//============================================================
//
//============================================================
function generateIdQuery(state,payload){
  let ids = []
  if((payload.isEd && payload.isCBD) || (!payload.isEd && !payload.isCBD))
    ids = state.edMaterials.concat(state.scdbMaterials)
  else if (payload.isEd && !payload.isCBD)
    ids = state.edMaterials
  else ids = state.scdbMaterials

  return idQuery(ids)
}

//============================================================
//
//============================================================
function idQuery(edIds){
    return '(identifier_s:'+edIds.join(' OR identifier_s:')+')'
}

//============================================================
//
//============================================================
function getEdMaterials(state, getters, rootState){

    let locale = rootState.locale.locale

    return state.docs[locale].filter((obj)=>{ if(isEd(obj)) return obj})

    function isEd(obj){
      if(!state.edMaterials) return false
      return state.edMaterials.find((value)=>{return value === obj.identifier_s}) || false
    }
}

//============================================================
//
//============================================================
function getCBDMaterials(state, getters, rootState){

    let locale = rootState.locale.locale
    return state.docs[locale].filter((obj)=>{ if(isCBD(obj)) return obj})

    function isCBD(obj){
      if(!state.scdbMaterials) return false

      return state.scdbMaterials.find((value)=>{return value === obj.identifier_s}) || false
    }
}

//============================================================
//
//============================================================
function responseHandeler (commit, response){
  try {

      switch(response.status){
          case 400:
              commit('feedback/danger',{
                  title:'Bad Request',
                  description:'The request to the index service is incorrect.'
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
function setLocaleMutation (state,payLoad){

    state.locale = payLoad
}
//============================================================
//
//============================================================
function setMutation (state,payLoad){
    let locale = payLoad.locale
    let docs = payLoad.docs
    state.docs[locale] = docs
    for (let variable of state.docs[locale]) {
        variable = normalize(variable, locale)
        variable = setResourceType(variable, state)
    }
    Vue.set(state.docs,locale,removeDuplicates(state.docs[locale], 'identifier_s'))
}
//============================================================
//
//============================================================
function setEdMutation (state,payLoad){
    let locale = payLoad.locale
    let docs = payLoad.docs
    state.edDocs[locale] = state.edDocs[locale].concat(docs)
    for (let variable of state.edDocs[locale]) {
        variable = normalize(variable, locale)
    }
    Vue.set(state.edDocs,locale,removeDuplicates(state.edDocs[locale], 'identifier_s'))
}
//============================================================
//
//============================================================
function setCBDMutation (state,payLoad){
    let locale = payLoad.locale
    let docs = payLoad.docs
    state.cbdDocs[locale] = state.cbdDocs[locale].concat(docs)
    for (let variable of state.cbdDocs[locale]) {
        variable = normalize(variable, locale)
    }
    Vue.set(state.cbdDocs,locale,removeDuplicates(state.cbdDocs[locale], 'identifier_s'))
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
function getYears (state) {
  let years = []
  for (let doc of state.docs[state.locale])
    years.push(doc.publicationYear_i)

  return [...new Set(years)]
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
function setResourceType(doc, state) {

    if(~state.scdbMaterials.indexOf(doc.identifier_s))
      doc.resourceType='scbd'

    if(~state.edMaterials.indexOf(doc.identifier_s))
      doc.resourceType='ed'
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

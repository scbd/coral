import Vue    from 'vue'
import api    from '~/modules/api'

var state = {
  docs: {en:[],fr:[],ru:[],ar:[],zh:[],es:[]},
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
  get: getResource,
  getEd:getEdMaterials
}

const getters = {
  getByIdentifier: getByIdentifier
  // getFirstYear: getFirstYear
}
const mutations = {
  set: setMutation
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

    let queryParameters = {
        'q': 'realm_ss:chm AND (schema_s:resource) AND (aichiTarget_ss:AICHI-TARGET-10)',
        'sort': 'createdDate_dt desc',
        'fl': `identifier_s,title_${locale.toUpperCase()}_t,summary_${locale.toUpperCase()}_t,description_${locale.toUpperCase()}_t,url_ss,createdDate_dt,startDate_dt`,
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
function edQuery(edIds){
    return '('+edIds.join(' OR ')+')'
}
//============================================================
//
//============================================================
async function getEdMaterials({state,dispatch,commit,rootState},data){

    let response='';
    let locale = rootState.locale.locale
    console.log(edQuery(state.edMaterials))
    let queryParameters = {
        'q': 'realm_ss:chm AND (schema_s:resource)',
        'sort': 'createdDate_dt desc',
        'fl': `identifier_s,title_${locale.toUpperCase()}_t,summary_${locale.toUpperCase()}_t,description_${locale.toUpperCase()}_t,url_ss,createdDate_dt,startDate_dt`,
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
function setMutation (state,payLoad){
    let locale = payLoad.locale
    let docs = payLoad.docs
    state.docs[locale] = state.docs[locale].concat(docs)
    for (let variable of state.docs[locale]) {
        variable = normalize(variable, locale)
    }
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
function getFirstYear (state) {
  return (identifier) => { return state.docs.find(doc => doc.identifier_s === identifier) }
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

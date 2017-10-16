
import api      from '~/modules/api'
import cookie   from '~/modules/cookie'
import Vue from 'vue'

let error;
// initial state
const state = {
      token:false,
      isAuthenticated: false
}

// getters
const getters = {

}

// actions
const actions = {
    setToken: setTokenAction,
    login:loginAction,
    me:meAction,
    logout:logoutAction
}

// mutations
const mutations = {
    setToken: setTokenMutation,
    me: meMutation
}
//============================================================
//
//============================================================
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
// //============================================================
// //
// //============================================================
// function getMe (state){
//     return Vue.get(state,'me')
// }
//============================================================
//
//============================================================
async function meAction ({state,commit},email){
    let meResponce;
    // if(!state.token) return;

    try {

        if(!state.token) return;

        if(email && state.token)
            meResponce = await api.ax.get('/auth/me/'+email)
        else if(state.token)
            meResponce = await api.ax.get('/auth/me') // server start no email top really not needed now

//TODO handle non 200

        if(meResponce.data.me && !meResponce.data.me.anonymous)
            commit('me',meResponce.data.me)


    } catch (e){

        console.log(e)
    }

}


//============================================================
//
//============================================================
async function loginAction ({state,dispatch,commit},data){
let loginResponce='';
    if(!data.email || !data.pass) {
        commit('feedback/warn',{
            title:'Missing Data',
            description:'Your email and/or password are were not supplied in order to authenticate.'
        },{ root: true })
        return state.error
    }
    try {

        loginResponce = await api.ax.post('/auth/login', {'email': data.email,'pass': data.pass})

        switch(loginResponce.status){
            case 200:
                await dispatch('setToken',loginResponce.data.token)
                await dispatch('me',data.email)
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
function setTokenAction ({commit},token){
    commit('setToken',token)
    cookie.setItem('token',token,Infinity,'/')
    api.ax=api.create(token)
    return api.ax
}

//============================================================
//
//============================================================
function setTokenMutation (state,token){

    if(token && token!=='false')
      Vue.set(state,'token',token);
    else
      Vue.set(state,'token',false);
}

//============================================================
//
//============================================================
async function logoutAction({state,dispatch,commit}){
   await dispatch('setToken',false)
   await commit('me',false)
}

//============================================================
//
//============================================================
function meMutation (state,me){

  if(me){
    Vue.set(state,'_id',me._id);
    Vue.set(state,'firstName',me.firstName);
    Vue.set(state,'lastName',me.lastName);
    Vue.set(state,'email',me.email);
    Vue.set(state,'mobile',me.firstName);
    Vue.set(state,'verified',me.verified);
    Vue.set(state,'roles',me.roles);
    Vue.set(state,'isAuthenticated',true);
  }
  else {
    Vue.set(state,'_id',undefined);
    Vue.set(state,'firstName',false);
    Vue.set(state,'lastName',false);
    Vue.set(state,'email',false);
    Vue.set(state,'mobile',false);
    Vue.set(state,'verified',false);
    Vue.set(state,'roles',false);
    Vue.set(state,'isAuthenticated',false);
    Vue.set(state,'token',true);

  }

}


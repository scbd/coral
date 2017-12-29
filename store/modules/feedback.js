// initial state
const state = {
      feedback:[]
}

// getters
const getters = {
    pop:pop
}

// mutations
const mutations = {
    add: add,
    info: addInfo,
    warn: addWarn,
    danger:addDanger,
    success:addSuccess,
    clear:clear,
    // '401':notAuthorizedMutation,
    // '404':notFoundMutation,
    // '400':badRequestMutation,
    // '502':badGatewayMutation,
    '500':internalServerMutation
}

//============================================================
//
//============================================================
export default {
  namespaced: true,
  state,
  getters,
  mutations
}

//============================================================
//
//============================================================
function internalServerMutation(state,data){
    data.type='success'
    state.feedback.push(data)
}
//============================================================
// data.type =info, warn ...
// data.title  ='title of message'
// data.desc = 'description of message'
// data.img  = url
// data.icon = fa icon classes to be applied
//============================================================
function add (state,data){
    state.feedback[data.type].push(data)
}

//============================================================
//
//============================================================
function addInfo (state,data){
    data.type='info'
    state.feedback.push(data)
}

//============================================================
//
//============================================================
function addWarn(state,data){
    data.type='warning'
    state.feedback.push(data)
}

//============================================================
//
//============================================================
function addDanger(state,data){
    data.type='danger'
    state.feedback.push(data)
}

//============================================================
//
//============================================================
function addSuccess(state,data){
    data.type='success'
    state.feedback.push(data)
}

//============================================================
//
//============================================================
function pop (state){
        return state.feedback[state.feedback.length-1]
}

//============================================================
//
//============================================================
function clear (state){
    for(let key in state.feedback){
        state.feedback=[]
    }
}

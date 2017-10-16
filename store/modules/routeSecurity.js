// ============================================================
//
// ============================================================
// initial state
const state = {
  route: {
    '/admin': {
      securityRoles: ['admin', 'root', 'user']
    }

  }
}

// getters
const getters = {
  routeRoles: routeRoleGetter
}

// ============================================================
//
// ============================================================
export default {
  namespaced: true,
  state,
  getters
}

// ============================================================
//
// ============================================================
function routeRoleGetter (state, getters, rootState) {
  if (rootState.route && state.route[rootState.route.path]) { return state.route[rootState.route.path].securityRoles } else { return false }
}

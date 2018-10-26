
export default function ({ app, store }) {
  sync(store, app.router)
}

// ============================================================
//
// ============================================================
function sync (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED': function (state, transition) {
        // console.log(transition);
        if (transition.to && transition.to.path.indexOf('bootstrap.css.map') == -1) { store.state[moduleName] = cloneRoute(transition.to, transition.from) }
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // console.log(router.options.routes);
  // store.commit('sideBar/setMenu',{menu:router.options.routes,prefix:'/:lang/admin'})

  // sync store on router navigation
  router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit(moduleName + '/ROUTE_CHANGED', { to: to, from: from })
  })
}

// ============================================================
//
// ============================================================
function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) { clone.from = cloneRoute(from) }

  return Object.freeze(clone)
}

// ============================================================
//
// ============================================================
function stripPaths (menu, prefix) {
  let menuClone = menu.slice()
  let newMenu = []
  let l = menuClone.length
  for (let i = 0; i < l; i++) {
    if (~menuClone[i].path.indexOf(prefix)) { newMenu.push(menuClone[i]) }
  }

  return newMenu
}

// ============================================================
//
// ============================================================
function pathsort (paths, sep) {
  sep = sep || '/'

  return paths.map(function (el) {
    return el.path.split(sep)
  }).sort(sorter).map(function (el) {
    return el.join(sep)
  })
}

// ============================================================
//
// ============================================================
function sorter (a, b) {
  var l = Math.max(a.length, b.length)
  for (var i = 0; i < l; i += 1) {
    if (!(i in a)) return -1
    if (!(i in b)) return +1
    if (a[i].toUpperCase() > b[i].toUpperCase()) return +1
    if (a[i].toUpperCase() < b[i].toUpperCase()) return -1
    if (a.length < b.length) return -1
    if (a.length > b.length) return +1
  }
}

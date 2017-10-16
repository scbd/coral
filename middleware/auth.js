import cookie from '~/modules/cookie'
import api from '~/modules/api'
export default async function ({route,store,redirect,req}) {

    store.commit('route/ROUTE_CHANGED', {
        to: route
    });

    let token = cookie.getItem('token', req);

    let me = store.state['me']

  //  if(!api.options.headers)
    if (!token)
       await store.dispatch('me/logout')
    else if(store.state.me && store.state.me.token)
        token = store.state.me.token
    if (token)
        await store.dispatch('me/setToken', token)

    if (token && !me.isAuthenticated)
        await store.dispatch('me/me');

// console.log('======api.options.headers',api.options.headers);
// console.log('======token',token);

    if(api.options.headers && !api.options.headers.token && token)
      api.ax=api.create(token)

    securize () // permit access or redirect

    //============================================================
    //
    //============================================================
    async function securize() {
        let routeRoles = store.getters['routeSecurity/routeRoles']
        let me = store.state.me

        if (!routeRoles) return false

        if (routeRoles && !me.isAuthenticated)
            return redirect('/me/login/' + encodeURIComponent(store.state.route.path));

        if (!sharedRoles(routeRoles, me.roles)) return redirect('/me/login/' + encodeURIComponent(store.state.route.path));


    }

    //============================================================
    //
    //============================================================
    function sharedRoles(routeRoles, meRoles) {

        if (!Array.isArray(meRoles) || meRoles.length === 0) return false;

        for (let i = 0; i < routeRoles.length; i++) {
            for (let j = 0; j < meRoles.length; j++) {
                if (routeRoles.indexOf(meRoles[j]) > -1)
                    return true;
            }
        }
        return false;
    } // sharedRoles
}
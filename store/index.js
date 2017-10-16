import Vuex             from 'vuex'
import me               from './modules/me'
import feedback         from './modules/feedback'
import routeSecurity    from './modules/routeSecurity'
import locale           from './modules/locale'
import sideBar          from './modules/sideBar'

// schemas
import domains          from './modules/schemas/domains'
import roles            from './modules/schemas/roles'
//components
import lStringTranslation    from './modules/components/lStringTranslation'

export default () => {
  return new Vuex.Store({
    strict: true,
    state: {},

    modules: {
        me,
        feedback,
        routeSecurity,
        locale,
        sideBar,
        domains,
        roles,
        lStringTranslation,
    }
  })
}

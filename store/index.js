import Vuex             from 'vuex'
import me               from './modules/me'
import feedback         from './modules/feedback'
import routeSecurity    from './modules/routeSecurity'
import locale           from './modules/locale'
import scbd             from './modules/scbd'
import footer           from './modules/footer'

// schemas

//components
import lStringTranslation    from './modules/components/lStringTranslation'

export default () => {
  return new Vuex.Store({
    strict: false,
    state: {},

    modules: {
        me,
        feedback,
        routeSecurity,
        locale,
        lStringTranslation,
        footer,
        scbd
    }
  })
}

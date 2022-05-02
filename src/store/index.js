import { createStore } from 'vuex'
import headerModule from './modules/headerModule'

export default createStore({
  state() {
    return {}
  },
  modules: {
    headerModule,
  },
})

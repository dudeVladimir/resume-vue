import { createStore } from 'vuex'
import headerModule from './modules/headerModule'
import portfolio from './modules/portfolio.module'
import skill from './modules/skill.card.module'

export default createStore({
  state() {
    return {}
  },
  actions: {
    async feedback(_, payload) {
      const url = 'https://dudkin-vs-default-rtdb.firebaseio.com/feedback.json'
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    },
  },
  modules: {
    headerModule,
    portfolio,
    skill,
  },
})

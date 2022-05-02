export default {
  namespaced: true,
  state() {
    return {
      indexOfText: 0,
      text: '',
      texts: [
        'Привет!',
        'Меня зовут Владимир',
        'Здесь представлена',
        'Основная информация обо мне',
        'Все социальные сети',
        'Практическое применение моих навыков',
        'Спасибо за интерес! :)',
      ],
      headerIsActive: true,
    }
  },
  // getters: {
  //   lengthOfTexts(state) {
  //     return state.texts.length
  //   },
  // },
  mutations: {
    close(state) {
      state.headerIsActive = false
      localStorage.setItem('visited', true)
      state.indexOfText = 0
    },
    indexCounter(state) {
      if (state.indexOfText <= state.texts.length - 1) {
        state.indexOfText++
      } else {
        state.indexOfText = 0
      }
    },
  },
  actions: {
    indexCounterAsync({ commit }, payload) {
      const interval = setInterval(() => {
        commit('indexCounter')
      }, 1500)
      setTimeout(() => {
        clearInterval(interval)
      }, payload * 1500)
      setTimeout(() => {
        commit('close')
      }, payload * 1500 + 2000)
    },
  },
}

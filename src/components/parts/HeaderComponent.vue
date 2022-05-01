<template>
  <header v-if="headerIsActive">
    <div class="container">
      <div class="header-block">{{ texts[indexOfText] }}</div>
      <button
        class="btn"
        v-if="indexOfText <= texts.length - 2"
        @click="indexCounter"
      >
        Дальше
      </button>
      <button class="btn" v-else @click="close">Закрыть</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
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
      ],
      headerIsActive: true,
    }
  },
  methods: {
    close() {
      this.headerIsActive = false
      localStorage.setItem('visited', true)
      this.indexOfText = 0
    },
    indexCounter() {
      if (this.indexOfText <= this.texts.length - 1) {
        this.indexOfText++
      } else {
        this.indexOfText = 0
      }
    },
  },
  computed: {},
  mounted() {
    if (localStorage.visited) {
      this.headerIsActive = false
    } else {
      this.headerIsActive = true
    }
  },
}
</script>

<style></style>

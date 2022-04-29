<template>
  <header>
    <div class="container">
      <div class="header-block">{{ text }}</div>
      <button class="btn">Попустить</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      texts: [
        'Привет!',
        'Здесь представлена основная информация обо мне',
        'Все социальные сети',
        'Навыки и их практическое применение',
      ],
    }
  },
  methods: {},
  computed: {},
}
</script>

<style></style>

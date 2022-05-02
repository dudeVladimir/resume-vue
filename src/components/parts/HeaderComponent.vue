<template>
  <header v-if="$store.state.headerModule.headerIsActive">
    <div class="container">
      <div class="header-block">
        {{
          $store.state.headerModule.texts[$store.state.headerModule.indexOfText]
        }}
        <small>Реализованно через Vuex</small>
      </div>
      <button
        class="btn"
        v-if="
          $store.state.headerModule.indexOfText <=
          $store.state.headerModule.texts.length - 2
        "
        @click="next"
      >
        Дальше
      </button>
      <button class="btn" v-else @click="closeModal">Закрыть</button>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      next: 'headerModule/indexCounter',
      closeModal: 'headerModule/close',
    }),

    ...mapActions({ nextAsync: 'headerModule/indexCounterAsync' }),
  },
  mounted() {
    if (localStorage.visited) {
      this.$store.state.headerModule.headerIsActive = false
    } else {
      this.$store.state.headerModule.headerIsActive = true
    }
    this.nextAsync(this.$store.state.headerModule.texts.length - 1)
  },
}
</script>

<style></style>

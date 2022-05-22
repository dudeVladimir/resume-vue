<template>
  <div class="card" v-if="portfolio.length <= 0">
    <h1>Пока здесь пусто :(</h1>
  </div>
  <div
    class="card portfolio"
    v-for="(item, idx) in portfolio"
    :key="item.url"
    v-else
  >
    <h3>{{ idx + 1 }}. {{ item.title }}</h3>
    <img
      :src="require(`../assets/img/${item.img}`)"
      :alt="item.title"
      class="portfolio-img"
    />
    <div>
      <span>{{ item.description }}</span>
      <div class="portfolio-link">
        <a
          :href="item.url"
          target="_blank"
          class="portfolio-img-link"
          v-if="item.url"
          ><img
            src="../assets/img/link_icon.png"
            alt="link"
            class="portfolio-img"
        /></a>
        <a :href="item.github" target="_blank" class="portfolio-img-link"
          ><img src="../assets/img/github.png" alt="link" class="portfolio-img"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    return {
      portfolio: store.state.portfolio.portfolio,
    }
  },
}
</script>

<style></style>

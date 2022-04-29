<template>
  <!-- <header-component></header-component> -->
  <page-header @opened-menu="shadowWindow"></page-header>
  <div :class="{ shadow: menuIsOpen }">
    <div class="container">
      <base-info></base-info>
      <about-me></about-me>
    </div>
  </div>
  <page-footer></page-footer>
</template>

<script>
import PageFooter from './components/parts/PageFooter.vue'
import HeaderComponent from './components/parts/HeaderComponent.vue'
import PageHeader from './components/parts/PageHeader.vue'
import BaseInfo from './components/parts/BaseInfo.vue'
import AboutMe from './components/parts/AboutMe.vue'

export default {
  data() {
    return { menuIsOpen: false }
  },
  methods: {
    shadowWindow(isOpen) {
      this.menuIsOpen = isOpen
      console.log(isOpen)
    },
  },
  components: { HeaderComponent, PageFooter, PageHeader, BaseInfo, AboutMe },
}
</script>

<style>
.shadow {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>

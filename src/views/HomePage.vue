<template>
  <div :class="{ shadow: menuIsOpen }">
    <base-info></base-info>
    <about-me></about-me>
  </div>
</template>

<script>
import PageFooter from '../components/parts/PageFooter.vue'
import PageHeader from '../components/parts/PageHeader.vue'
import BaseInfo from '../components/parts/BaseInfo.vue'
import AboutMe from '../components/parts/AboutMe.vue'

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
  components: { PageFooter, PageHeader, BaseInfo, AboutMe },
}
</script>

<style>
.shadow {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>

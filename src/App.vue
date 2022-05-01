<template>
  <!-- <header-component></header-component> -->
  <page-header @opened-menu="backdrop"></page-header>
  <div :class="{ 'modal-backdrop': backdropIsEnabled }"></div>
  <div class="container">
    <router-view></router-view>
  </div>
  <page-footer></page-footer>
</template>

<script>
import PageFooter from './components/parts/PageFooter.vue'
import PageHeader from './components/parts/PageHeader.vue'
// import HeaderComponent from './components/parts/HeaderComponent.vue'

export default {
  data() {
    return {
      backdropIsEnabled: false,
    }
  },
  methods: {
    backdrop(menuIsOpen) {
      this.backdropIsEnabled = menuIsOpen
    },
  },
  components: { PageHeader, PageFooter },
}
</script>

<style></style>

<template>
  <div id="mobile-header">
    <div class="header-menu" @click="menu" v-if="menuIsOpen === false">
      <img src="../../assets/img/menu1.png" alt="Меню" id="menu-img" />
      <label for="menu-img">Меню</label>
    </div>
    <div id="opened-menu" v-else>
      <div class="header-menu" @click="menu">
        <img src="../../assets/img/close.png" alt="Меню" id="close" />
        <label for="menu-img">Меню</label>
      </div>
      <div class="menu-btn-block">
        <button class="btn menu-btn">Общая информация</button>
        <button class="btn menu-btn">Портфолио</button>
        <button class="btn menu-btn">Навыки</button>
        <button class="btn menu-btn">GitHub</button>
      </div>
    </div>
  </div>
  <div id="page-header">
    <div class="container page-header">
      <button class="btn">Общая информация</button>
      <button class="btn">Портфолио</button>
      <button class="btn">Навыки</button>
      <button class="btn">GitHub</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['opened-menu'],
  data() {
    return {
      menuIsOpen: false,
    }
  },
  methods: {
    menu() {
      this.menuIsOpen = !this.menuIsOpen
      this.$emit('opened-menu', this.menuIsOpen)
    },
  },
}
</script>

<style scoped>
img {
  height: 30px;
  padding: 5px 20px;
}

label {
  position: relative;
  top: -1px;
  font-size: 1.3rem;
  font-weight: 500;
}

button {
  width: 20%;
  font-weight: 500;
}
</style>

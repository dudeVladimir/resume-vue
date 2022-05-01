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
        <router-link to="/home" class="menu-a" @click="menu"
          >Общая информация</router-link
        >
        <router-link to="/portfolio" class="menu-a" @click="menu"
          >Портфолио</router-link
        >
        <router-link to="/skills" class="menu-a" @click="menu"
          >Навыки</router-link
        >
        <a
          href="https://github.com/dudeVladimir"
          class="menu-a"
          target="__blank"
          >GitHub</a
        >
      </div>
    </div>
  </div>
  <div id="page-header">
    <div class="container page-header">
      <router-link to="/home" class="menu-a">Общая информация</router-link>
      <router-link to="/portfolio" class="menu-a">Портфолио</router-link>
      <router-link to="/skills" class="menu-a">Навыки</router-link>
      <a href="https://github.com/dudeVladimir" class="menu-a" target="__blank"
        >GitHub</a
      >
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

#menu-img {
  width: 60px;
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

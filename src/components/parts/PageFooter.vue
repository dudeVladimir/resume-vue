<template>
  <footer>
    <div class="container footer">
      <div class="footer-column">
        <h3>Навигация</h3>
        <router-link to="/home" class="footer-a">Общая информация</router-link>
        <router-link to="/portfolio" class="footer-a">Портфолио</router-link>
        <router-link to="/skills" class="footer-a">Навыки</router-link>
      </div>
      <div class="footer-column right">
        <h3>Контакты</h3>
        <div>
          <span>dude.vladimir@mail.ru</span>
          <a class="footer-a" href="https://t.me/DudeVladimir">Telegram</a>
          <div id="vk-git">
            <a class="footer-a" href="https://vk.com/dude.vladimir">VK</a>
            <a class="footer-a" href="https://github.com/dudeVladimir"
              >GitHub</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer-column.right > div {
  display: flex;
  flex-direction: column;
}

#vk-git > a {
  margin-left: 10px;
}

.footer-column.right {
  text-align: right;
}

.block-social {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <footer>
    <div class="container footer">
      <div class="footer-column">
        <h3>Навигация</h3>
        <a href="#">Общая информация</a>
        <a href="#">Портфолио</a>
        <a href="#">Навыки</a>
        <a href="#">GitHub</a>
      </div>
      <div class="footer-column right">
        <h3>Контакты</h3>
        <span>e-mail: dude.vladimir@mail.ru</span>
        <div class="block-social">
          <button class="btn">VK</button>
          <button class="btn">Telegram</button>
          <button class="btn">GitHub</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer-column.right {
  text-align: right;
}

.block-social {
  display: flex;
  justify-content: space-between;
}
</style>

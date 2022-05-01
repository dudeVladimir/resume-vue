<template>
  <div class="base-info">
    <img src="../../assets/img/myPhoto.jpg" alt="Фото" />
    <div class="card">
      <div>
        <h2>Frontend developer</h2>
        <h1>Дудкин Владимир Сергеевич</h1>
      </div>
      <div id="base-info-contacts">
        <h2>Контакты</h2>
        <button class="btn">VK</button>
        <button class="btn">Telegram</button>
        <button class="btn">GitHub</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
img {
  margin-right: 10px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
}

button {
  margin: 0 5px;
}
</style>

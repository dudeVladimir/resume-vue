<template>
  <div class="base-info">
    <img src="../../assets/img/myPhoto.jpg" alt="Фото" />
    <div class="card">
      <div>
        <h2>Frontend developer</h2>
        <h1>Дудкин Владимир Сергеевич</h1>
      </div>
      <div id="base-info-contacts">
        <h2>Социальные сети</h2>
        <a href="https://vk.com/dude.vladimir" target="_blank" class="a-img">
          <img class="social-img" src="../../assets/img/vk.png" alt="Фото" />
        </a>
        <a href="https://t.me/DudeVladimir" target="_blank" class="a-img">
          <img class="social-img" src="../../assets/img/teleg.png" alt="Фото" />
        </a>
        <a href="https://github.com/dudeVladimir" target="_blank" class="a-img">
          <img
            class="social-img"
            src="../../assets/img/github.png"
            alt="Фото"
          />
        </a>
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

.a-img {
  margin: 0 5px;
  padding: 5px;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.social-img {
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: 0.25s;
}

.social-img:hover {
  transform: scale(1.1);
}

.social-img:active {
  opacity: 0.7;
}

.card {
  margin: 0;
}
</style>

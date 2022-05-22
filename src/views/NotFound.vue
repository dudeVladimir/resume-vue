<template>
  <div class="card">
    <h1>Такой страницы не существует :(</h1>

    <button class="btn" @click="$router.push('/home')">
      Вернуться на главную
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  align-items: center;
}
</style>

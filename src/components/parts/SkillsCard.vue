<template>
  <div class="card">
    <h3>Skills</h3>
    <div class="skills_another">
      <div class="skill" v-for="skill in skills" :key="skill.title">
        <img
          :src="require(`../../assets/img/${skill.img}`)"
          :alt="skill.title"
        />
        <span
          ><strong>{{ skill.title }}</strong></span
        >
      </div>
    </div>
    <div class="skills_html-css-js">
      <img src="../../assets/img/html-css-js.png" alt="html-css-js" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return { skills: store.state.skill.skills }
  },
}
</script>

<style scoped>
.card {
  margin: 10px 0;
}
h3 {
  text-align: center;
  width: auto;
}
</style>

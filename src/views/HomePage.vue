<template>
  <div :class="{ shadow: menuIsOpen }">
    <base-info></base-info>
    <skills-card></skills-card>
    <about-me></about-me>
    <feedback-form></feedback-form>
  </div>
</template>

<script>
import BaseInfo from '../components/parts/BaseInfo.vue'
import AboutMe from '../components/parts/AboutMe.vue'
import FeedbackForm from '../components/parts/FeedbackForm.vue'
import SkillsCard from '@/components/parts/SkillsCard.vue'

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
  components: { BaseInfo, AboutMe, FeedbackForm, SkillsCard },
}
</script>

<style>
.shadow {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>

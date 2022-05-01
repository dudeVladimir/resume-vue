import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SkillsPage from './views/SkillsPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import NotFound from './views/NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: HomePage,
      alias: '/',
    },
    {
      path: '/portfolio',
      component: PortfolioPage,
    },
    {
      path: '/skills',
      component: SkillsPage,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfesionalView from '@/views/ProfesionalView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:profesionalID',
      name: 'profesionalView',
      component: ProfesionalView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
    }
  ]
})

export default router

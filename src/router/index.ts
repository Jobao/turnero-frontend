import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfesionalView from '@/views/ProfesionalView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ShiftView from '@/views/ShiftView.vue'
import SummaryView from '@/views/SummaryView.vue'

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
      path: '/:profesionalID/service',
      name: 'servicesView',
      component: ServicesView
    },
    {
      path: '/:profesionalID/service/:serviceID',
      name: 'shiftView',
      component: ShiftView
    },
    {
      path: '/:profesionalID/service/:serviceID/summary',
      name: 'summaryView',
      component: SummaryView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
    }
  ]
})

export default router

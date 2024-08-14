import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfesionalView from '@/views/ProfesionalView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ShiftView from '@/views/ShiftView.vue'
import SummaryView from '@/views/SummaryView.vue'
import { useServiciosStore } from '@/stores/serviceStore'

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

router.beforeEach((to, from) => {
  console.log(to)
  console.log(from)
  if (!from.name) {
    //Si entro desde la URL
    if (to.params.profesionalID) {
      if (to.params.profesionalID === useServiciosStore().currentProfesional.professionalID.toString()) {
        console.log('igual')
      } else {
        console.log('diferente')
      }
    }
  }
  /*
  if (to.params.profesionalID) {
    if (from.params.profesionalID) {
      if (from.params.profesionalID === to.params.profesionalID) {
        return true
      } else {
        router.push('/')
      }
    }
  }
*/
  return true
})

export default router

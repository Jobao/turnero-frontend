import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfesionalView from '@/views/ProfesionalView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AvaliabilityView from '@/views/AvailabilityView.vue'
import SummaryView from '@/views/SummaryView.vue'
import { useServiciosStore } from '@/stores/serviceStore'
import { URLS } from '@/assets/constants'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import AdminLoginView from '@/views/AdminLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: URLS.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: URLS.ADMIN_DASHBOARD,
      name: 'admin_dashboard',
      component: AdminDashboardView
    },
    {
      path: URLS.ADMIN_LOGIN,
      name: 'admin_login',
      component: AdminLoginView
    },
    {
      path: URLS.PROFESSIONAL + '/:profesionalID',
      name: 'profesionalView',
      component: ProfesionalView
    },
    {
      path: URLS.PROFESSIONAL + '/:profesionalID' + URLS.SERVICE,
      name: 'servicesView',
      component: ServicesView
    },
    {
      path: URLS.PROFESSIONAL + '/:profesionalID' + URLS.SERVICE + '/:serviceID',
      name: 'shiftView',
      component: AvaliabilityView
    },
    {
      path: URLS.PROFESSIONAL + '/:profesionalID' + URLS.SERVICE + '/:serviceID' + '/summary',
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
  if (!from.name) {
    //Si entro desde la URL
    if (to.params.profesionalID) {
      if (to.params.profesionalID !== useServiciosStore().currentProfesional.professionalID.toString()) {
        router.push('/')
      }
    }
  }
  return true
})

export default router

<template>
  <div v-if="profesionalState">
    <div v-if="profesionalState.services && profesionalState.services.length > 0" class="flex">
      <ServiceCardComponent v-for="serviceItem in profesionalState.services" :title="serviceItem.title" :descripcion="serviceItem.description" :idServicio="serviceItem.serviceID" :onSelect="seleccionServicio" :select="serviceItem.serviceID === selectedService" :key="serviceItem.serviceID">
      </ServiceCardComponent>

      <button class="px-4 py-2 rounded-full" :class="siguienteButtonClass" @click="toTurnosView()">{{ localeData.getLocale('es').NEXT_BUTTON }}</button>
    </div>

    <div v-else>
      <p>{{ localeData.getLocale('es').NO_SERVICE_FOUND }}</p>
    </div>
  </div>
  <div v-else>
    <p>{{ localeData.getLocale('es').NO_PROFESSIONAL_FOUND }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ServiceCardComponent from '@/components/ServiceCardComponent.vue'
import type { ProfesionalType, ServiceType } from '@/types/types'
import { useServiciosStore } from '@/stores/serviceStore'
import { API } from '@/assets/api'
import { localeData } from '@/assets/localeData'

const route = useRoute()
const router = useRouter()
const selectedService = ref(-1)
const profesionalState = ref<ProfesionalType>()

function getProfesional() {
  const profesionalID = Number(route.params.profesionalID)

  if (useServiciosStore().currentProfesional) {
    if (useServiciosStore().currentProfesional?.professionalID !== profesionalID) {
      profesionalState.value = API.local.getProfesional(Number(route.params.profesionalID))
      useServiciosStore().currentProfesional = profesionalState.value
    } else {
      profesionalState.value = useServiciosStore().currentProfesional
    }
  } else {
    profesionalState.value = API.local.getProfesional(profesionalID)
    useServiciosStore().currentProfesional = profesionalState.value
  }
}

getProfesional()

function seleccionServicio(servicioID: number) {
  if (servicioID === selectedService.value) {
    selectedService.value = -1
  } else {
    selectedService.value = servicioID
  }
  useServiciosStore().selectedService = selectedService.value
}

const siguienteButtonClass = computed({
  get: () => {
    if (selectedService.value >= 0) {
      return 'bg-blue-600 '
    }
    return ' pointer-events-none bg-gray-400'
  },
  set: (val) => {}
})

function toTurnosView() {
  router.push(route.fullPath + '/' + selectedService.value)
}
</script>

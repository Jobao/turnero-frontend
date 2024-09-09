<template>
  <div v-if="profesionalState">
    <div v-if="profesionalState.services && profesionalState.services.length > 0" class="flex">
      <ServiceCardComponent v-for="serviceItem in profesionalState.services" :title="serviceItem.title" :description="serviceItem.description" :_id="serviceItem._id" :onSelect="serviceSelection" :selected="serviceItem._id === selectedService" :key="serviceItem._id"> </ServiceCardComponent>
      <RouterLink class="flex px-4 py-2 rounded-full text-center align-middle items-center" :class="selectedService !== '' ? 'bg-blue-600' : 'pointer-events-none bg-gray-400'" :to="route.fullPath + '/' + selectedService">{{ localeData.getLocale('es').NEXT_BUTTON }}</RouterLink>
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
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ServiceCardComponent from '@/components/ServiceCardComponent.vue'
import type { ProfesionalType, ServiceType } from '@/types/types'
import { useServiciosStore } from '@/stores/serviceStore'
import { API } from '@/assets/api'
import { localeData } from '@/assets/localeData'

const route = useRoute()
const selectedService = ref('')
const profesionalState = ref<ProfesionalType>()

onMounted(() => {
  getProfesional()
})

async function getProfesional() {
  if (useServiciosStore().currentProfesional) {
    if (useServiciosStore().currentProfesional?._id !== route.params.profesionalID) {
      profesionalState.value = await API.node.getProfessionalData(route.params.profesionalID)
      if (profesionalState.value) {
        useServiciosStore().currentProfesional = profesionalState.value
      }
    } else {
      profesionalState.value = useServiciosStore().currentProfesional
    }
  } else {
    profesionalState.value = await API.node.getProfessionalData(route.params.profesionalID)
    if (profesionalState.value) {
      useServiciosStore().currentProfesional = profesionalState.value
    }
  }
}

function serviceSelection(serviceID: string) {
  if (serviceID === selectedService.value) {
    selectedService.value = ''
  } else {
    selectedService.value = serviceID
  }
  useServiciosStore().selectedService = selectedService.value
}
</script>

<!-- TODO
add outline on service button
-->

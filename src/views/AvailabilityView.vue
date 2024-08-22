<template>
  <div v-if="profesionalState?.services !== undefined">
    <ServiceAppointmentCardComponent :appointment="profesionalState.services[selectedService].availability" :locale="'es'"> </ServiceAppointmentCardComponent>
  </div>
</template>

<script setup lang="ts">
import { API } from '@/assets/api'
import { useServiciosStore } from '@/stores/serviceStore'
import type { ProfesionalType } from '@/types/types'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ServiceAppointmentCardComponent from '@/components/ServiceAppointmentCardComponent.vue'
const route = useRoute()
const router = useRouter()
const selectedService = ref(Number(route.params.serviceID))
const profesionalState = ref<ProfesionalType>()

function getProfesional() {
  const profesionalID = Number(route.params.profesionalID)

  if (useServiciosStore().currentProfesional) {
    if (useServiciosStore().currentProfesional?.professionalID !== profesionalID) {
      profesionalState.value = API.local.getProfesional(Number(route.params.profesionalID))
      if (profesionalState.value) {
        useServiciosStore().currentProfesional = profesionalState.value
      }
    } else {
      profesionalState.value = useServiciosStore().currentProfesional
    }
  } else {
    profesionalState.value = API.local.getProfesional(profesionalID)
    if (profesionalState.value) {
      useServiciosStore().currentProfesional = profesionalState.value
    }
  }
}

getProfesional()
</script>

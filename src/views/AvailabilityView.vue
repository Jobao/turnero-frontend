<template>
  <div v-if="profesionalState?.services !== undefined && profesionalState?.services.length > 0">
    <ServiceAppointmentCardComponent :appointment="availability" :locale="'es'"> </ServiceAppointmentCardComponent>
  </div>
  <div v-else>
    <p>No hay turnos disponibles</p>
    <RouterLink :to="''">Atras</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { API } from '@/assets/api'
import { useServiciosStore } from '@/stores/serviceStore'
import type { ProfesionalType } from '@/types/types'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ServiceAppointmentCardComponent from '@/components/ServiceAppointmentCardComponent.vue'
const route = useRoute()
const router = useRouter()
const selectedService = ref(route.params.serviceID)
const profesionalState = ref<ProfesionalType>()
const availability = ref()

onMounted(() => {
  getProfesional()
  API.node.getAvailability(useServiciosStore().currentProfesional._id, selectedService.value).then((x) => {
    availability.value = x
  })
  /*const aval = API.node.getAvailability(useServiciosStore().currentProfesional._id, selectedService.value)
  console.log(aval)*/
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
</script>

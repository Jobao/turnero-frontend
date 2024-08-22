<template>
  <ProfesionalCardComponent
    v-if="profesionalState"
    :profesional="{
      professionalID: profesionalState.professionalID,
      name: profesionalState.name,
      description: profesionalState.description,
      imageURL: profesionalState.imageURL,
      mapURL: profesionalState.mapURL,
      phone: profesionalState.phone,
      services: profesionalState.services
    }"
  ></ProfesionalCardComponent>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProfesionalCardComponent from '@/components/ProfesionalCardComponent.vue'
import type { ProfesionalType } from '@/types/types'
import { useServiciosStore } from '@/stores/serviceStore'
import { API } from '@/assets/api'
import { ref } from 'vue'

const route = useRoute()
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

<template>
  <ProfesionalCardComponent
    v-if="currentProfessional"
    :profesional="{ professionalID: currentProfessional.professionalID, name: currentProfessional.name, description: currentProfessional.description, imageURL: currentProfessional.imageURL, mapURL: currentProfessional.mapURL, phone: currentProfessional.phone }"
  ></ProfesionalCardComponent>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProfesionalCardComponent from '@/components/ProfesionalCardComponent.vue'
import type { ProfesionalType } from '@/types/types'
import { useServiciosStore } from '@/stores/serviceStore'
import { API } from '@/assets/api'

const route = useRoute()
let currentProfessional: ProfesionalType | undefined

function getProfesional() {
  if (useServiciosStore().currentProfesional) {
    if (useServiciosStore().currentProfesional?.professionalID !== Number(route.params.profesionalID)) {
      currentProfessional = API.local.getProfesional(Number(route.params.profesionalID))
    }
  } else {
    currentProfessional = API.local.getProfesional(Number(route.params.profesionalID))
  }
  if (currentProfessional) {
    useServiciosStore().currentProfesional = currentProfessional
  }
}

getProfesional()
</script>

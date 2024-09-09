<template>
  <ProfesionalCardComponent
    v-if="profesionalState"
    :profesional="{
      _id: profesionalState._id,
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
import { onMounted, ref } from 'vue'

const route = useRoute()
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
</script>

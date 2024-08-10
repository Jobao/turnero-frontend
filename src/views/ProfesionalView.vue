<template>
  <ProfesionalCardComponent
    v-if="profesionalCurrent"
    :profesional="{ idProfesional: profesionalCurrent.professionalID, nombre: profesionalCurrent.name, descripcion: profesionalCurrent.description, imageURL: profesionalCurrent.imageURL, mapURL: profesionalCurrent.mapURL, telefono: profesionalCurrent.phone }"
  ></ProfesionalCardComponent>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProfesionalCardComponent from '@/components/ProfesionalCardComponent.vue'
import type { ProfesionalType } from '@/types/types'
import { useServiciosStore } from '@/stores/servicioStore'
import { API } from '@/assets/api'

const route = useRoute()
let profesionalCurrent: ProfesionalType | undefined

function profesionalSeleccionado() {}

if (useServiciosStore().currentProfesional) {
  if (useServiciosStore().currentProfesional?.professionalID !== Number(route.params.profesionalID)) {
    profesionalCurrent = API.local.getProfesional(Number(route.params.profesionalID))
  }
} else {
  profesionalCurrent = API.local.getProfesional(Number(route.params.profesionalID))
}
</script>

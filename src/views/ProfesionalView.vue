<template>
  <ProfesionalCardComponent v-if="prof" :profesional="{ idProfesional: prof.idProfesional, nombre: prof.nombre, descripcion: prof.descripcion, imageURL: prof.imageURL, mapURL: prof.mapURL, telefono: prof.telefono }"></ProfesionalCardComponent>
</template>

<script setup lang="ts">
import { fakeDataProfesional } from '@/assets/fakeData'
import { useRoute } from 'vue-router'
import ProfesionalCardComponent from '@/components/ProfesionalCardComponent.vue'

const route = useRoute()
function getProfesional(profesionalID: number) {
  return fakeDataProfesional.find((profesional) => {
    return profesional.idProfesional === profesionalID
  })
}

let prof = getProfesional(Number(route.params.profesionalID))

//let prof = getProfesional(Number(route.params.profesionalID))
</script>

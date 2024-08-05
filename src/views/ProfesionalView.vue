<template>
  <ProfesionalCardComponent v-if="prof" :profesional="{ idProfesional: prof.profesionalID, nombre: prof.nombre, descripcion: prof.descripcion, imageURL: prof.imageURL, mapURL: prof.mapURL, telefono: prof.telefono }"></ProfesionalCardComponent>
</template>

<script setup lang="ts">
import { fakeDataProfesional } from '@/assets/fakeData'
import { useRoute } from 'vue-router'
import ProfesionalCardComponent from '@/components/ProfesionalCardComponent.vue'
import { ref } from 'vue';

const route = useRoute()

const prof = ref(getProfesional(Number(route.params.profesionalID)))
function getProfesional(profesionalID: number) {
  return fakeDataProfesional.find((profesional) => {
    return profesional.profesionalID === profesionalID
  })
}

</script>

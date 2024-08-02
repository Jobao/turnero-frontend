<template>
  <div v-if="servicios" class="flex">
    <div v-for="serv in servicios" class="mr-2">{{ serv.titulo }}</div>
  </div>
</template>

<script setup lang="ts">
import { fakeDataProfesional } from '@/assets/fakeData'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ServiceCardComponent from '@/components/ServiceCardComponent.vue'

const route = useRoute()
const servicios = ref(getServicios(Number(route.params.profesionalID)))
function getServicios(profesionalID: number) {
  let profesional = fakeDataProfesional.find((prof) => {
    return prof.idProfesional === profesionalID
  })

  return profesional?.servicios
}
</script>

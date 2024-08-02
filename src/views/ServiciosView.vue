<template>
  <div v-if="servicios">{{ servicios[0].titulo }}</div>
</template>

<script setup lang="ts">
import { fakeDataProfesional } from '@/assets/fakeData'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const servicios = ref(getServicios(Number(route.params.profesionalID)))
function getServicios(profesionalID: number) {
  let profesional = fakeDataProfesional.find((prof) => {
    return prof.idProfesional === profesionalID
  })

  return profesional?.servicios
}
</script>

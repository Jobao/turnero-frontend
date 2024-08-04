<template>
  <div v-if="servicios" class="flex">
    <ServiceCardComponent v-for="serv in servicios" 
    :title="serv.titulo" 
    :descripcion="serv.descripcion" 
    :idServicio="serv.idServicio" 
    :onSelect="seleccionServicio"
    :select="serv.idServicio === seleccionado"
    :key="serv.idServicio">

    </ServiceCardComponent>

    <button class=" px-4 py-2 rounded-full" :class="siguienteButtonClass">Siguiente</button>
  </div>
</template>

<script setup lang="ts">
import { fakeDataProfesional } from '@/assets/fakeData'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import ServiceCardComponent from '@/components/ServiceCardComponent.vue'

const route = useRoute()
const seleccionado = ref(-1)

const servicios = ref(getServicios(Number(route.params.profesionalID)))
function getServicios(profesionalID: number) {
  let profesional = fakeDataProfesional.find((prof) => {
    return prof.idProfesional === profesionalID
  })

  return profesional?.servicios
}

function seleccionServicio(servicioID: number) {
  if (servicioID === seleccionado.value) {
    seleccionado.value = -1
  } else {
    seleccionado.value = servicioID
  }
  console.log(seleccionado.value);
}

const siguienteButtonClass = computed({
  get:()=>{
    if(seleccionado.value >= 0){
      return 'bg-blue-600 '
    }
    return ' pointer-events-none bg-gray-400'
    
  },
  set:(val)=>{}
  
})


</script>

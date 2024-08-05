<template>
  <div v-if="profesionalState">
    <div v-if="servicios && servicios.length > 0" class="flex">
      <ServiceCardComponent v-for="servicioItem in servicios" 
      :title="servicioItem.titulo" 
      :descripcion="servicioItem.descripcion" 
      :idServicio="servicioItem.servicioID" 
      :onSelect="seleccionServicio"
      :select="servicioItem.servicioID === seleccionado"
      :key="servicioItem.servicioID">

      </ServiceCardComponent>

      <button class=" px-4 py-2 rounded-full" :class="siguienteButtonClass" 
      @click="toTurnosView()">Siguiente</button>
    </div>

    <div v-else>
      <p>No existen servicios para el profesional</p>
    </div>
  </div>
  <div v-else>
    <p>No existe el profesional elegido</p>
  </div>
 
</template>

<script setup lang="ts">
import { fakeDataProfesional,  } from '@/assets/fakeData'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ServiceCardComponent from '@/components/ServiceCardComponent.vue'
import type { ServicioType } from '@/types/types';

const route = useRoute()
const router = useRouter()
const seleccionado = ref(-1)
const servicios = ref<ServicioType[]>()
const profesionalState = ref(getProfesional(Number(route.params.profesionalID)))


function getProfesional(profesionalID: number){
  
  let profesional = fakeDataProfesional.find((prof) => {
    return prof.profesionalID === profesionalID
  })
  if(profesional){
    servicios.value = profesional.servicios
  }
  return profesional;
}

function seleccionServicio(servicioID: number) {
  if (servicioID === seleccionado.value) {
    seleccionado.value = -1
  } else {
    seleccionado.value = servicioID
  }
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

function toTurnosView(){

  router.push(route.fullPath + '/' + seleccionado.value)
}


</script>

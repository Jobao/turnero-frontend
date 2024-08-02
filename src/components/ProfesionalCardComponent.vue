<template>
  <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
    <div class="border-b px-4 pb-6">
      <div class="text-center my-4">
        <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4" :src="props.profesional.imageURL" alt="" />
        <div class="py-2">
          <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-2">{{ props.profesional.nombre }}</h3>
          <p class="mb-2">{{ props.profesional.descripcion }}</p>
          <div v-if="props.profesional.mapURL !== ''" class="inline-flex text-gray-700 dark:text-gray-300 items-center">
            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
            <a :href="props.profesional.mapURL" target="_blank">Como Llegar !</a>
          </div>
        </div>
      </div>
      <div class="flex gap-2 px-2">
        <button @click="toServiciosPage()" class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">Sacar turno</button>
        <WhatsappButtonComponent :telefono="props.profesional.telefono"></WhatsappButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useServiciosStore } from '@/stores/servicioStore'
import WhatsappButtonComponent from './WhatsappButtonComponent.vue'

import router from '@/router'
import { useRouter, useRoute } from 'vue-router'
const props = defineProps<{ profesional: profType }>()

const store = useServiciosStore()
const router2 = useRouter()
function toServiciosPage() {
  router2.push('/' + props.profesional.idProfesional + '/servicios')
}

export type profType = {
  idProfesional: number
  nombre: string
  descripcion: string
  imageURL: string
  mapURL: string
  telefono: string
}
</script>

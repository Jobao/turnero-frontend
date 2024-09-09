<template>
  <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
    <h2 class="flex justify-center font-bold">Profesionales</h2>
    <div class="flex mt-5 flex-col">
      <RouterLink v-for="prof in professionals" :to="URLS.PROFESSIONAL + '/' + prof._id" class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2 m-2">{{ prof.name }}</RouterLink>
    </div>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { API } from '@/assets/api'
import { URLS } from '@/assets/constants'
import { fakeDataProfesional } from '@/assets/fakeData'
import { useServiciosStore } from '@/stores/serviceStore'
import { onMounted, ref } from 'vue'
useServiciosStore().clearStore()
const professionals = ref()
onMounted(async () => {
  console.log('listo')
  professionals.value = await API.node.getAllProfessionals(true)
})
/*
const professionals = ref()
professionals.value = await API.node.getAllProfessionals()

console.log(professionals.value)
*/
/**
 * <ServiceShiftCardComponent :shifts="fakeDataProfesional[0].services[0].shifts" :locale="'es'"> </ServiceShiftCardComponent>
 */
</script>

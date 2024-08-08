<template>
  <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
    <h2 class="flex justify-center font-bold">Profesionales</h2>
    <div class="flex mt-5 flex-col">
      <a v-for="prof in fakeDataProfesional" :href="'http://localhost:5173/' + prof.profesionalID" class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2 m-2">{{
        prof.nombre
      }}</a>
    </div>
  </div>

  <div>
    <DatePickerCarrouselComponent :howManyDaysShow="5" :firstDateShow="new Date()" ></DatePickerCarrouselComponent>
    <DatePickerCarrouselComponent :howManyDaysShow="5" :firstDateShow="new Date()" :minDate="new Date(2023, 11, 5)"></DatePickerCarrouselComponent>
    <DatePickerCarrouselComponent :howManyDaysShow="5" :firstDateShow="new Date()" :maxDate="new Date(2023, 0, 4)"></DatePickerCarrouselComponent>
    <DatePickerCarrouselComponent :howManyDaysShow="12" :firstDateShow="new Date()" :minDate="new Date(2023, 11, 5)"></DatePickerCarrouselComponent>
  </div>
</template>

<script setup lang="ts">
import { fakeDataProfesional } from '@/assets/fakeData'
import { useServiciosStore } from '@/stores/servicioStore'
import DatePickerCarrouselComponent from '@/components/DatePickerCarrouselComponent.vue'

useServiciosStore().clearStore()
</script>

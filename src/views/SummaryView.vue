<template>
  <form :action="route.fullPath + '/deposit'">
    <div class="flex flex-col">
      <div class="p-3">
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre:</label>
        <input required pattern="\w{3,120}" type="text" name="name" id="name" class="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black" v-model="userName" />
      </div>
      <div class="p-3">
        <label for="lastName" class="block text-sm font-medium text-gray-700">Apellido:</label>
        <input required pattern="\w{3,120}" type="text" name="lastName" id="lastName" class="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black" v-model="lastName" />
      </div>

      <div class="p-3">
        <label for="phone" class="block text-sm font-medium text-gray-700">Telefono:</label>
        <input type="tel" name="phone" id="phone" class="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black" v-model="userPhone" />
      </div>
    </div>

    <div class="bg-gray-300 m-auto size-2/4">
      <div class="">{{ useServiciosStore().currentProfesional?.services[useServiciosStore().selectedService].title }}</div>
      <div>{{ dayjs(useServiciosStore().currentAppointment?.date + useServiciosStore().currentAppointment?.shedule, 'DD/MM/YYYYHH:mm').format('dddd DD/MM/YYYY - HH:mm') }}</div>
      <div class="flex space-x-4 pt-6 pb-6">
        <button type="button" class="flex-1" @click="onCancelClick()">Cancelar</button>
        <button class="flex-1">Aceptar</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useServiciosStore } from '@/stores/serviceStore'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
dayjs.extend(customParseFormat)

const userName = ref('')
const lastName = ref('')
const userPhone = ref('')
const router = useRouter()
const route = useRoute()

function onCancelClick() {
  router.back()
}
</script>

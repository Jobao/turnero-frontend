<template>
  <div class="flex flex-col">
    <div class="p-3">
      <label for="nameInput">Nombre:</label>
      <input required pattern="\w{3,120}" type="text" name="nameInput" id="nameInput" class="border" v-model="userName" />
    </div>
    <div class="p-3">
      <label for="lastNameInput">Apellido:</label>
      <input required pattern="\w{3,120}" type="text" name="lastNameInput" id="lastNameInput" class="border" v-model="lastName" />
    </div>

    <div class="p-3">
      <label for="phoneInput">Telefono:</label>
      <input type="tel" name="phoneInput" id="phoneInput" class="border" pattern="" v-model="userPhone" />
    </div>
  </div>

  <div class="bg-gray-300 m-auto size-2/4">
    <div class="">{{ useServiciosStore().currentProfesional?.services[useServiciosStore().selectedService].title }}</div>
    <div>{{ dayjs(useServiciosStore().currentShift?.date + useServiciosStore().currentShift?.shedule, 'DD/MM/YYYYHH:mm').format('dddd DD/MM/YYYY - HH:mm') }}</div>
    <div class="flex space-x-4 pt-6 pb-6">
      <button class="flex-1">Cancelar</button>
      <button class="flex-1">Aceptar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useServiciosStore } from '@/stores/serviceStore'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
dayjs.extend(customParseFormat)

const userName = ref('')
const lastName = ref('')
const userPhone = ref('')
const router = useRouter()

function control() {
  console.log(useServiciosStore().currentShift)

  if (useServiciosStore().currentShift.date === '') {
    console.log('no existe fecha')
    router.push('/')
  }
}

control()
</script>

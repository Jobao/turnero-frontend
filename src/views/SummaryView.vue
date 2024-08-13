<template>
  <div class="flex flex-col">
    <div class="p-3">
      <label for="nameInput">Nombre:</label>
      <input type="text" name="nameInput" id="nameInput" class="border" />
    </div>
    <div class="p-3">
      <label for="lastNameInput">Apellido:</label>
      <input type="text" name="lastNameInput" id="lastNameInput" class="border" />
    </div>

    <div class="p-3">
      <label for="phoneInput">Telefono:</label>
      <input type="tel" name="phoneInput" id="phoneInput" class="border" pattern="" />
    </div>
  </div>

  <div class="bg-gray-300 m-auto size-2/4">
    <div class="">{{ useServiciosStore().currentProfesional?.services[useServiciosStore().selectedService].title }}</div>
    <div>{{ dayjs(useServiciosStore().currentShift?.date) }}</div>
    <div>Domingo 22/08 - 08:00 pm</div>
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
dayjs.extend(customParseFormat)
</script>

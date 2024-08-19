<template>
  <div>
    <div class="flex">
      <img :src="currentProfessional.imageURL" alt="" class="rounded-full border-4" />
      <div class="flex flex-col align-middle">
        <span>{{ currentProfessional.name }}</span>
        <span>{{ currentProfessional.email }}</span>
      </div>
    </div>
    <div class="pt-6">
      <h2>Info de la cuenta</h2>
      <div class="flex m-2">
        <RouterLink :to="''" class="bg-gray-200 border border-black">
          <div class="m-2"><span class="rounded-full border-4 bg-white">8</span> <span>Turnos disponibles</span></div>
        </RouterLink>
        <RouterLink :to="''" class="bg-gray-200 border border-black">
          <div class="m-2">
            <span class="rounded-full border-4 bg-white">8</span>
            <span>Referi y gana</span>
          </div>
        </RouterLink>
        <RouterLink :to="''" class="bg-gray-200 border border-black">
          <div class="m-2">
            <span class="rounded-full border-4 bg-white">8</span>
            <span>Compra tu pack</span>
          </div>
        </RouterLink>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { fakeDataAdmin } from '@/assets/fakeData'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const currentProfessional = ref(fakeDataAdmin)
</script>

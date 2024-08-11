import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProfesionalType } from '@/types/types'

export const useServiciosStore = defineStore('servicio', () => {
  const selectedService = ref(-1)
  const currentProfesional = ref<ProfesionalType>()

  function clearStore() {
    selectedService.value = -1
    currentProfesional.value = undefined
  }
  return { selectedService: selectedService, currentProfesional, clearStore }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ShiftType, ProfesionalType } from '@/types/types'

export const useServiciosStore = defineStore('servicio', () => {
  const selectedService = ref(-1)
  const currentProfesional = ref<ProfesionalType>()
  const currentShift = ref<{ date: string; shedule: string }>()

  function clearStore() {
    selectedService.value = -1
    currentProfesional.value = undefined
    currentShift.value = undefined
  }
  return { selectedService, currentProfesional, currentShift, clearStore }
})

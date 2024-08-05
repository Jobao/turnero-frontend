import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProfesionalType } from '@/types/types'

export const useServiciosStore = defineStore('servicio', () => {
  const servicioSeleccionado = ref(-1)
  const currentProfesional = ref<ProfesionalType>()

  function clearStore() {
    servicioSeleccionado.value = -1
    currentProfesional.value = undefined
  }
  return { servicioSeleccionado, currentProfesional, clearStore }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useServiciosStore = defineStore('servicio', () => {
  const servicioSeleccionado = ref(-1)
  return { servicioSeleccionado }
})

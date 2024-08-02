import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const serviciosStore = defineStore('servicio', () => {
  const servicioSeleccionado = ref(-1)

  return { servicioSeleccionado }
})

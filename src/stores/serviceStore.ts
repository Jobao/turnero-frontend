import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserDataType, AppointmentType, ProfesionalType } from '@/types/types'
import { useStorage, useStorageAsync } from '@vueuse/core'

export const useServiciosStore = defineStore('servicio', () => {
  const selectedService = useStorage('selectedService', -1, sessionStorage)
  const currentProfesional = useStorage<ProfesionalType>('currentProfesional', {} as ProfesionalType, sessionStorage) // ref<ProfesionalType>()
  const currentAppointment = useStorage('currentAppointment', { date: '', shedule: '' }, sessionStorage)

  function clearStore() {
    selectedService.value = -1
    currentProfesional.value = undefined
    currentAppointment.value = undefined
  }
  return { selectedService, currentProfesional, currentAppointment, clearStore }
})

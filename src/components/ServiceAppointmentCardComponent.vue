<template>
  <div class="">
    <div v-for="shifts in props.appointment" class="flex border mb-2">
      <div class="w-1/5">
        <div class="font-bold">{{ shifts.day }}</div>
        <div>{{ dayjs(shifts.day, 'DD/MM/YYYY').locale(currentLocale).format('dddd') }}</div>
      </div>
      <div>
        <p>{{ localeData.getLocale(currentLocale).AVALIABLE_SHIFTS }}</p>
        <button v-for="shedule in shifts.time" class="border m-1 bg-gray-300" :key="shifts.day + shedule" :class="isSelectedButtonShedule(shifts.day + '||' + shedule) ? 'bg-green-300' : ''" @click="selectButtonShedule(shifts.day + '||' + shedule)">{{ shedule }}</button>
      </div>
      <div class="self-center align-middle items-center pl-2">
        <button class="border-2" :class="generateNextButtonClassStyle(shifts.day)" @click="toSummaryPage()">Reservar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  appointment: AppointmentType[]
  locale?: string
}>()

import type { AppointmentType } from '@/types/types'
import { localeData } from '@/assets/localeData'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/es'
import 'dayjs/locale/br'
import { computed, ref } from 'vue'
import { useServiciosStore } from '@/stores/serviceStore'
import { routes } from 'vue-router/auto-routes'
import { useRoute, useRouter } from 'vue-router'

dayjs.extend(customParseFormat)

const currentLocale = ref(defineLocale())
const selectedButtonShedule = ref('')
const selectedDateGroup = ref('')
const selectedShift = ref('')
const route = useRoute()
const router = useRouter()

const splitter = '||'

function generateNextButtonClassStyle(buttonKey: string) {
  let returnedClass = ''
  let enabled = enableNextButton(buttonKey)
  if (enabled) {
    returnedClass += 'bg-blue-600 '
  } else {
    returnedClass += 'disabled'
  }

  return returnedClass
}

function enableNextButton(key: string) {
  return key === selectedDateGroup.value
}

function isSelectedButtonShedule(key: string) {
  return selectedButtonShedule.value === key
}

function selectButtonShedule(key: string) {
  if (key !== '') {
    if (isSelectedButtonShedule(key)) {
      selectedButtonShedule.value = ''
      selectedDateGroup.value = ''
    } else {
      selectedButtonShedule.value = key
      selectedDateGroup.value = key.split(splitter)[0]
      selectedShift.value = key.split(splitter)[1]
    }
  }
}

function defineLocale() {
  return props.locale ? props.locale : 'es'
}

function toSummaryPage() {
  useServiciosStore().currentAppointment = {
    date: selectedDateGroup.value,
    shedule: selectedShift.value
  }

  router.push(route.fullPath + '/' + 'summary')
}
</script>

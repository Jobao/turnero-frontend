<template>
  <div class="">
    <div v-for="shifts in props.shifts" class="flex border mb-2">
      <div class="w-1/5">
        <div class="font-bold">{{ shifts.date }}</div>
        <div>{{ dayjs(shifts.date, 'DD/MM/YYYY').locale(currentLocale).format('dddd') }}</div>
      </div>
      <div>
        <p>Turnos disponibles</p>
        <button v-for="shedule in shifts.shedule" class="border m-1 bg-gray-300" :key="shifts.date + shedule" :class="isSelectedButtonShedule(shifts.date + '||' + shedule) ? 'bg-green-300' : ''" @click="selectButtonShedule(shifts.date + '||' + shedule)">{{ shedule }}</button>
      </div>
      <div class="self-center align-middle items-center pl-2">
        <button class="border-2" :class="generateNextButtonClassStyle(shifts.date)">Reservar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  shifts: ShiftType[]
  locale?: string
}>()

import type { ShiftType } from '@/types/types'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/es'
import 'dayjs/locale/br'
import { computed, ref } from 'vue'
dayjs.extend(customParseFormat)

const currentLocale = ref(defineLocale())
const selectedButtonShedule = ref('')
const selectedDateGroup = ref('')

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
      console.log(selectedDateGroup.value)
    }
  }
}

function defineLocale() {
  return props.locale ? props.locale : 'en'
}
console.log(props.shifts)
</script>

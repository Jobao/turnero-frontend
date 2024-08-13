<template>
  <div class="">
    <div v-for="shifts in props.shifts" class="flex border mb-2">
      <div class="w-1/5">
        <div class="font-bold">{{ shifts.date }}</div>
        <div>{{ dayjs(shifts.date, 'DD/MM/YYYY').locale(currentLocale).format('dddd') }}</div>
      </div>
      <div>
        <p>{{ localeData.getLocale(currentLocale).AVALIABLE_SHIFTS }}</p>
        <button v-for="shedule in shifts.shedule" class="border m-1 bg-gray-300" :key="shifts.date + shedule" :class="isSelectedButtonShedule(shifts.date + '||' + shedule) ? 'bg-green-300' : ''" @click="selectButtonShedule(shifts.date + '||' + shedule)">{{ shedule }}</button>
      </div>
      <div class="self-center align-middle items-center pl-2">
        <button class="border-2" :class="generateNextButtonClassStyle(shifts.date)" @click="toSummaryPage()">Reservar</button>
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
    }
  }
}

function defineLocale() {
  return props.locale ? props.locale : 'es'
}

function toSummaryPage() {
  const aux = selectedDateGroup.value.split(splitter)
  useServiciosStore().currentShift = {
    date: aux[0],
    shedule: aux[1]
  }

  router.push(route.fullPath + '/' + 'summary')
}
</script>

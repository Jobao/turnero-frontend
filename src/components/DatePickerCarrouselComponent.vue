<template>
  <div>
    <table class="border-4 w-screen mx-auto">
      <tr>
        <td><button @click="previousMonth()" class="w-full" :disabled="disablePreviousMonth"><</button></td>
        <td :colspan="currentHowManyDaysShow">{{ currentFirstDayToShow.format('MMMM / YYYY') }}</td>
        <td><button @click="nextMonth()" class="w-full" :disabled="disableNextMonth">></button></td>
      </tr>
      <tr>
        <td><button @click="previousDay()" :disabled="disablePreviousDay" class="w-full"><</button></td>
        <td v-for="n in currentHowManyDaysShow">
          <button class="w-full" :key="currentFirstDayToShow.add(n - 1, 'day').date()">{{ currentFirstDayToShow.add(n - 1, 'day').date() }}</button>
        </td>
        <td><button @click="nextDay()" :disabled="disableNextDay" class="w-full">></button></td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * Falta implementar maxDate
 */
import dayjs, { Dayjs } from 'dayjs'
import { computed, ref } from 'vue'
import utc from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(utc)
dayjs.extend(timezonePlugin)
dayjs.extend(isSameOrBefore)

const props = defineProps<{
  minDate?: Date
  maxDate?: Date
  preventPast?: boolean
  howManyDaysShow: number
  firstDateShow: Date
  locale?: string
}>()

const currentFirstDayToShow = ref<Dayjs>(dayjs(props.firstDateShow))
const firstDayToShow = ref<Dayjs>(dayjs(props.firstDateShow))
const currentMonth = ref(currentFirstDayToShow.value.month())
const currentHowManyDaysShow = ref(props.howManyDaysShow)

const minDayJS = dayjs(props.minDate)
const maxDayJS = dayjs(props.maxDate)

const timezone = dayjs.tz.guess()
//Control
const disablePreviousDay = ref(false)
const disableNextDay = ref(false)

const disablePreviousMonth = ref(false)
const disableNextMonth = ref(false)
//SETUP
if (props.minDate) {
  if (currentFirstDayToShow.value.isSameOrBefore(minDayJS, 'day')) {
    currentFirstDayToShow.value = minDayJS
    disablePreviousMonth.value = true
    disablePreviousDay.value = true
  }
}
if (props.maxDate) {
  if (currentFirstDayToShow.value.isAfter(maxDayJS, 'day')) {
    if (maxDayJS.date() < currentHowManyDaysShow.value) {
      currentHowManyDaysShow.value = maxDayJS.date()
      disablePreviousDay.value = true
    }
    currentFirstDayToShow.value = maxDayJS.subtract(currentHowManyDaysShow.value - 1, 'day') 

    disableNextMonth.value = true
    disableNextDay.value = true
  }
}

function nextDay() {
  const diff = calculateDaysDiff()
  if (diff <= 0) {
    currentFirstDayToShow.value = currentFirstDayToShow.value.add(1, 'day')
    if (props.maxDate) {
      if (currentFirstDayToShow.value.isAfter(maxDayJS, 'day')) {
        disableNextDay.value = true
      }
    }
    disablePreviousDay.value = false
    if (diff === 0) {
      disableNextDay.value = true
    }
  }
}

function previousDay() {
  if (currentFirstDayToShow.value.date() >= 2) {
    currentFirstDayToShow.value = currentFirstDayToShow.value.subtract(1, 'day')
    if (props.minDate) {
      if (currentFirstDayToShow.value.isSameOrBefore(minDayJS, 'day')) {
        disablePreviousDay.value = true
      }
    }
    disableNextDay.value = false
    if (currentFirstDayToShow.value.date() === 1) {
      disablePreviousDay.value = true
    }
  }
}

function previousMonth() {
  currentFirstDayToShow.value = currentFirstDayToShow.value.subtract(1, 'month')
  currentMonth.value = currentFirstDayToShow.value.month()
  controlMonthChange()
}

function nextMonth() {
  currentFirstDayToShow.value = currentFirstDayToShow.value.add(1, 'month')
  currentMonth.value = currentFirstDayToShow.value.month()
  disablePreviousMonth.value = false
  controlMonthChange()
}

function controlMonthChange() {
  const diff = calculateDaysDiff()

  if (diff > 0) {
    currentFirstDayToShow.value = currentFirstDayToShow.value.subtract(diff - 1, 'day')
  } else {
    disablePreviousDay.value = false
  }
  if (currentFirstDayToShow.value.date() + currentHowManyDaysShow.value <= currentFirstDayToShow.value.daysInMonth()) {
    disableNextDay.value = false
  }
  if (props.minDate) {
    if (currentFirstDayToShow.value.isSameOrBefore(minDayJS, 'day')) {
      disablePreviousMonth.value = true
      disablePreviousDay.value = true
      currentFirstDayToShow.value = minDayJS
    }
    if (currentFirstDayToShow.value.isSame(minDayJS, 'month')) {
      disablePreviousMonth.value = true
    }
  }
  if(props.maxDate){

  }
}

function calculateDaysDiff() {
  return currentFirstDayToShow.value.date() + currentHowManyDaysShow.value - currentFirstDayToShow.value.daysInMonth()
}
</script>

<style>
td,
tr {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

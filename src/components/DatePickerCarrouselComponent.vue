<template>
  <div>
    <table class="border-4 w-screen mx-auto">
      <tr></tr>
      <tr>
        <td><button @click="previousDay()" :disabled="disablePreviousDay"><</button></td>
        <td v-for="n in props.howManyDaysShow">
          <button :key="currentFirstDayToShow.add(n - 1, 'day').date()">{{ currentFirstDayToShow.add(n - 1, 'day').date() }}</button>
        </td>
        <td><button @click="nextDay()" :disabled="disableNextDay">></button></td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'
import { computed, ref } from 'vue'
import utc from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezonePlugin)

const props = defineProps<{
  minDate?: Date
  maxDate?: Date
  preventPast?: boolean
  howManyDaysShow: number
  firstDateShow: Date
}>()

const currentFirstDayToShow = ref<Dayjs>(dayjs(props.firstDateShow))
const currentMonth = ref(currentFirstDayToShow.value.month())
const timezone = dayjs.tz.guess()
const today = dayjs()
//Control
const disablePreviousDay = ref(false)
const disableNextDay = ref(false)

function nextDay() {
  if (currentFirstDayToShow.value.add(props.howManyDaysShow, 'day').month() === currentMonth.value) {
    currentFirstDayToShow.value = currentFirstDayToShow.value.add(1, 'day')
    disablePreviousDay.value = false
  } else {
    disableNextDay.value = true
  }
}

function previousDay() {
  if (currentFirstDayToShow.value.date() >= 2) {
    currentFirstDayToShow.value = currentFirstDayToShow.value.subtract(1, 'day')
    disableNextDay.value = false
  } else {
    disablePreviousDay.value = true
  }
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

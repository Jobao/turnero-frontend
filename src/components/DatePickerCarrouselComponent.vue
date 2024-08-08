<template>
  <div>
    <table class="border-4 w-screen mx-auto">
      <tr>
        <td v-for="n in props.howManyDaysShow">{{ currentFirstDay.add(n, 'days').date() }}</td>
        <td><button @click="nextDay()">></button></td>
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

const actShowDays = computed(() => {
  return 5
})
const currentFirstDay = ref<Dayjs>(dayjs(props.firstDateShow))
const currentMonth = ref(currentFirstDay.value.month())
const timezone = dayjs.tz.guess()

function nextDay() {
  currentFirstDay.value = currentFirstDay.value.add(1, 'day')
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

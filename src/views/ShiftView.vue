<template>
  <div class="flex divide-x-8">
    <DatePicker class="pl-4 pr-4" v-model="date" inline :minDate="minDate" v-on:date-select="prueba()" />
    <div class="pl-4">
      <div v-if="date">
        <span>HOla</span>
      </div>
      <div v-else>Seleccione Fecha</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'

let minDate = new Date()
minDate.setDate(minDate.getDate() + 1)

const date = ref<Date>()

function prueba() {
  //console.log(date.value.)
}
</script>

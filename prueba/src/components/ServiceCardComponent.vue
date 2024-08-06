<template>
  <button :class="select ? ' bg-green-600' : ''" class="border rounded mr-2 px-4 py-2" @click="props.onSelect(props.idServicio)">
    <div class="flex flex-col">
      <span class="font-bold">{{ props.title }}</span>
      <span class="text-sm">{{ props.descripcion }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  descripcion: string
  idServicio: number
  onSelect: Function
  select: boolean
}>()
</script>

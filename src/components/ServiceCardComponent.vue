<template>
  <button :class="selected ? ' bg-green-600' : ''" class="border rounded mr-2 px-4 py-2" @click="props.onSelect(props._id)">
    <div class="flex flex-col">
      <span class="font-bold">{{ props.title }}</span>
      <span class="text-sm">{{ props.description }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string | undefined
  _id: string
  onSelect: Function
  selected: boolean
}>()
</script>

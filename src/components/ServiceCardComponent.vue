<template >
  <button class="border rounded mr-2 px-4 py-2" @click="props.onSelect(props.idServicio)">{{props.title}}</button>
</template>

<script setup lang="ts">
 
 const props = defineProps<{
  title:string,
  descripcion:string,
  idServicio:number,
  onSelect:Function
 }>()


</script>

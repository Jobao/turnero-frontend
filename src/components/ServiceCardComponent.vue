<template >
  <button class="border rounded mr-2">{{props.title}}</button>
</template>

<script setup lang="ts">
 
 const props = defineProps<{
  title:string,
  descripcion:string
 }>()


</script>

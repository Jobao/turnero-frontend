<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header></header>

  <main>
    <RouterView />
  </main>

  <footer class="absolute bottom-0 right-0">Turnero by <a href="https://harmonycoders.com/" target="_blank" rel="noopener noreferrer">Harmony Coders</a></footer>
</template>

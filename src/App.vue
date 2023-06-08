<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="min-h-[100vh] flex items-center justify-center">
    <!-- <TheHeader /> -->
    <RouterView />
  </div>
</template>

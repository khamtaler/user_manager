<template>
  <header>
    <h1 class="text-xl">{{ props.title }}</h1>
  </header>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <header>
    <h1 class="text-3xl text-dark-gray mb-5">{{ props.title }}</h1>
  </header>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <header>
    <h1 class="mb-5 text-3xl text-dark-gray">{{ props.title }}</h1>
  </header>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

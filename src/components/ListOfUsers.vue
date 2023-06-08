<template>
  <div class="grid grid-cols-16 mx-auto auto-rows-[1fr] items-center">
    <span class="font-bold text-dark-gray col-start-4 sm:col-start-3 col-end-[13] md:col-end-[15]"
      >Full Name</span
    >
    <span
      class="font-bold text-dark-gray col-start-[13] col-end-[17] sm:col-end-[16] md:col-start-[15] md:col-end-[16] mx-auto"
      >Action</span
    >
    <SingleUserListItem
      v-for="user in users"
      :user="user"
      class="col-start-1 col-end-[17] color-odd"
    />
  </div>
</template>

<script setup>
import SingleUserListItem from './SingleUserListItem.vue'
const props = defineProps({
  users: Array
})
console.log(props.users)
</script>

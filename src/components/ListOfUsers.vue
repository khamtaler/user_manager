<template>
  <div class="mx-auto grid auto-rows-[1fr] grid-cols-16 items-center">
    <span class="col-start-4 col-end-[13] font-bold text-dark-gray sm:col-start-3 md:col-end-[15]"
      >Full Name</span
    >
    <span
      class="col-start-[13] col-end-[17] mx-auto font-bold text-dark-gray sm:col-end-[16] md:col-start-[15] md:col-end-[16]"
      >Action</span
    >
    <SingleUserListItem
      v-for="user in users"
      :user="user"
      class="color-odd col-start-1 col-end-[17]"
    />
  </div>
</template>

<script setup>
import SingleUserListItem from './SingleUserListItem.vue'
const props = defineProps({
  users: Array
})
</script>

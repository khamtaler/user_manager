<template>
  <div class="grid grid-cols-16 items-center py-3">
    <figure class="col-start-1 col-end-3 sm:col-end-2 h-full pl-2">
      <img :src="user.avatar" alt="avatar" class="rounded-full w-[50px] h-full object-cover" />
    </figure>
    <h6
      class="text-dark-gray col-start-4 sm:col-start-3 col-end-[13] font-medium text-xs sm:text-sm md:text-base"
    >
      {{ user.first_name }} {{ user.last_name }}
    </h6>
    <div
      class="col-start-[13] col-end-[17] sm:col-end-[16] md:col-start-[15] md:col-end-[16] flex justify-around items-center flex-row"
    >
      <router-link :to="{ name: 'edit-user-details', params: { id: user.id } }"
        ><font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-lighter-gray"
      /></router-link>
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="text-lighter-gray cursor-pointer"
        @click="deleteUser(user.id)"
      />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
const props = defineProps({
  user: Object
})

function deleteUser(id) {
  try {
    axios.delete(`https://reqres.in/api/users/${id}`).then((res) => {
      console.log(res)
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

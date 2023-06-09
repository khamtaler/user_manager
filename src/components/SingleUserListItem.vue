<template>
  <div class="grid h-full grid-cols-16 items-center py-3">
    <figure v-if="user.avatar" class="col-start-1 col-end-3 h-full pl-2 sm:col-end-2">
      <img :src="user.avatar" alt="avatar" class="h-full w-[50px] rounded-full object-cover" />
    </figure>
    <h6
      v-if="user.first_name || user.last_name"
      class="col-start-4 col-end-[13] text-xs font-medium text-dark-gray sm:col-start-3 sm:text-sm md:text-base"
    >
      {{ user.first_name }} {{ user.last_name }}
    </h6>
    <div
      class="col-start-[13] col-end-[17] flex flex-row items-center justify-around sm:col-end-[16] md:col-start-[15] md:col-end-[16]"
    >
      <router-link :to="{ name: 'edit-user-details', params: { id: user.id } }"
        ><font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-lighter-gray"
      /></router-link>
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="cursor-pointer text-lighter-gray"
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
      alert(`user with id ${id} has been deleted with code ${res.status}`)
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

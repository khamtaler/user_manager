<template>
  <div class="max-w-[1200px] w-full mx-auto px-5">
    <PageHeader title="User list" />
    <div class="bg-white px-4 py-7 border-[1px] border-opacity-10 rounded-md">
      <div
        class="flex flex-col md:flex-row gap-4 items-center justify-between pb-7 border-b-light-gray border-b-[1px] border-opacity-10 mb-5"
      >
        <BaseSearchBar />
        <button type="text" class="bg-green text-white rounded-full py-2 px-4">
          <font-awesome-icon icon="fa-solid fa-plus " class="pr-1 font-bold" /> Add User
        </button>
      </div>
      <div>
        <ListOfUsers :users="users" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseSearchBar from '../components/BaseSearchBar.vue'
import PageHeader from '../components/PageHeader.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import ListOfUsers from '../components/ListOfUsers.vue'

const users = ref([])

onMounted(async () => {
  try {
    const data = axios.get('https://reqres.in/api/users?page=2').then((res) => {
      console.log(res.data)
      return res.data
    })
    users.value = await data
  } catch (err) {
    console.error(err)
  }
})
</script>

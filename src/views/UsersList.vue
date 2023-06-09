<template>
  <div class="mx-auto w-full max-w-[1200px] px-5">
    <PageHeader title="User list" />
    <div class="rounded-md border-[1px] border-opacity-10 bg-white px-4 py-7">
      <div
        class="mb-5 flex flex-col items-center justify-between gap-4 border-b-[1px] border-b-light-gray border-opacity-10 pb-7 md:flex-row"
      >
        <BaseSearchBar />
        <router-link
          :to="{ name: 'create-user' }"
          class="rounded-full bg-green px-5 py-2 text-white"
          ><font-awesome-icon icon="fa-solid fa-plus " class="pr-1 font-bold" /> Add User
        </router-link>
      </div>
      <div v-if="usersData">
        <ListOfUsers :users="usersData.data" />
      </div>
    </div>
    <!-- w zależności od ilości użytkowników należałoby ukrywać strzałki, gdy nie można nimi przejść na kolejną kartę, na potrzebę zobaczenia przycisków zostawiłem je widoczne z zablokowanym przejściem -->
    <div class="mt-5 flex flex-wrap items-center">
      <button
        type="button"
        @click="getPage(usersData.page - 1)"
        class="paged-list--button border-[1px] border-lighter-gray bg-white p-2 text-xs"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </button>
      <button
        type="button"
        v-for="(item, index) in usersData.total_pages"
        :key="item"
        @click="getPage(index + 1)"
        :class="{ active: index + 1 === usersData.page }"
        class="paged-list--button border-[1px] border-l-0 border-lighter-gray bg-white px-3 py-2 text-xs"
      >
        {{ index + 1 }}
      </button>
      <button
        type="button"
        @click="getPage(usersData.page + 1)"
        class="paged-list--button border-[1px] border-l-0 border-lighter-gray bg-white p-2 text-xs"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  </div>
</template>

<script setup>
import BaseSearchBar from '../components/BaseSearchBar.vue'
import PageHeader from '../components/PageHeader.vue'
import ListOfUsers from '../components/ListOfUsers.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const usersData = ref([])

function getPage(page) {
  if (page <= 0) {
    return
  }
  if (page > usersData.value.total_pages) {
    return
  }
  try {
    axios.get(`https://reqres.in/api/users?page=${page}&per_page=8`).then((res) => {
      usersData.value = res.data
    })
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  try {
    axios.get('https://reqres.in/api/users?per_page=8').then((res) => {
      usersData.value = res.data
    })
  } catch (err) {
    console.error(err)
  }
})
</script>

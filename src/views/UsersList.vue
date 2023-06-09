<template>
  <div class="mx-auto w-full max-w-[1200px] px-5">
    <PageHeader title="User list" />
    <div class="rounded-md border-[1px] border-opacity-10 bg-white px-4 py-7">
      <div
        class="mb-5 flex flex-col items-center justify-between gap-4 border-b-[1px] border-b-light-gray border-opacity-10 pb-7 md:flex-row"
      >
        <BaseSearchBar @search="search" />
        <router-link
          :to="{ name: 'create-user' }"
          class="rounded-full bg-green px-5 py-2 text-white"
          ><font-awesome-icon icon="fa-solid fa-plus " class="pr-1 font-bold" /> Add User
        </router-link>
      </div>
      <div v-if="users">
        <ListOfUsers :users="users" />
      </div>
    </div>
    <!-- w zależności od ilości użytkowników należałoby renderować odpowiednie przeciski, w przypadku jednostronicowej listy należałoby ukryć je wszystkie, aktualnie są zostawione z uwagi na obecność paginacji w projekcie -->
    <div class="mt-5 flex flex-wrap items-center">
      <button
        type="button"
        @click="backPage"
        class="paged-list--button border-[1px] border-lighter-gray bg-white p-2 text-xs"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </button>
      <button
        type="button"
        v-for="(item, index) in Math.ceil(usersData.length / itemsOnPage)"
        :key="item"
        @click="() => goToPage(item)"
        :class="{ active: index === 0 }"
        class="paged-list--button border-[1px] border-l-0 border-lighter-gray bg-white px-3 py-2 text-xs"
      >
        {{ item }}
      </button>
      <button
        type="button"
        @click="nextPage"
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

const itemsOnPage = 8
const currentPage = ref(1)
const users = ref([])

const nextPage = () => {
  const pages = document.querySelectorAll('.paged-list--button')
  if (currentPage.value !== Math.ceil(usersData.value.length / itemsOnPage)) {
    pages[currentPage.value].classList.remove('active')
    pages[currentPage.value + 1].classList.add('active')
    currentPage.value += 1
    users.value = usersData.value.slice(
      (currentPage.value - 1) * itemsOnPage,
      currentPage.value * itemsOnPage
    )
  }
}

const backPage = () => {
  const pages = document.querySelectorAll('.paged-list--button')
  if (currentPage.value !== 1) {
    pages[currentPage.value].classList.remove('active')
    pages[currentPage.value - 1].classList.add('active')
    currentPage.value -= 1
    users.value = usersData.value.slice(
      (currentPage.value - 1) * itemsOnPage,
      currentPage.value * itemsOnPage
    )
  }
}

const goToPage = (numPage) => {
  const pages = document.querySelectorAll('.paged-list--button')
  pages.forEach((element) => {
    element.classList.remove('active')
  })

  pages[numPage].classList.add('active')
  currentPage.value = numPage
  users.value = usersData.value.slice(
    (currentPage.value - 1) * itemsOnPage,
    currentPage.value * itemsOnPage
  )
}

onMounted(async () => {
  try {
    const data = axios.get('https://reqres.in/api/users?per_page=12').then((res) => {
      return res.data.data
    })
    usersData.value = await data
    users.value = JSON.parse(
      JSON.stringify(
        usersData.value.slice(
          (currentPage.value - 1) * itemsOnPage,
          currentPage.value * itemsOnPage
        )
      )
    )
  } catch (err) {
    console.error(err)
  }
})
</script>

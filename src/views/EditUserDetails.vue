<template>
  <div class="mx-auto w-full max-w-[1200px] px-5">
    <PageHeader title="Update User" />
    <div class="flex flex-col-reverse items-stretch justify-between gap-5 md:flex-row">
      <div class="flex w-full flex-col rounded-md bg-white p-4 md:flex-[5]">
        <div class="mt-[50px] flex flex-col justify-evenly gap-5 md:flex-row">
          <div class="flex w-full flex-1 flex-col">
            <label for="FirstName" class="mb-2 font-semibold"> First Name </label>
            <input
              id="FirstName"
              type="text"
              v-model="form.first_name"
              required
              :placeholder="form.first_name ? form.first_name : ''"
              class="rounded-sm border-[1px] border-lighter-gray border-opacity-20 px-4 py-1"
            />
          </div>
          <div class="flex w-full flex-1 flex-col">
            <label for="LastName" class="mb-2 font-semibold"> Last Name</label>
            <input
              id="LastName"
              type="text"
              v-model="form.last_name"
              :placeholder="form.last_name ? form.last_name : ''"
              required
              class="rounded-sm border-[1px] border-lighter-gray border-opacity-20 px-4 py-1"
            />
          </div>
        </div>
        <button
          type="submit"
          @click="UpdateUser"
          class="mx-auto mt-[50px] self-start rounded-md bg-green px-4 py-2 text-white md:mx-0 md:mt-auto"
        >
          Update User
        </button>
      </div>
      <div class="flex flex-col bg-white p-4 md:flex-[2]">
        <figure class="my-[50px]">
          <img
            :src="form.avatar ? form.avatar : '/avatar.jpg'"
            alt="avatar placeholder"
            class="mx-auto block aspect-square min-w-[50%] max-w-[35%] rounded-full border-2 border-light-gray object-cover p-[1px]"
          />
        </figure>
        <button
          v-if="!changeAvatar"
          type="button"
          @click="
            () => {
              changeAvatar = !changeAvatar
            }
          "
          class="rounded-md border-[1px] border-dark-gray py-1 text-dark-gray"
        >
          <font-awesome-icon icon="fa-solid fa-camera" /> Change Photo
        </button>
        <div v-if="changeAvatar" class="flex flex-col">
          <label for="Avatar" class="mb-2 font-semibold">Avatar Url</label
          ><input
            type="url"
            v-model="form.avatar"
            id="Avatar"
            placeholder="https://example.com"
            pattern="https://.*"
            class="rounded-sm border-[1px] border-lighter-gray border-opacity-20 px-4 py-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import PageHeader from '../components/PageHeader.vue'
import { ref, onMounted } from 'vue'
import router from '../router'
import { useRoute } from 'vue-router'

const route = useRoute()
const form = ref({
  first_name: '',
  last_name: '',
  avatar: ''
})

const changeAvatar = ref(false)
async function UpdateUser() {
  if (!form.value.first_name && !form.value.last_name) {
    alert(`fields first name and last name are required`)
    return
  }
  if (form.value.first_name && !form.value.last_name) {
    alert(`field last name is required`)
    return
  }
  if (!form.value.first_name && form.value.last_name) {
    alert(`fields first name is required`)
    return
  }
  if (
    (/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      form.value.avatar
    ) &&
      form.value.avatar.length === 0) ||
    (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      form.value.avatar
    ) &&
      form.value.avatar.length !== 0)
  ) {
    alert(`Check your avatar URL please`)
    return
  } else {
    try {
      await axios.put(`https://reqres.in/api/users/${route.params.id}`, form.value).then((res) => {
        alert(`The user has been updated with code ${res.status}`)
        router.push({ name: 'home' })
      })
    } catch (err) {
      console.log(err)
    }
  }
}

onMounted(async () => {
  try {
    await axios.get(`https://reqres.in/api/users/${route.params.id}`).then((res) => {
      form.value.first_name = res.data.data.first_name
      form.value.last_name = res.data.data.last_name
      form.value.avatar = res.data.data.avatar
    })
  } catch (err) {
    console.log(err)
  }
})
</script>

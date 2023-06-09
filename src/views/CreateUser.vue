<template>
  <div class="mx-auto w-full max-w-[1200px] px-5">
    <PageHeader title="Create User" />
    <div class="flex flex-col md:flex-row">
      <div>
        <div>
          <div class="flex flex-col">
            <label for="FirstName"> First Name </label>
            <input type="text" v-model="form.first_name" id="FirstName" required />
          </div>
          <div class="flex flex-col">
            <label for="LastName"> Last Name </label>
            <input type="text" v-model="form.last_name" id="LastName" required />
          </div>
        </div>
      </div>
      <button type="submit" @click="RegisterUser">Register User</button>
      <div class="flex flex-col">
        <label for="Avatar">Avatar Url</label
        ><input
          type="url"
          v-model="form.avatar"
          id="Avatar"
          placeholder="https://example.com"
          pattern="https://.*"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import PageHeader from '../components/PageHeader.vue'
import { ref } from 'vue'
import router from '../router'
const form = ref({
  first_name: '',
  last_name: '',
  avatar: ''
})
async function RegisterUser() {
  if (form.value.first_name && form.value.last_name) {
    try {
      axios.post('https://reqres.in/api/users', form.value).then((res) => {
        alert(`The user has been registered with code ${res.status}`)
        router.push({ name: 'home' })
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    alert(`fields first name and last name are required`)
  }
}
</script>

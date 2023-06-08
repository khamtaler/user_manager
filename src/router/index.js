import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/UsersList.vue'
import CreateUser from '../views/CreateUser.vue'
import EditUserDetails from '../views/EditUserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersList
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: CreateUser
    },
    {
      path: '/edit-user-details/:id?',
      name: 'edit-user-details',
      component: EditUserDetails
    }
  ]
})

export default router

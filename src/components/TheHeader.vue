<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Users list</RouterLink>
        <RouterLink :to="{ name: 'create-user' }">Create User</RouterLink>
        <RouterLink :to="{ name: 'edit-user-details' }">Edit User</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

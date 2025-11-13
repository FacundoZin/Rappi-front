<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">

    <!-- Ocultar NavBar cuando la ruta es /login -->
    <NavBar
      v-if="$route.name !== 'login'"
      @search="searchParams = $event"
    />

    <router-view :searchParams="searchParams"></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

const searchParams = ref({ text: '', type: 'name' })
</script>

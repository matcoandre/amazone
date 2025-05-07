<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavbarMain from './components/NavbarMain.vue'

const route = useRoute()
</script>

<template>
  <NavbarMain v-if="route.name != 'login' && route.name != 'register'" />
  <RouterView />
</template>

<style scoped></style>

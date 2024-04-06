<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>
<template>
  <main class="grid gap-3 app-grid h-screen">
    <router-view />
    <Sidebar></Sidebar>
  </main>
</template>

<style>
.app-grid {
  grid-template-columns: 1fr auto;
}
</style>

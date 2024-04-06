<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>
<template>
  <main class="grid gap-3">
    <router-view />
    <Sidebar></Sidebar>
  </main>
</template>

<style>
.grid {
  grid-template-columns: 1fr auto;
}
</style>

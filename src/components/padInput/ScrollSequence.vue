<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div
    class="flex gap-2 bg-zinc-950 p-2 rounded-xl w-[36rem] h-[3.6rem] overflow-x-scroll container"
  >
    <div
      class="py-2 px-4 bg-zinc-700 rounded-md min-w-[5rem] flex items-center justify-center"
      v-for="(note, index) in lpSequence"
      :key="index"
    >
      {{ note.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollSequence'
}
</script>

<style scoped>
.container {
  direction: rtl;
}
</style>

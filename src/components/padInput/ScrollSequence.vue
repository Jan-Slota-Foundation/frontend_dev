<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <transition-group
    tag="div"
    name="list"
    class="flex flex-row-reverse gap-2 bg-zinc-950 p-2 rounded-xl w-[38rem] h-[3.6rem] overflow-x-scroll overflow-y-hidden container"
  >
    <div
      :class="[
        '-z-[3px] py-2 px-4 bg-zinc-800 rounded-md min-w-[5rem] overflow-hidden flex items-center justify-center border ',
        note.id === lpSequence.numberOfItems - 1
          ? 'border-rose-700'
          : 'border-zinc-700'
      ]"
      v-for="note in lpSequence.array"
      :key="note.id"
    >
      {{ note.name.split().reverse().join() }}
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'ScrollSequence'
}
</script>

<style scoped>
.container {
  /* direction: rtl; */
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

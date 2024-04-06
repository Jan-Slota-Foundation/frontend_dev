<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div class="flex gap-12">
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
    <button
      @click="handlePush"
      class="bg-rose-700 px-6 rounded-lg tracking-wider font-semibold"
    >
      Push
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollSequence',
  methods: {
    async handlePush() {
      // Check if serial is available
      if ('serial' in navigator) {
        try {
          const ports = await navigator.serial.getPorts()

          console.log(ports)
          await port.open({ baudRate: 9600 })

          const encoder = new TextEncoder()

          const writer = port.writable.getWriter()
          try {
            await writer.write(8)
          } catch (error) {
            console.error(error)
          }

          writer.releaseLock()
        } catch (error) {
          console.error(error)
        }
      } else {
        console.error('Serial is not supported')
      }
    }
  }
}
</script>

<style scoped>
.container {
  scrollbar-color: #09090b #27272a;
  scrollbar-width: thin;
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

::-webkit-scrollbar {
  display: none;
}
</style>

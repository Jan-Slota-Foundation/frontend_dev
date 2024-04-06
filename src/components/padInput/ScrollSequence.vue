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
      console.log('iteration')

      // Check if serial is available
      if ('serial' in navigator) {
        try {
          const port = await navigator.serial.requestPort()

          console.log(port)
          await port.open({ baudRate: 9600 })

          const encoder = new TextEncoder()

          const writer = port.writable.getWriter()

          for (const i of lpSequence.array.toReversed()) {
            try {
              await writer.write(encoder.encode(i.code))
              // oktava
              await writer.write(encoder.encode(4))

              // duration
              await writer.write(encoder.encode(3))

              console.log('the nucleo should have received:', i.code, 4, 3)
            } catch (error) {
              console.error(error)
            }
          }
          // terminate song
          try {
            await writer.write(encoder.encode(-1))
            await writer.write(encoder.encode(0))
            await writer.write(encoder.encode(0))
            console.log('the nucleo should have received:', -1, 4, 3)
          } catch (error) {
            console.error(error)
          }

          //write tempo
          try {
            await writer.write(encoder.encode(200))
          } catch (error) {
            console.error(error)
          }

          //end transmission
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

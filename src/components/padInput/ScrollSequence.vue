<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div class="flex gap-2">
    <transition-group
      tag="div"
      name="list"
      class="flex flex-row-reverse gap-2 bg-zinc-950 p-2 rounded-xl w-[38rem] h-[3.6rem] overflow-x-scroll overflow-y-hidden container"
    >
      <div
        :class="[
          '-z-[3px] relative  py-2 px-4 bg-zinc-800 rounded-md min-w-[5rem]  flex items-center justify-center border ',
          note.id === lpSequence.numberOfItems - 1
            ? 'border-rose-700'
            : 'border-zinc-700'
        ]"
        v-for="note in lpSequence.array"
        :key="note.id"
      >
        {{ note.name.split().reverse().join() }}
        <span
          class="absolute text-xs top-0 -translate-y-1/2 bg-zinc-700 text-zinc-400 px-2 rounded-md"
        >
          {{ note.octave }}</span
        >
      </div>
    </transition-group>
    <button
      @click="handlePush"
      :class="[
        'bg-rose-700 hover:bg-rose-800 transition-all duration-200 px-4 min-w-[5rem] rounded-lg my-1 tracking-wider font-semibold flex justify-center items-center',
        isSongPlaying ? 'pointer-events-none' : ''
      ]"
    >
      <span v-if="!isSongPlaying">Push</span>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 pulse"
      >
        <path
          fill-rule="evenodd"
          d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button
      :class="[
        'bg-zinc-700 hover:bg-zinc-800 transition-all duration-200 px-4 min-w-[5rem] rounded-lg my-1 tracking-wider font-semibold flex justify-center items-center',
        isSongPlaying ? 'pointer-events-none' : ''
      ]"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollSequence',
  data() {
    return {
      isSongPlaying: false
    }
  },
  methods: {
    async handlePush() {
      // Check if serial is available
      if ('serial' in navigator) {
        this.isSongPlaying = true
        try {
          const port = await navigator.serial.requestPort()

          console.log(port)
          await port.open({ baudRate: 9600 })

          const encoder = new TextEncoder()

          const writer = port.writable.getWriter()

          let data = new Uint8Array(3)
          data.fill(0)

          //await writer.write(data)

          const end = lpSequence.array.toReversed()
          end.shift()

          for (let i of end) {
            try {
              console.log(i.code.charCodeAt(0))
              data[0] = i.code.charCodeAt(0)
              data[1] = i.octave.toString().charCodeAt(0)
              data[2] = Number('4').toString().charCodeAt(0)
              await writer.write(data)

              console.log('the nucleo should have received:', i.code, 4, 3)
            } catch (error) {
              console.error(error)
            }
          }
          // // terminate song
          try {
            data.fill(0)
            data[0] = 'K'.charCodeAt(0)
            await writer.write(data)

            data.fill(0)
            data[0] = 'x'.charCodeAt(0)
            await writer.write(data)

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
          //writer.close()
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
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.pulse {
  animation: pulse 1s infinite;
}
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

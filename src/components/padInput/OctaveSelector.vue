<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div class="flex items-center gap-2 mb-6">
    <p class="tracking-wider uppercase text-zinc-500 font-semibold">Octave:</p>
    <div class="flex">
      <button
        @click="lpSequence.currentOctave = index + 1"
        v-for="(octave, index) in numberOfOctaves"
        :key="index"
        :class="[
          'rounded-lg w-10 h-10 block transition duration-100',
          lpSequence.currentOctave === index + 1 ? 'bg-rose-700' : ''
        ]"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'octaveselector',
  data() {
    return {
      numberOfOctaves: [3, 4, 5, 6]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    handleKeyDown(e) {
      switch (e.key) {
        case 'ArrowDown':
          this.octaveDown()
          break
        case 'ArrowUp':
          this.octaveUp()
          break
      }
    },
    octaveUp() {
      if (lpSequence.currentOctave !== 4) {
        lpSequence.currentOctave++
      } else {
        lpSequence.currentOctave = 1
      }
    },

    octaveDown() {
      if (lpSequence.currentOctave !== 1) {
        lpSequence.currentOctave--
      } else {
        lpSequence.currentOctave = 4
      }
    }
  }
}
</script>

<style scoped></style>

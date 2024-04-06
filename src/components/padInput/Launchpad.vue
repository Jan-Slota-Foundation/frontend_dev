<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div :class="`grid grid-cols-${5} gap-4 w-[35rem] mb-8`">
    <button
      class="bg-zinc-800 hover:shadow-md border border-zinc-700 hover:shadow-red-700 rounded-xl aspect-square transition-all duration-150 ease-out active:border-red-600 active:bg-red-600 outline-none"
      @click="handleLaunchpadButtonClick(note)"
      v-for="(note, index) in notesMapped"
      :key="index"
    >
      {{ note.name }}
    </button>
    <button
      @click="handleLaunchpadButtonClick({ name: '-' })"
      class="bg-zinc-800 row-start-1 col-start-5 row-span-4 hover:shadow-md border border-zinc-700 hover:shadow-red-700 rounded-xl transition-all duration-150 ease-out active:border-red-600 active:bg-red-600 outline-none"
    >
      -
    </button>
  </div>
</template>

<script>
export default {
  name: 'Launchpad',
  data() {
    return {
      notes: ['c', 'd', 'e', 'f', 'g', 'a', 'h', 'C']
    }
  },
  methods: {
    handleLaunchpadButtonClick(note) {
      lpSequence.unshift(note)
    }
  },
  computed: {
    notesMapped() {
      let final = []
      this.notes.forEach((note) => {
        final.push({
          name: `${note}`
        })
        final.push({
          name: `${note}#`
        })
      })
      return final
    }
  }
}
</script>

<style scoped></style>

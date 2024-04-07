<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div :class="`grid grid-cols-5 gap-4 w-[35rem] mb-8 `">
    <button
      class="bg-zinc-800 w-full text-xl text-zinc-400 hover:shadow-md border border-zinc-700 hover:shadow-rose-700 rounded-xl aspect-square transition-all duration-150 ease-out active:border-rose-600 active:bg-rose-600 outline-none"
      @click="handleLaunchpadButtonClick(note)"
      v-for="(note, index) in notesMapped"
      :key="index"
    >
      {{ note.name }}
    </button>
    <button
      @click="handleLaunchpadButtonClick({ name: '-', code: 0 })"
      class="bg-zinc-800 row-start-1 text-zinc-400 col-start-5 row-span-3 hover:shadow-md border border-zinc-700 hover:shadow-rose-700 rounded-xl transition-all duration-150 ease-out active:border-rose-600 active:bg-rose-600 outline-none"
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
      notes: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
  },
  methods: {
    handleLaunchpadButtonClick(note) {
      lpSequence.array.unshift({
        name: note.name,
        id: lpSequence.numberOfItems,
        code: note.code
      })
      lpSequence.numberOfItems++

      console.log(lpSequence.array)
    },
    mapNoteToCode(note) {
      let final = ''
      switch (note) {
        case 'a':
          final = '1'
          break
        case 'a#':
          final = '2'
          break
        case 'b':
          final = '3'

          break
        case 'c':
          final = '4'

          break
        case 'c#':
          final = '5'

          break
        case 'd':
          final = '6'

          break
        case 'd#':
          final = '7'

          break
        case 'e':
          final = '8'

          break
        case 'f':
          final = '9'

          break
        case 'f#':
          final = ':'

          break
        case 'g':
          final = ';'

          break
        case 'g#':
          final = '<'
          break
      }
      return final
    }
  },
  computed: {
    notesMapped() {
      let final = []
      this.notes.forEach((note) => {
        final.push({
          name: `${note}`,
          code: this.mapNoteToCode(note)
        })

        if (note !== 'b' && note !== 'e') {
          final.push({
            name: `${note}#`,
            code: this.mapNoteToCode(`${note}#`)
          })
        }
      })
      return final
    }
  }
}
</script>

<style scoped></style>

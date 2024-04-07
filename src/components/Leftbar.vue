<script setup>
import { lpSequence } from '@/states/launchpadSequence.js'
</script>
<template>
  <div class="bg-zinc-950 p-2 min-w-[15rem]">
    <h1
      class="uppercase text-zinc-300 text-xl bg-zinc-900 rounded-md font-semibold tracking-wider text-center"
    >
      Current Tune
    </h1>
    <div class="grid notes-grid">
      <div
        v-for="(note, index) in headerNotes"
        :key="index"
        class="text-sm flex items-center justify-center px-[1px] rounded-sm col-span-1 row-span-1 row-start-1"
      >
        {{ note }}
      </div>
      <div
        v-for="(note, index) in lpSequence.array.toReversed()"
        :key="index"
        :class="[
          `text-sm bg-zinc-800 w-full flex items-center justify-center px-[1px] rounded-sm  row-span-1 row-start-${
            2 + index
          }`,
          index === 0
            ? 'startNote'
            : `col-span-${note.name.includes('#') ? '2' : '1'} ${
                note.name.includes('#') ? '2' : '1'
              }  col-start-${note.octave}`
        ]"
      >
        {{ note.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leftbar',
  data() {
    return {
      headerNotes: [
        'c',
        'd',
        'e',
        'f',
        'g',
        'a',
        'h',
        'c',
        'd',
        'e',
        'f',
        'g',
        'a',
        'h'
      ]
    }
  }
}
</script>

<style scoped>
.notes-grid {
  grid-template-columns: repeat(14, 1fr);
  column-gap: 2px;
  row-gap: 2px;
}

.startNote {
  grid-column: span 14;
}
</style>

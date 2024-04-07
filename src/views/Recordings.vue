<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="bg-zinc-800 w-[35rem] p-5 rounded-lg">
      <h1 class="mb-4 text-center text-2xl">Your Recordings</h1>

      <ul class="flex flex-col gap-2">
        <li
          v-for="(tune, index) in tunes"
          :key="index"
          class="flex justify-between items-center pl-4 p-2 bg-zinc-700 rounded-xl"
        >
          <span>{{ tune.name }}</span>
          <button
            @click="handleRecordingPlay"
            class="px-6 py-2 rounded-md bg-rose-700"
          >
            Play
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
const db = getFirestore()
const colRef = collection(db, 'tunes')

export default {
  name: 'Recordings',
  data() {
    return {
      tunes: []
    }
  },
  mounted() {
    getDocs(colRef).then((snapshot) => {
      console.log('snapshot captured', snapshot.docs[0].data())
      snapshot.docs.forEach((doc) => {
        this.tunes.push(doc.data())
      })
    })
  },
  async handleRecordingPlay(tune) {
    console.log(tune)
  }
}
</script>

<style scoped></style>

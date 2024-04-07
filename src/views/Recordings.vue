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
            @click="handleRecordingPlay(tune)"
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
    setTimeout(() => {
      getDocs(colRef).then((snapshot) => {
        console.log('snapshot captured', snapshot.docs[0].data())
        snapshot.docs.forEach((doc) => {
          this.tunes.push(doc.data())
        })
      })
    }, 300)
  },
  methods: {
    async handleRecordingPlay(tune) {
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

<style scoped></style>

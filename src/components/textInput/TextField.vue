<script setup>
import { serial } from '@/states/serialStates.js'
</script>
<template>
  <div class="flex flex-col gap-[2rem] mt-24 items-center">
    <textarea
      class="outline-none resize-none rounded-xl bg-zinc-800 w-[32rem] h-[18rem] px-5 pt-3 border border-zinc-600"
      v-model="message"
      placeholder="Type here to make our computer speak your mind..."
      maxlength="255"
    ></textarea>
    <button
      @click="handleSendText"
      class="bg-rose-700 text-lg rounded-lg px-6 py-2 hover:bg-rose-800 font-semibold tracking-wider"
    >
      Transcribe
    </button>
  </div>
</template>
<script>
export default {
  name: 'TextField',
  data() {
    return {
      message: '',
      selected: ''
    }
  },
  methods: {
    async handleSendText() {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/2023.5.8'
        },
        body: '{"text":"Dolezity text"}'
      }

      fetch('http://hadedvade.pythonanywhere.com/morse', options)
        .then((response) => response.json())
        .then(async (response) => {
          if ('serial' in navigator) {
            try {
              const port = await navigator.serial.requestPort()

              await port.open({ baudRate: 9600 })

              serial.connected = true

              const encoder = new TextEncoder()

              const writer = port.writable.getWriter()

              let data = new Uint8Array(3)
              data.fill(0)

              for (const i of response.split('')) {
                switch (i) {
                  case ' ':
                    console.log('medzera')
                    data[0] = '0'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[4] = '2'.charCodeAt(0)
                    break
                  case '-':
                    console.log('dash')

                    data[0] = '4'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[4] = '4'.charCodeAt(0)
                    break
                  case '.':
                    console.log('bodka')

                    data[0] = '4'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[4] = '2'.charCodeAt(0)
                    break
                  case '/':
                    console.log('slash')

                    data[0] = '0'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[4] = '4'.charCodeAt(0)
                    break
                }

                await writer.write(data)
              }
              data.fill(0)
              data[0] = 'K'.charCodeAt(0)
              await writer.write(data)

              data.fill(0)
              // const tempo =  Number(200).toString()
              await wirter.write(data)
              serial.connected = false
            } catch (error) {}
          }
        })
        .catch((err) => console.error(err))
    }
  }
}
</script>

<style scoped></style>

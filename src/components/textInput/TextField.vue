<script setup>
import { serial } from '@/states/serialStates.js'
</script>
<template>
  <div class="flex flex-col items-end">
    <div
      class="bg-zinc-800 w-[25rem] h-[18rem] rounded-xl flex justify-around flex-col items-center"
    >
      <div>Selected voice: {{ selected }}</div>

      <select class="bg-zinc-700 rounded-xl w-[15rem] pl-2" v-model="selected">
        <option disabled value="">Please select one</option>
        <option>MALE</option>
        <option>FEMALE</option>
      </select>
      <textarea
        class="outline-none resize-none rounded-xl bg-zinc-700 w-[20rem] h-[10rem] pl-5 pt-2"
        v-model="message"
        placeholder="Type here to make our computer speak your mind..."
        maxlength="255"
      ></textarea>
    </div>
    <button @click="handleSendText" class="bg-rose-600 rounded-xl w-[10rem]">
      Transcribe to morse
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
        body: `{"text":"${this.message}"}`
      }

      fetch('http://hadedvade.pythonanywhere.com/morse', options)
        .then((response) => response.json())
        .then(async (response) => {
          console.log(response)
          if ('serial' in navigator) {
            try {
              const port = await navigator.serial.requestPort()

              await port.open({ baudRate: 9600 })

              serial.connected = true
              console.log('penis')

              const writer = port.writable.getWriter()

              let data = new Uint8Array(3)
              data.fill(0)
              console.log(response.split(''))
              for (const i of response.split('')) {
                switch (i) {
                  case ' ':
                    data[0] = '0'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[2] = '2'.charCodeAt(0)
                    break
                  case '-':
                    data[0] = '4'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[2] = '4'.charCodeAt(0)
                    break
                  case '.':
                    data[0] = '4'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[2] = '2'.charCodeAt(0)
                    break
                  case '/':
                    data[0] = '0'.charCodeAt(0)
                    data[1] = '4'.charCodeAt(0)
                    data[2] = '4'.charCodeAt(0)
                    break
                }
                await writer.write(data)
                console.log(i)
              }
              data.fill(0)
              data[0] = 'K'.charCodeAt(0)
              await writer.write(data)
              console.log('terminate')
              data.fill(0)
              data[0] = 'x'.charCodeAt(0)
              await writer.write(data)
              console.log('akoby tu je koniec pre front')
              serial.connected = false
            } catch (error) {
              console.error(error)
            }
          }
        })
        .catch((err) => console.error(err))
    }
  }
}
</script>

<style scoped></style>

<template>
  <div class="mt-16">
    <form class="flex flex-col items-center" @submit.prevent="convertFile()">
      <label
        class="bg-zinc-800 mb-6 text-lg border-2 border-zinc-400 border-dashed min-w-[35rem] min-h-[18rem] flex items-center justify-center rounded-lg"
        for="filedrop"
      >
        <p v-if="!fileInput">Click to upload a file to convert...</p>
        <p v-else>
          Successfully uploaded file:
          <span class="bg-zinc-700 inline-block px-2 rounded-md">{{
            fileInput.name
          }}</span>
        </p>
      </label>
      <input
        required
        ref="fileInput"
        type="file"
        accept=".mid"
        @change="handleFileInput"
        name="file"
        id="filedrop"
      />
      <input
        :class="[
          'bg-rose-700 cursor-pointer py-2 px-8 text-lg hover:bg-rose-800 transition-all duration-200  min-w-[5rem] rounded-lg my-1 tracking-wider font-semibold flex justify-center items-center'
        ]"
        type="submit"
        value="Convert"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'ConvertFileInput',
  data() {
    return {
      fileInput: false
    }
  },
  methods: {
    handleFileInput() {
      console.log(this.$refs.fileInput.files[0])
      this.fileInput = this.$refs.fileInput.files[0]
    },
    async convertFile() {
      console.log(this.fileInput)
      const form = new FormData()
      form.append('music.mid', this.fileInput)

      const options = {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: form
      }

      let result = await fetch('http://127.0.0.1:3000/upload', options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(async (response) => {
          try {
            const port = await navigator.serial.requestPort()

          console.log(port)
          await port.open({ baudRate: 9600 })

          const encoder = new TextEncoder()

          const writer = port.writable.getWriter()

          let data = new Uint8Array(3)

          for (let i of response) {
            data.fill(0)
            data[0] = i[0]
            data[1] = i[1]
            data[2] = i[2]
            await writer.write(data)
          }
         } catch (error) {
            console.error(error)
          }
        })
        .catch((err) => console.error(err))

      console.log(result)
    }
  }
}
</script>

<style scoped>
label {
  cursor: pointer;
}

#filedrop {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>

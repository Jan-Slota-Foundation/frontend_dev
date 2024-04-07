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
    convertFile() {
      console.log(this.fileInput)
      const form = new FormData()
      form.append('music.mid', this.fileInput)

      const options = {
        method: 'POST',
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=---011000010111000001101001',
          'User-Agent': 'insomnia/2023.5.8'
        }
      }

      options.body = form

      fetch('http://hack.hiimmilan.dev:3000/upload', options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
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

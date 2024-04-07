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
      SEND MESSAGE
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
    handleSendText() {
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
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }
  }
}
</script>

<style scoped></style>

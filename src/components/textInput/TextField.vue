<template>
  <div
    class="bg-zinc-800 w-[25rem] h-[15rem] rounded-xl flex justify-center flex-col items-center"
  >
    <div>Selected: {{ selected }}</div>

    <select class="bg-zinc-700 rounded-lg pb-10" v-model="selected">
      <option disabled value="">Please select one</option>
      <option>MALE</option>
      <option>FEMALE</option>
    </select>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea
      class="outline-none resize-none rounded-xl bg-zinc-700 w-[20rem] h-[10rem] pl-5 pt-2"
      v-model="message"
      placeholder="Type here to make our computer speak your mind..."
      maxlength="255"
    ></textarea>
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
  }
}
</script>

<style scoped></style>

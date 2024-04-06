<script setup>
import router from '@/router/index.js'
</script>

<template>
  <div class="flex items-center pt-10 flex-col">
    <div
      class="bg-zinc-700 w-[28rem] h-[42rem] flex justify-center items-center flex-col rounded-xl pt-7 pb-3"
    >
      <h1>REGISTER NOW</h1>
      <input class="h-[2rem]" v-model="email" placeholder="edit me" />
      <input class="h-[2rem]" v-model="password" placeholder="edit me" />
      <button @click="">submit</button>
      <router-link to="/login">I alredy have an account</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // v for pre udaje
  name: 'RegisterForm',
  methods: {},
  //do data
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped></style>

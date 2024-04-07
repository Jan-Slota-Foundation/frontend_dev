<script setup>
import router from '@/router/index.js'
</script>

<template>
  <div class="flex items-center pt-10 flex-col">
    <div
      class="bg-zinc-800 justify-center items-center min-w-[24rem] rounded-xl p-8"
    >
      <h1 class="text-4xl font-bold text-zinc-400 tracking-wider mb-8">
        Register
      </h1>
      <form @submit.prevent="console.log('register attempt')">
        <input
          class="bg-zinc-700 px-4 rounded-md py-2 text-lg block w-full mb-4 outline-none focus:outline focus:outline-rose-600"
          v-model="email"
          placeholder="Your Email"
        />
        <input
          class="bg-zinc-700 px-4 rounded-md py-2 text-lg block w-full mb-6 outline-none focus:outline focus:outline-rose-600"
          v-model="password"
          type="password"
          placeholder="Your Password"
        />
        <input
          class="text-lg mb-4 tracking-wider w-full block py-2 text-center bg-rose-600 rounded-md text-zinc-800 font-semibold outline-none focus:outline focus:outline-rose-600"
          type="submit"
          value="Register"
        />
      </form>
      <router-link class="underline text-zinc-500 block text-center" to="/login"
        >I alredy have an account</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  methods: {},
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped></style>

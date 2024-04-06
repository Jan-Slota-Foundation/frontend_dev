<script setup>
import router from '@/router/index.js'
</script>
<template>
  <div class="bg-zinc-800 p-1 rounded-lg w-fit flex gap-4 mb-10">
    <button
      v-for="(state, index) in inputStates"
      :key="index"
      :class="[
        'py-2 px-6 rounded-md font-semibold tracking-wider text-lg  transition-all duration-200 ',
        activeInputState === state.name
          ? 'bg-zinc-900 text-rose-600'
          : 'text-zinc-500'
      ]"
      @click="handleChangeUserState(state.path)"
    >
      {{ state.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputStateSwich',
  data() {
    return {
      activeInputState: 'Launchpad',
      inputStates: [
        { name: 'Launchpad', path: 'pad' },
        { name: 'Text to voice', path: 'text' }
      ]
    }
  },
  methods: {
    handleChangeUserState(path) {
      router.push(`/userinput/${path}`)
    }
  }
}
</script>

<style scoped></style>

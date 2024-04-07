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
        activeInputState === state.path
          ? 'bg-zinc-900 text-rose-600'
          : 'text-zinc-500'
      ]"
      @click="handleChangeUserState(state)"
    >
      {{ state.name }}
    </button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'InputStateSwich',
  data() {
    return {
      activeInputState: '',
      inputStates: [
        { name: 'Launchpad', path: '/userinput/pad' },
        { name: 'Text to voice', path: '/userinput/text' },
        { name: 'Convert', path: '/userinput/convert' }
      ]
    }
  },
  methods: {
    handleChangeUserState(state) {
      router.push(state.path)

      this.activeInputState = state.path
    }
  },
  mounted() {
    console.log(useRoute().path)
    this.activeInputState = useRoute().path
  }
}
</script>

<style scoped></style>

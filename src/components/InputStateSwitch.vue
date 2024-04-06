<template>
  <div class="bg-zinc-800 p-1 rounded-lg w-fit flex gap-4">
    <button
      v-for="(state, index) in inputStates"
      :key="index"
      :class="[
        'py-2 px-6 rounded-md tracking-wider text-lg  transition-all duration-200',
        activeInputState === state ? 'bg-zinc-900 text-rose-600' : ''
      ]"
      @click="activeInputState = state"
    >
      {{ state }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputStateSwich',
  data() {
    return {
      activeInputState: 'Launchpad',
      inputStates: ['Launchpad', 'Keyboard', 'Text to voice']
    }
  }
}
</script>

<style scoped></style>

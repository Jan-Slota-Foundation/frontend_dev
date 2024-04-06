<template>
  <div class="grid grid-cols-4 gap-4 w-[32rem] mb-8">
    <button
      class="bg-zinc-800 hover:shadow-md border border-zinc-700 hover:shadow-red-700 rounded-xl aspect-square transition-all duration-150 ease-out active:border-red-600 active:bg-red-600 outline-none"
      @click="handleLaunchpadButtonClick()"
      v-for="(button, index) in numberOfButtons"
      :key="index"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'Launchpad',
  data() {
    return {
      numberOfButtons: 16
    }
  },
  methods: {
    handleLaunchpadButtonClick() {}
  }
}
</script>

<style scoped></style>

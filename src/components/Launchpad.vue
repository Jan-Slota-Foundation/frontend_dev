<template>
  <div class="grid grid-cols-4 gap-4 max-w-[35rem]">
    <button
      class="bg-zinc-800 hover:shadow-md hover:shadow-rose-600 rounded-xl aspect-square transition-all duration-200 ease-out active:bg-red-600 outline-none"
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

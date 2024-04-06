<template>
  <div class="grid grid-cols-4">
    <button
      @click="handleLaunchpadButtonClick()"
      v-for="(button, index) in numberOfButtons"
      :key="index"
    >
      {{ index }}
    </button>
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

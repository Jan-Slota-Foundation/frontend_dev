<template>
  <div>
    <button
      :class="[
        'text-lg font-semibold py-2  px-3 rounded-lg transition-all duration-500 ease-out  tracking-wider border-2 border-zinc-800 hover:border-rose-600',
        recordingActive ? 'bg-rose-700' : 'bg-zinc-800'
      ]"
      @click="handleRecordStateChange()"
    >
      <div v-if="!recordingActive" class="flex items-center gap-2">
        <svg
          class="block"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            class="fill-rose-600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
            class="fill-rose-600"
          />
        </svg>
        <span class="block -translate-y-[1.5px]">REC</span>
      </div>
      <div v-else class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="block -translate-y-[1.5px]">STOP</span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'RecButton',
  data() {
    return {
      recordingActive: false
    }
  },
  methods: {
    handleRecordStateChange() {
      this.recordingActive = !this.recordingActive
    }
  }
}
</script>

<style scoped></style>

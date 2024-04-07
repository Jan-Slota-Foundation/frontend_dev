<script setup>
import InputStateSwitch from '@/components/InputStateSwitch.vue'
import { serial } from '@/states/serialStates.js'
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="p-7 flex flex-col items-center min-h-[47.6rem]">
      <InputStateSwitch></InputStateSwitch>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaunchpadView',
  components: { InputStateSwitch },
  async mounted() {
    if ('serial' in navigator) {
      serial.port = await navigator.serial.requestPort()
      try {
        await serial.port.open({ baudRate: 9600 })
        serial.connected = true
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped></style>

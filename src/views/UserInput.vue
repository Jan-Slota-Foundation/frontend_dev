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
  components: { InputStateSwitch }
}
</script>

<style scoped></style>

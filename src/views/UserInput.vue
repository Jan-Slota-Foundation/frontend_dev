<script setup>
import Launchpad from '@/components/Launchpad.vue'
import InputStateSwitch from '@/components/InputStateSwitch.vue'
import RecButton from '@/components/RecButton.vue'
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="p-7 flex flex-col items-center">
      <InputStateSwitch></InputStateSwitch>
      <Launchpad></Launchpad>
      <RecButton></RecButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaunchpadView',
  components: { Launchpad, InputStateSwitch, RecButton }
}
</script>

<style scoped></style>

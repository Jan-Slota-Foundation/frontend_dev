<script setup>
import Launchpad from '@/components/Launchpad.vue'
import InputStateSwitch from '@/components/InputStateSwitch.vue'
</script>
<template>
  <div class="p-7">
    <InputStateSwitch></InputStateSwitch>
    <Launchpad></Launchpad>
  </div>
</template>

<script>
export default {
  name: 'LaunchpadView',
  components: { Launchpad, InputStateSwitch }
}
</script>

<style scoped></style>

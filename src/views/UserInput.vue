<script setup>
import InputStateSwitch from '@/components/InputStateSwitch.vue'
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="p-7 flex flex-col items-center">
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

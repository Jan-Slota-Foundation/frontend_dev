<script setup>
import Launchpad from '@/components/padInput/Launchpad.vue'
import RecButton from '@/components/padInput/RecButton.vue'
</script>
<template>
  <Launchpad></Launchpad>
  <RecButton></RecButton>
</template>

<script>
export default {
  name: 'PadView',
  components: {
    Launchpad,
    RecButton
  }
}
</script>

<style scoped></style>

<script setup>
import Launchpad from '@/components/padInput/Launchpad.vue'
import RecButton from '@/components/padInput/RecButton.vue'
import ScrollSequence from '@/components/padInput/ScrollSequence.vue'
</script>
<template>
  <Launchpad></Launchpad>
  <ScrollSequence></ScrollSequence>
  <!-- <RecButton></RecButton> -->
</template>

<script>
export default {
  name: 'PadView',
  components: {
    Launchpad,
    RecButton,
    ScrollSequence
  }
}
</script>

<style scoped></style>

<script setup>
import Launchpad from '@/components/padInput/Launchpad.vue'
import RecButton from '@/components/padInput/RecButton.vue'
import ScrollSequence from '@/components/padInput/ScrollSequence.vue'
import OctaveSelector from '@/components/padInput/OctaveSelector.vue'
</script>
<template>
  <OctaveSelector></OctaveSelector>
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
    ScrollSequence,
    OctaveSelector
  }
}
</script>

<style scoped></style>

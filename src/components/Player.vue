<template>
  <div>
    <button @click="play()"><span>PLAYYYY</span></button>
  </div>
</template>

<script>
export default {
  name: 'Player',
  methods: {
    play() {
      const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387')
      audio.play()
    }
  }
}
</script>

<style scoped></style>

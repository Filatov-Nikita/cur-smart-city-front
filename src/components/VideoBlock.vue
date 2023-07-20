<template>
  <div class="video-block">
    <video ref="video" autoplay muted loop>
      <source src="/videos/test.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';

  const videoRef = ref(null);

  function onClick(e) {
    console.log(e);
    if(videoRef.value?.paused === false) {
      videoRef.value?.pause();
    }
  }
</script>

<style scoped>
  .video-block video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 4rem;
  }
</style>

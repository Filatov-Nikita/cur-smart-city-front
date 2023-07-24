<template>
  <div class="video-block">
    <transition name="fade">
      <video v-show="show" ref="video" autoplay muted loop>
        <source src="/videos/test.mp4" type="video/mp4">
      </video>
    </transition>
    <img width="958" height="247" class="logo" src="../assets/images/logo-white.svg" alt="logo">
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const show = ref(true);
  // const videoRef = ref(null);

  let timeout;

  document.addEventListener('click', () => {
    if(!show.value) {
      clearTimeout(timeout);
      setTimer();
      return;
    }

    show.value = false;
    setTimer();
  });

  function setTimer() {
    timeout = setTimeout(() => {
      show.value = true;
    }, 1000 * 60 * 3);
  }
</script>

<style scoped>
  .video-block {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .video-block video {
    object-fit: cover;
    border-radius: 4rem;
  }

  .logo {
    position: absolute;
    width: 59.875rem;
    height: auto;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 300ms;
  }

  .fade-leave-active {
    transition: opacity 300ms;
    opacity: 0;
  }
</style>

<template>
  <div class="main-layout">
    <div class="left-video">
      <VideoBlock />
    </div>
    <div class="wrapper">
      <div class="main-layout-header">
        <Header />
      </div>
      <main>
        <slot />
      </main>
    </div>
    <div class="right-video">
      <VideoBlock />
    </div>
    <div class="footer-zone">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import Header from '../components/Header.vue';
  import VideoBlock from '../components/VideoBlock.vue';
</script>
<style scoped>
  .main-layout {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .main-layout-header {
    padding: 3.6rem 10rem 0;
  }

  .footer-zone {
    position: absolute;
    bottom: 0;
    @apply tw-inset-x-0
  }

  .left-video, .right-video {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 86.19rem;
    height: 48.5rem;
  }

  .left-video {
    left: 3.88rem;
  }

  .right-video {
    right: 3.88rem;
  }
</style>

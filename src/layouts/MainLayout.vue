<template>
  <div class="main-layout">
    <VideoBlock class="left-video" />
    <div class="wrapper">
      <div class="main-layout-header">
        <Header />
      </div>
      <main>
        <slot />
      </main>
    </div>
    <VideoBlock class="right-video" />
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

  .left-video {

  }

  .right-video {

  }
</style>

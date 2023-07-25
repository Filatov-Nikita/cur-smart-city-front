<template>
  <div class="main-layout">
    <div class="left-video">
      <VideoBlock src="/videos/left.mp4" />
    </div>

    <div class="wrapper">
      <div class="main-content">
        <DistrictsList class="main-list" />

        <div class="main-layout-header">
          <Header />
        </div>

        <main class="main-page">
          <slot />
        </main>

        <div class="footer-zone" id="footer"></div>
      </div>
    </div>

    <div class="right-video">
      <VideoBlock src="/videos/right.mp4" />
    </div>
  </div>
</template>

<script setup>
  import Header from '../components/Header.vue';
  import VideoBlock from '../components/VideoBlock.vue';
  import DistrictsList from '../components/DistrictsList.vue';
</script>
<style scoped>
  .main-layout {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .main-layout-header {
    padding: 2.5rem 2.5rem 0;
    z-index: 9000;
    position: relative;
  }

  .main-content {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }

  .footer-zone {}

  .left-video, .right-video {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 86.19rem;
    /* height: 48.5rem; */
    z-index: -1;
  }

  .left-video {
    left: 3.88rem;
  }

  .right-video {
    right: 3.88rem;
  }

  @media screen and (max-width: 5000px) {
    .left-video, .right-video {
      display: none;
    }
  }
</style>

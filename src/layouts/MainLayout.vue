<template>
  <div class="main-layout">
    <div class="main-layout-header">
      <Header />
    </div>
    <slot />
    <div class="footer-zone">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import Header from '../components/Header.vue';
</script>
<style scoped>
  .main-layout {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .main-layout::before {
    content: "";
    width: 110rem;
    height: 135rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: url(../assets/images/left.svg);
    background-size: cover;
    z-index: -1;
  }

  .main-layout::after {
    content: "";
    width: 212.5rem;
    height: 135rem;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url(../assets/images/right.svg);
    background-size: cover;
    z-index: -1;
  }

  .main-layout-header {
    padding: 3.6rem 10rem 0;
  }

  .footer-zone {
    position: absolute;
    bottom: 0;
    @apply tw-inset-x-0
  }
</style>

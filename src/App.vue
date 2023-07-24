<template>
  <div id="app">
    <Loader/>
    <Modal />
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
    <teleport to="body">
      <video id="bg-video" autoplay muted loop>
        <source src="/videos/bg.mp4" type="video/mp4">
      </video>
    </teleport>
  </div>
</template>

<script setup>
  import Loader from './components/Loader.vue';
  import MainLayout from './layouts/MainLayout.vue';
  import Modal from './components/Modal.vue';
</script>

<style scoped>
#bg-video {
  position: absolute;
  z-index: -100;
  @apply tw-inset-0 tw-w-screen tw-h-screen tw-object-cover;
}
</style>

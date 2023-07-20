<template>
  <transition name="fade">
    <div v-if="show" class="loader">
      <div class="logo">
        <img class="tw-w-full" width="414" height="107" src="../assets/images/logo.svg" alt="logo">
      </div>
    </div>
  </transition>
</template>

<script setup>
  import { ref } from 'vue';

  const show = ref(true || import.meta.env.PROD);

  function hide() {
    show.value = false;
  }

  setTimeout(hide, 1000);
</script>

<style scoped>
  .loader {
    position: fixed;
    z-index: 9900;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00758F;
  }

  .logo {
    width: 89.625rem;
  }

  .fade-leave-active {
    transform: translateY(-100%);
    transition-duration: 800ms;
  }
</style>

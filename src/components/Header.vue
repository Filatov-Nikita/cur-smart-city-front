<template>
  <header class="header">
    <div class="header-left">
      <div class="logo">
        <img class="tw-w-full" width="414" height="107" src="../assets/images/logo.svg" alt="logo">
      </div>
      <Breadcrumbs />
    </div>
    <Today />
  </header>
</template>

<script setup>
  import Today from '../components/Today.vue';
  import Breadcrumbs from '../components/Breadcrumbs.vue';
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    border-radius: 2.25rem;
    background: radial-gradient(468.70% 70.89% at 0.00% 100.00%, rgba(19, 50, 58, 0.86) 0%, rgba(34, 69, 79, 0.84) 46.88%, rgba(34, 69, 79, 0.46) 100%);
    mix-blend-mode: hard-light;
  }

  .logo {
    width: 25.875rem;
  }


  .header-left {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
</style>

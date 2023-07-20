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
    padding: 1.5rem 2rem;
    border-radius: 1.5rem;
    background: rgba(22, 62, 87, 0.48);
  }

  .logo {
    width: 16.3125rem;
  }


  .header-left {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
</style>

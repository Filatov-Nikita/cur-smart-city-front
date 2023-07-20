<template>
  <div id="app">
    <Loader/>
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
  </div>
</template>

<script setup>
  import Loader from './components/Loader.vue';
  import MainLayout from './layouts/MainLayout.vue';
</script>

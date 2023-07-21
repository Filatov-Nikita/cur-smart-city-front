<template>
  <div id="app">
    <Loader/>
    <Modal />
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
  </div>
</template>

<script setup>
  import Loader from './components/Loader.vue';
  import MainLayout from './layouts/MainLayout.vue';
  import Modal from './components/Modal.vue';
</script>

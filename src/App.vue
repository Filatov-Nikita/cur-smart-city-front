<template>
  <div id="app">
    <Loader/>
    <DistrictsList />
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
  </div>
</template>

<script setup>
  import Loader from './components/Loader.vue';
  import DistrictsList from './components/DistrictsList.vue';
  import MainLayout from './layouts/MainLayout.vue';
</script>

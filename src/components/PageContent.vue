<template>
  <main class="main-zone">
    <MapAreas class="main-zone-map" :data="mapData" />
    <slot />
  </main>
</template>

<script setup>
  import MapAreas from './MapAreas.vue';

  defineProps({
    mapData: Object
  });
</script>
<style scoped>
  .main-zone {
    padding: 6rem 10rem;
    display: flex;
  }

  .main-zone-map {
    margin-right: 31rem;
  }
</style>

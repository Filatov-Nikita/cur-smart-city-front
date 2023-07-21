<template>
  <div class="main-zone">
    <MapAreas class="main-zone-map" :data="mapData" />
    <slot />
    <teleport to="#footer">
      <Footer v-bind="footerData" />
    </teleport>
  </div>
</template>

<script setup>
  import MapAreas from './MapAreas.vue';
  import Footer from './Footer.vue';

  defineProps({
    mapData: Object,
    footerData: Object
  });
</script>
<style scoped>
  .main-zone {
    padding-top: 3.5rem;
    padding-left: 8.56rem;
    display: flex;
  }

  .main-zone-map {
    margin-right: 13.3rem;
  }
</style>

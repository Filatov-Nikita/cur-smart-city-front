<template>
  <div class="area-zone">
    <slot />
    <teleport to="#footer">
      <Footer v-bind="footerData" />
    </teleport>
  </div>
</template>

<script setup>
  import Footer from './Footer.vue';
  import { onMounted, onUnmounted, watch } from 'vue';
  import { useDistrictsStore } from '../store/districts';
  import { useRoute } from 'vue-router';
  import { useAppStore } from '../store/app';

  const appStore = useAppStore();

  const route = useRoute();

  defineProps({
    footerData: Object
  });

  const areaStore = useDistrictsStore();

  function withZeroNum(num) {
    if(num < 10) return `0${num}`;
    return num.toString();
  }

  function getContent() {
    const layout = document.querySelector('.main-layout');
    if(!layout) return;
    const content = layout.querySelector('.main-content');
    if(!content) return;
    return content;
  }

  onMounted(() => {
    const content = getContent();
    if(!content) return;
    content.classList.add('area-content');
  });

  onUnmounted(() => {
    const content = getContent();
    if(!content) return;
    content.classList.remove('area-content');
    content.style.removeProperty('--url');
  });

  watch(() => areaStore.current, () => {
    const content = getContent();
    if(!content) return;

    const id = areaStore.current?.id;
    if(!id) return;
    content.style.setProperty('--url', `url("/images/areas/${withZeroNum(id)}.png")`);
  }, { immediate: true });

  watch(() => route.params?.district, (area) => {
    if(area) {
      appStore.setDistrict(+area);
    }
  });
</script>
<style scoped>
  .area-zone {
    padding: 2.5rem 2.5rem 0;
    display: flex;
  }

  .area-content {
    margin-left: auto;
  }
</style>
<style>
  .area-content::before {
    content: "";
    background-size: cover;
    background-image: var(--url);
    position: absolute;
    z-index: -1;
    @apply tw-inset-0;
  }
</style>

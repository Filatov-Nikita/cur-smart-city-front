<template>
  <router-link class="item" :to="path">
    <div class="content">
      <div class="icon">
        <Icon class="tw-h-full tw-max-w-full icon-svg" :name="icon" />
      </div>
      <div class="name" v-html="displayName"></div>
    </div>
    <svg class="cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279 306">
      <path d="M229.981 260.537C253.437 247.019 265.166 240.26 271.606 229.115C278.046 217.971 278.046 204.434 278.046 177.361L278.046 128.284C278.046 101.211 278.046 87.674 271.606 76.5294C265.166 65.3847 253.437 58.6257 229.981 45.1075L187.232 20.4708C163.847 6.9938 152.154 0.255287 139.318 0.252669C126.482 0.250051 114.786 6.98379 91.3957 20.4513L48.5607 45.1141C25.0882 58.6288 13.3519 65.3861 6.9068 76.5339C0.461727 87.6818 0.461726 101.224 0.461725 128.31L0.461723 177.335C0.461722 204.42 0.461721 217.963 6.90679 229.111C13.3519 240.258 25.0882 247.016 48.5607 260.53L91.3956 285.193C114.786 298.661 126.482 305.395 139.318 305.392C152.154 305.389 163.846 298.651 187.232 285.174L229.981 260.537Z" />
    </svg>
  </router-link>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    name: String,
    icon: String,
    path: String
  });

  const displayName = computed(() => {
    return props.name.split(' ').join('<br/>');
  });
</script>

<style scoped>
  .item {
    position: relative;
    width: 10.65rem;
    height: 12.275rem;
  }

  .cover {
    position: absolute;
    inset: 0;
    /* top: 0.4rem; */
    z-index: -1;
    fill: #005060;
  }

  .icon {
    width: 3rem;
    height: 3.8rem;
    text-align: center;
    margin: 0 auto 0.7rem;
  }

  .name {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    @apply tw-text-white tw-text-center;
  }

  .icon-svg{
    fill: #73E2F7;
  }

  .content {
    padding-top: 2.58rem;
  }
</style>

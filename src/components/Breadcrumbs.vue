<template>
  <div class="breadcrumbs" v-if="items.length > 0">
    <div class="item" v-for="item in items">
      <div class="icon" v-if="item.icon">
        <Icon class="tw-w-full tw-h-full" :name="item.icon" />
      </div>
      <div>
        <span>{{ item.label }}</span>
        <template v-for="child in item.children">
          <span> / </span>
          <span :class="child.classes">{{ child.label }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';

  const breadStore = useBreadcrumbsStore();

  const items = computed(() => breadStore.list);
</script>

<style scoped>
  .breadcrumbs {
    display: flex;
    gap: 3rem;
  }

  .item {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.125rem;
    @apply tw-text-white;
  }

  .item::before {
    content: "|";
    font-size: 4rem;
    line-height: 120%;
    letter-spacing: -0.25rem;
    font-weight: 300;
    font-style: normal;
    color: #03A1BF;
    margin-right: 4rem;
  }

  .icon {
    width: 3rem;
    height: 4rem;
    margin-right: 2rem;
  }
</style>

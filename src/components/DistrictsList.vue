<template>
  <transition name="fade">
    <div v-show="show" class="districts-list">
        <div class="rows">
          <div class="cols" v-for="row in rows">
            <DistrictItem
              v-for="area in row"
              :path="pathToBranch(area.id)"
              :icon="`districts-icon_${area.id}`"
              :name="area.name"
            />
          </div>
        </div>
    </div>
  </transition>
</template>

<script setup>
  import { computed, watch } from 'vue';
  import DistrictItem from './DistrictItem.vue';
  import { useDistrictsStore } from '../store/districts';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';
  import { useAppStore } from '../store/app';


  const breadcrumbsStore = useBreadcrumbsStore();
  const districtsStore = useDistrictsStore();
  const appStore = useAppStore();

  const list = computed(() => districtsStore.districts);

  const pathToBranch = computed(() => {
    return (areaId) => {
      if(appStore.branch === null) return '/';
      return `/branches/${appStore.branch}/${areaId}`;
    }
  });

  const rows = computed(() => {
    const rows = [];
    const len = list.value.length;
    let cols = 11;
    let from = 0;
    while(from < len) {
      const arr = list.value.slice(from, from + cols);
      rows.push(arr);
      from += cols;
      if(cols % 2 === 0) cols++;
      else cols--;
    }

    return rows;
  });

  const show = computed(() => {
    return appStore.showAreas;
  });

  function hide() {
    appStore.showAreas = false;
  }

  window.toggle = appStore.toggleAreas;


  watch(show, (val) => {
    if(val) {
      breadcrumbsStore.set('Выбрать район');
      breadcrumbsStore.freeze();
    } else {
      breadcrumbsStore.freeze(false);
      breadcrumbsStore.restore();
    }
  }, { immediate: true });
</script>
<style scoped>
  .districts-list {
    overflow: hidden;
    position: absolute;
    z-index: 8000;
    background-color: #00758F;
    @apply tw-inset-0;
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition-duration: 300ms;
  }

  .fade-leave-active {
    opacity: 0;
    transition-duration: 300ms;
  }

  .rows {
    padding: 15.12rem 0 0 14rem;
  }

  .cols {
    display: flex;
    gap: 0.55rem;
  }

  .cols:nth-child(2n) {
    margin-left: 5.5rem;
  }

  .cols:not(:first-child) {
    margin-top: -2.5rem;
  }
</style>

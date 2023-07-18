<template>
  <transition name="fade">
    <div v-show="show" class="districts-list">
      <MainLayout>
        <div class="rows">
          <div class="cols" v-for="(row, rowInd) in rows">
            <Tappable namespace="districts" v-for="(area, colInd) in row" :row="rowInd" :col="colInd" v-slot="{ isCurrent }">
              <DistrictItem :name="area.name" :icon="`districts-icon_${area.id}`" :active="isCurrent" />
            </Tappable>
          </div>
        </div>
      </MainLayout>
    </div>
  </transition>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import MainLayout from '../layouts/MainLayout.vue';
  import DistrictItem from './DistrictItem.vue';
  import { useDistrictsStore } from '../store/districts';

  const districtsStore = useDistrictsStore();

  const list = computed(() => districtsStore.districts);

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

  const show = ref(true);
</script>
<style scoped>
  .districts-list {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    z-index: 8000;
    left: 0;
    top: 0;
    @apply tw-bg-primary;
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
    padding: 8.4rem 20.18rem 0;
  }

  .cols {
    display: flex;
    gap: 0.95rem;
  }

  .cols:nth-child(2n) {
    margin-left: 9.1rem;
  }

  .cols:not(:first-child) {
    margin-top: -4.2rem;
  }
</style>

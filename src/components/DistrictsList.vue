<template>
  <transition name="fade">
    <div v-show="show" class="districts-list">
      <MainLayout>
        <div class="rows">
          <div class="cols" v-for="(row, rowInd) in rows">
            <Tappable v-for="(area, colInd) in row" :row="rowInd - 1000" :col="colInd" v-slot="{ isCurrent }" @ok="go(area.id)">
              <DistrictItem
                :ref="setRef(area.id)"
                :path="`/branches/building/${area.id}`"
                :icon="`districts-icon_${area.id}`"
                :name="area.name"
                :active="isCurrent"
              />
            </Tappable>
          </div>
        </div>
      </MainLayout>
    </div>
  </transition>
</template>

<script setup>
  import { computed, inject, ref, watch } from 'vue';
  import MainLayout from '../layouts/MainLayout.vue';
  import DistrictItem from './DistrictItem.vue';
  import { useDistrictsStore } from '../store/districts';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';

  const bS = useBreadcrumbsStore();
  const districtsStore = useDistrictsStore();

  const setNav = inject('setNav');
  const resetNav = inject('resetNav');

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

  const show = ref(false);

  const refs = {};

  function go(areaId) {
    if(refs[areaId] && refs[areaId].go) {
      refs[areaId].go();
      hide();
    }
  }

  function hide() {
    show.value = false;
  }

  function toggle() {
    show.value = !show.value;
  }

  window.toggle = toggle;

  function setRef(areaId) {
    return (e) => {
      refs[areaId] = e;
    }
  }

  watch(show, (val) => {
    if(val) {
      bS.set('Выбрать район');
      bS.freeze();
      setNav(-1000, 0);
    } else {
      bS.freeze(false);
      bS.restore();
      resetNav();
    }
  }, { immediate: true });
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
    padding: 8.4rem 19.5rem 0;
  }

  .cols {
    display: flex;
    gap: 0.95rem;
  }

  .cols:nth-child(2n) {
    margin-left: 9.2rem;
  }

  .cols:not(:first-child) {
    margin-top: -4.2rem;
  }
</style>

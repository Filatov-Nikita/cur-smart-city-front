<template>
  <PageContent :mapData="mapData" :footerData="{ videoSrc: '/videos/gos.mp4' }">
    <TableRoads class="tw-self-center" :cells="[
      {
        label: 'Общее количество заявлений',
        value: '146 904',
        icon: 'tables-gos-1'
      },
      {
        label: 'Обращения через ЕПГУ',
        value: '64 552',
        icon: 'tables-gos-2'
      },
      {
        label: 'Обращения через РПГУ',
        value: '14 375',
        icon: 'tables-gos-3'
      },
      {
        label: 'Обращения через РГАУ МФЦ',
        value: '4 871',
        icon: 'tables-gos-4'
      },
      {
        label: 'Обращения иным способом через интернет',
        value: '34 135',
        icon: 'tables-gos-5'
      },
    ]" />
  </PageContent>
</template>

<script setup>
  import PageContent from '../../../components/PageContent.vue';
  import TableRoads from '../../../components/Tables/Bashkorrtostan/TableRoads.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import Data from '../../../json/gosuls.json';
  import { computed } from 'vue';
  import { useAppStore } from '../../../store/app';

  const breadcrumbsStore = useBreadcrumbsStore();
  const appStore = useAppStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-gos',
      label: 'Госуслуги'
    },
    'Башкортостан'
  );

  const mapData = computed(() => {
    return Data['Госуслуги'].reduce((acc, area) => {
      acc[area.ID] = {};
      if(appStore.mapColors[area.color]) {
        acc[area.ID]['color'] = appStore.mapColors[area.color];
      }
      return acc;
    }, {});
  });
</script>
<style scoped>

</style>

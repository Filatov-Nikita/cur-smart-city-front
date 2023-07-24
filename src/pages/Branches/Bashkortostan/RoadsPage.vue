<template>
  <PageContent :mapData="mapData" :footerData="{ videoSrc: '/videos/transport.mp4' }">
    <TableRoads class="tw-self-center" :cells="[
      {
        label: 'Протяженность дорог',
        value: '1 086,95 км',
        icon: 'branches-road'
      },
      {
        label: 'Протяженность дорог с асфальтовым покрытием',
        value: '443,08 км',
        icon: 'tables-road-2'
      },
      {
        label: 'Проинспектировано дорог с асфальтовым покрытием',
        value: '100,00%',
        icon: 'tables-road-2'
      },
      {
        label: 'Всего выявлено дефектов (шт)',
        value: '815',
        icon: 'tables-road-3'
      },
      {
        label: 'Устранено дефектов дорог с асфальтовым покрытием',
        value: '96,56%',
        icon: 'tables-road-4'
      },
    ]" />
  </PageContent>
</template>

<script setup>
  import PageContent from '../../../components/PageContent.vue';
  import TableRoads from '../../../components/Tables/Bashkorrtostan/TableRoads.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import Data from '../../../json/data.json';
  import { computed } from 'vue';
  import { useAppStore } from '../../../store/app';

  const breadcrumbsStore = useBreadcrumbsStore();
  const appStore = useAppStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-road',
      label: 'Дороги'
    },
    'Башкортостан'
  );

  const mapData = computed(() => {
    return Data['дороги'].reduce((acc, area) => {
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

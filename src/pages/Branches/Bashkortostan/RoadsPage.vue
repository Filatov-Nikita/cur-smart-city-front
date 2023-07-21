<template>
  <PageContent :mapData="{ 1: { color: 'black' }, 2: { color: 'red' } }" :footerData="{ videoSrc: '/videos/test.mp4' }">
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

  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-road',
      label: 'Дороги'
    },
    'Башкортостан'
  );
</script>
<style scoped>

</style>

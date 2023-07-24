<template>
  <PageContent :mapData="mapData" :footerData="{ videoSrc: '/videos/build.mp4' }">
    <TableBuilding class="tw-self-center" :cells="[
      {
        label: 'Заявлений на получение разрушительной документации',
        value: '20 079',
        icon: 'tables-build-1'
      },
      {
        label: 'Выдано документов',
        value: '14 765',
        icon: 'tables-build-2'
      },
      {
        label: 'Заявлений в работе',
        value: '1 484',
        icon: 'tables-build-3'
      },

    ]" />
  </PageContent>
</template>

<script setup>
  import PageContent from '../../../components/PageContent.vue';
  import TableBuilding from '../../../components/Tables/Bashkorrtostan/TableBuilding.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { useAppStore } from '../../../store/app';
  import Data from '../../../json/data.json';
  import { computed } from 'vue';

  const breadcrumbsStore = useBreadcrumbsStore();
  const appStore = useAppStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-build',
      label: 'Строительство'
    },
    'Башкортостан'
  );

  const mapData = computed(() => {
    return Data['Строительство'].reduce((acc, area) => {
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

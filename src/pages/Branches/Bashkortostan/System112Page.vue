<template>
  <PageContent :mapData="mapData" :footerData="{ videoSrc: '/videos/112.mp4' }">
    <TableSystem112 class="tw-self-center" :cells="[
      {
        label: 'Вызов пожарных',
        value: '13 618',
        icon: 'tables-fire-1'
      },
      {
        label: 'Вызов газовой службы',
        value: '13 952',
        icon: 'tables-fire-2'
      },
      {
        label: 'Вызов полиции',
        value: '115 127',
        icon: 'tables-fire-3'
      },
      {
        label: 'Вызов «Антитеррор»',
        value: '632',
        icon: 'tables-fire-4'
      },
      {
        label: 'Вызов скорой',
        value: '304 424',
        icon: 'tables-fire-5'
      },
      {
        label: 'Вызов МЧС',
        value: '99 150',
        icon: 'tables-fire-6'
      },
    ]" />
  </PageContent>
</template>

<script setup>
  import PageContent from '../../../components/PageContent.vue';
  import TableSystem112 from '../../../components/Tables/Bashkorrtostan/TableSystem112.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { useAppStore } from '../../../store/app';
  import Data from '../../../json/data.json';
  import { computed } from 'vue';

  const appStore = useAppStore();
  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-fire',
      label: 'Система-112'
    },
    'Башкортостан'
  );

  const mapData = computed(() => {
    return Data['Система-112'].reduce((acc, area) => {
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

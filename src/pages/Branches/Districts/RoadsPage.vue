<template>
  <PageContentArea :footerData="{ videoSrc: '/videos/transport.mp4' }">
    <TableRoads class="tw-ml-auto" :cells="cells" />
  </PageContentArea>
</template>

<script setup>
  import PageContentArea from '../../../components/PageContentArea.vue';
  import TableRoads from '../../../components/Tables/Areas/TableRoads.vue';
  import { useDistrictsStore } from '../../../store/districts';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { computed } from 'vue';
  import { useAppStore } from '../../../store/app';
  import Data from '../../../json/data.json';

  const breadcrumbsStore = useBreadcrumbsStore();
  const areaStore = useDistrictsStore();
  const { getValue } = useAppStore();

  breadcrumbsStore.set(
    {
      label: 'Дороги',
      icon: 'branches-road'
    },
    areaStore.current?.name
  );

  const cells = computed(() => {
    if(!areaStore.current) return [];
    const area = Data['дороги'].find(area => areaStore.current.id === area.ID);
    if(!area) return [];
    return [
      {
        icon: 'branches-road',
        label: 'Протяженность дорог',
        value: getValue(area.Road_length_km, 'км'),
      },
      {
        icon: 'tables-road-2',
        label: 'Протяженность дорог с асфальтовым покрытием',
        value: getValue(area.Asphalt_length_km, 'км'),
      },
      {
        icon: 'tables-road-2',
        label: 'Проинспектировано дорог с асфальтовым покрытием',
        value: getValue(area.inspect_defects_asphalt_persent, '%'),
      },
      {
        icon: 'tables-road-3',
        label: 'Всего выявлено дефектов (шт)',
        value: getValue(area.Defects_asphalt_count),
      },
      {
        icon: 'tables-road-4',
        label: 'Устранено дефектов дорог с асфальтовым покрытием',
        value: getValue(area.Amount_of_works_asphalt_percent, '%'),
      },
    ]
  });
</script>

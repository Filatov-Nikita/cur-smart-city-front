<template>
  <PageContentArea :footerData="{ videoSrc: '/videos/gos.mp4' }">
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
  import Data from '../../../json/gosuls.json';

  const breadcrumbsStore = useBreadcrumbsStore();
  const areaStore = useDistrictsStore();
  const { getValue } = useAppStore();

  breadcrumbsStore.set(
    {
      label: 'Госуслуги',
      icon: 'branches-gos'
    },
    areaStore.current?.name
  );

  const cells = computed(() => {
    if(!areaStore.current) return [];
    const area = Data['Госуслуги'].find(area => areaStore.current.id === area.ID);
    if(!area) return [];
    return [
      {
        icon: 'tables-gos-1',
        label: 'Общее количество заявлений',
        value: getValue(area.Road_length_km),
      },
      {
        icon: 'tables-gos-2',
        label: 'Обращения через ЕПГУ',
        value: getValue(area.Asphalt_length_km),
      },
      {
        icon: 'tables-gos-3',
        label: 'Обращения через РПГУ',
        value: getValue(area.inspect_defects_asphalt_persent),
      },
      {
        icon: 'tables-gos-4',
        label: 'Обращения через РГАУ МФЦ',
        value: getValue(area.Defects_asphalt_count),
      },
      {
        icon: 'tables-gos-5',
        label: 'Обращения иным способом через интернет',
        value: getValue(area.Amount_of_works_asphalt_percent),
      },
    ]
  });
</script>

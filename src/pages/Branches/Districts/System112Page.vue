<template>
  <PageContentArea :footerData="{ videoSrc: '/videos/112.mp4' }">
    <TableSystem112 class="tw-ml-auto" :cells="cells" />
  </PageContentArea>
</template>

<script setup>
  import PageContentArea from '../../../components/PageContentArea.vue';
  import TableSystem112 from '../../../components/Tables/Areas/TableSystem112.vue';
  import { useDistrictsStore } from '../../../store/districts';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { useAppStore } from '../../../store/app';
  import { computed } from 'vue';
  import Data from '../../../json/data.json';

  const breadcrumbsStore = useBreadcrumbsStore();
  const areaStore = useDistrictsStore();
  const { getValue } = useAppStore();

  breadcrumbsStore.set(
    {
      label: 'Система-112',
      icon: 'branches-fire'
    },
    areaStore.current?.name
  );

  const cells = computed(() => {
    if(!areaStore.current) return [];
    const area = Data['Система-112'].find(area => areaStore.current.id === area.ID);
    if(!area) return [];
    return [
      {
        icon: 'tables-fire-1',
        label: 'Вызов пожарных',
        value: getValue(area.vizov_pozarnye),
      },
      {
        icon: 'tables-fire-2',
        label: 'Вызов газовой службы',
        value: getValue(area.vizov_gaz_slyjba),
      },
      {
        icon: 'tables-fire-3',
        label: 'Вызов полиции',
        value: getValue(area.vizov_policia),
      },
      {
        icon: 'tables-fire-4',
        label: 'Вызов «Антитеррор»',
        value: getValue(area.vizov_antiterror),
      },
      {
        icon: 'tables-fire-5',
        label: 'Вызов скорой',
        value: getValue(area.vizov_skoraya),
      },
      {
        icon: 'tables-fire-1',
        label: 'Вызов МЧС',
        value: getValue(area.vizov_MCS),
      },
     ];
  });
</script>

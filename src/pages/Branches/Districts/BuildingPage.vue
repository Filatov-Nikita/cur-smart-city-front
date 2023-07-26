<template>
  <PageContentArea :footerData="{ videoSrc: '/videos/build.mp4' }">
    <TableBuilding class="tw-ml-auto" :cells="cells" />
  </PageContentArea>
</template>

<script setup>
  import PageContentArea from '../../../components/PageContentArea.vue';
  import TableBuilding from '../../../components/Tables/Areas/TableBuilding.vue';
  import { useDistrictsStore } from '../../../store/districts';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { computed } from 'vue';
  import Data from '../../../json/data.json';
  import { useAppStore } from '../../../store/app';

  const breadcrumbsStore = useBreadcrumbsStore();
  const areaStore = useDistrictsStore();
  const { getValue } = useAppStore();

  breadcrumbsStore.set(
    {
      label: 'Строительство',
      icon: 'branches-build'
    },
    areaStore.current?.name
  );

  const cells = computed(() => {
    if(!areaStore.current) return [];
    const area = Data['Строительство'].find(area => areaStore.current.id === area.ID);
    if(!area) return [];
    return [
      {
        icon: 'tables-build-1',
        label: 'Заявлений на получение разрешительной документации',
        value: getValue(area['kol-vo_zayavleniy']),
      },
      {
        icon: 'tables-build-2',
        label: 'Выдано документов',
        value: getValue(area['vidannyh_dokymentov']),
      },
      {
        icon: 'tables-build-3',
        label: 'Заявлений в работе',
        value: getValue(area['zayavok_v_rabote']),
      },
     ];
  });
</script>

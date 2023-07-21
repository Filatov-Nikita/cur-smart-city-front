<template>
  <PageContent :mapData="{ 1: { color: 'black' }, 2: { color: 'red' } }" :footerData="{ videoSrc: '/videos/test.mp4' }">
    <TableBuilding class="tw-self-center" :cells="[
      {
        label: 'Заявлений на получение разрушительной документации',
        value: '526',
        icon: 'tables-build-1'
      },
      {
        label: 'Выдано документов',
        value: '438',
        icon: 'tables-build-2'
      },
      {
        label: 'Заявлений в работе',
        value: '36',
        icon: 'tables-build-3'
      },

    ]" />
  </PageContent>
</template>

<script setup>
  import PageContent from '../../../components/PageContent.vue';
  import TableBuilding from '../../../components/Tables/Bashkorrtostan/TableBuilding.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';

  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-build',
      label: 'Строительство'
    },
    'Башкортостан'
  );
</script>
<style scoped>

</style>

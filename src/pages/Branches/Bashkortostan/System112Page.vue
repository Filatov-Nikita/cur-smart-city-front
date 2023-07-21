<template>
  <PageContent :mapData="{ 2: { color: 'red' } }" :footerData="{ videoSrc: '/videos/test.mp4' }">
    <TableSystem112 class="tw-self-center" :cells="[
      {
        label: 'Вызов пожарных',
        value: '152',
        icon: 'tables-fire-1'
      },
      {
        label: 'Вызов газовой службы',
        value: '151',
        icon: 'tables-fire-2'
      },
      {
        label: 'Вызов полиции',
        value: '635',
        icon: 'tables-fire-3'
      },
      {
        label: 'Вызов «Антитеррор»',
        value: '1',
        icon: 'tables-fire-4'
      },
      {
        label: 'Вызов скорой',
        value: '1359',
        icon: 'tables-fire-5'
      },
      {
        label: 'Вызов МЧС',
        value: '920',
        icon: 'tables-fire-1'
      },
    ]" />
  </PageContent>
</template>

<script setup>
  import PageContent from '../../../components/PageContent.vue';
  import TableSystem112 from '../../../components/Tables/Bashkorrtostan/TableSystem112.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';

  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-fire',
      label: 'Система-112'
    },
    'Башкортостан'
  );
</script>
<style scoped>

</style>

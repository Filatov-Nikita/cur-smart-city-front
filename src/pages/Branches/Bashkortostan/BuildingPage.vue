<template>
  <MainLayout>
    <PageContent :mapData="{ 1: { color: 'black' }, 2: { color: 'red' } }">
      <TableBuilding />
    </PageContent>
    <template #footer>
      <Footer />
    </template>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '../../../layouts/MainLayout.vue';
  import PageContent from '../../../components/PageContent.vue';
  import Footer from '../../../components/Footer.vue';
  import TableBuilding from '../../../components/Tables/Bashkorrtostan/TableBuilding.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { inject, onUnmounted } from 'vue';

  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-build',
      label: 'Строительство'
    },
    'Башкортостан'
  );

  const setNav = inject('setNav');
  const resetNav = inject('resetNav');

  setNav(1000, 0);

  onUnmounted(() => {
    resetNav();
  })
</script>
<style scoped>

</style>

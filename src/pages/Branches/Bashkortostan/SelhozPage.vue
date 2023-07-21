<template>
  <PageContent :mapData="{ 1: { color: 'black' }, 2: { color: 'red' } }" :footerData="{ videoSrc: '/videos/test.mp4' }">
    <div class="tw-grow">
      <div class="tabs tw-mb-28">
        <ButtonTab class="tw-w-full" :active="tab === 'rast'" @click="tab = 'rast'">
          Растениеводство
        </ButtonTab>
        <ButtonTab class="tw-w-full" :active="tab === 'stad'" @click="tab = 'stad'">
          Умное стадо
        </ButtonTab>
      </div>
      <component :is="table" :cells="cells" />
    </div>
  </PageContent>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import PageContent from '../../../components/PageContent.vue';
  import TableSelRast from '../../../components/Tables/Bashkorrtostan/TableSelRast.vue';
  import TableSelStad from '../../../components/Tables/Bashkorrtostan/TableSelStad.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';

  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-sel',
      label: 'Сельское хозяйство'
    },
    'Башкортостан'
  );

  const tab = ref('rast');

  const tables = {
    rast: TableSelRast,
    stad: TableSelStad,
  };

  const data = {
    rast: [
      {
        label: 'Сельхозугодия (Га)',
        value: '212 057,65',
        icon: 'branches-sel'
      },
      {
        label: 'Пастбища (Га)',
        value: '78 949,57',
        icon: 'tables-sel-rast-2'
      },
      {
        label: 'Сенокосы (Га)',
        value: '52 888,23',
        icon: 'tables-sel-rast-3'
      },
      {
        label: 'Пашни (Га)',
        value: '78 109,41',
        icon: 'tables-sel-rast-4'
      },
    ],
    stad: [
      {
        label: 'Молочных коров (тыс. шт)',
        value: '816',
        icon: 'tables-sel-stad-1'
      },
      {
        label: 'Надои молока (тыс. тонн)',
        value: '435',
        icon: 'tables-sel-stad-2'
      },
      {
        label: 'Крупного рогатого скота (тыс. шт)',
        value: '252',
        icon: 'tables-sel-stad-3'
      },
      {
        label: 'Крупного рогатого скота (тыс. шт)',
        value: '125',
        icon: 'tables-sel-stad-4'
      },
      {
        label: 'Свиней (тыс. тонн)',
        value: '234',
        icon: 'tables-sel-stad-5'
      },
      {
        label: 'Мелкого рогатого скота (тыс. шт)',
        value: '246',
        icon: 'tables-sel-stad-6'
      },
      {
        label: 'Мелкого рогатого скота (тыс. шт)',
        value: '242',
        icon: 'tables-sel-stad-7'
      },
      {
        label: 'Лошадей (тыс. тонн)',
        value: '234',
        icon: 'tables-sel-stad-8'
      },
      {
        label: 'Птицы (тыс. шт)',
        value: '314',
        icon: 'tables-sel-stad-9'
      },
    ],
  }

  const table = computed(() => {
    return tables[tab.value];
  });

  const cells = computed(() => {
    return data[tab.value];
  });

</script>
<style scoped>
.tabs {
  display: flex;
  max-width: 53.375rem;
  gap: 1rem;
}
</style>

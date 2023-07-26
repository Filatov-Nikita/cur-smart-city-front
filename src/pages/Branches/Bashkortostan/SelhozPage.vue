<template>
  <PageContent :mapData="mapData" :footerData="{ videoSrc: '/videos/sel.mp4' }">
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
  import { useAppStore } from '../../../store/app';
  import Data from '../../../json/data.json';

  const appStore = useAppStore();
  const breadcrumbsStore = useBreadcrumbsStore();

  const getValue = appStore.getValue;

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
        value: getValue(6609168),
        icon: 'tables-sel-rast-1'
      },
      {
        label: 'Пастбища (Га)',
        value: getValue(1517068.84),
        icon: 'tables-sel-rast-2'
      },
      {
        label: 'Сенокосы (Га)',
        value: getValue(921692.65),
        icon: 'tables-sel-rast-3'
      },
      {
        label: 'Пашни (Га)',
        value: getValue(3378768.17),
        icon: 'tables-sel-rast-4'
      },
    ],
    stad: [
      {
        label: 'Молочных коров (тыс. шт)',
        value: getValue(121.8),
        icon: 'tables-sel-stad-1'
      },
      {
        label: 'Надои молока (тыс. тонн)',
        value: getValue(384.1),
        icon: 'tables-sel-stad-2'
      },
      {
        label: 'Крупного рогатого скота (тыс. шт)',
        value: getValue(409.8),
        icon: 'tables-sel-stad-3'
      },
      {
        label: 'Свиней (тыс. тонн)',
        value: getValue(562.8),
        icon: 'tables-sel-stad-5'
      },
      {
        label: 'Мелкого рогатого скота (тыс. шт)',
        value: getValue(82),
        icon: 'tables-sel-stad-6'
      },
      {
        label: 'Лошадей (тыс. тонн)',
        value: getValue(66.1),
        icon: 'tables-sel-stad-8'
      },
      {
        label: 'Птицы (тыс. шт)',
        value: getValue(9097.4),
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

  const mapData = computed(() => {
    return Data['сельское хоз-во'].reduce((acc, area) => {
      acc[area.ID] = {};
      if(appStore.mapColors[area.color]) {
        acc[area.ID]['color'] = appStore.mapColors[area.color];
      }
      return acc;
    }, {});
  });
  </script>
<style scoped>
.tabs {
  display: flex;
  max-width: 53.375rem;
  gap: 1rem;
}
</style>

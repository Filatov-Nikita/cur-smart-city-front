<template>
  <PageContentArea :footerData="{ videoSrc: '/videos/sel.mp4' }">
    <div class="content">
      <div class="tabs tw-mb-16">
        <ButtonTab class="tw-w-full" :active="tab === 'rast'" @click="tab = 'rast'">
          Растениеводство
        </ButtonTab>
        <ButtonTab class="tw-w-full" :active="tab === 'stad'" @click="tab = 'stad'">
          Умное стадо
        </ButtonTab>
      </div>
      <component :is="table" :cells="cells" />
    </div>
  </PageContentArea>
</template>

<script setup>
  import PageContentArea from '../../../components/PageContentArea.vue';
  import TableSelhozRast from '../../../components/Tables/Areas/TableSelhozRast.vue';
  import TableSelhozStad from '../../../components/Tables/Areas/TableSelhozStad.vue';
  import { useDistrictsStore } from '../../../store/districts';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { useAppStore } from '../../../store/app';
  import { ref, computed } from 'vue';
  import Data from '../../../json/data.json';

  const breadcrumbsStore = useBreadcrumbsStore();
  const areaStore = useDistrictsStore();
  const { getValue } = useAppStore();

  breadcrumbsStore.set(
    {
      label: 'Сельское хозяйство',
      icon: 'branches-sel'
    },
    areaStore.current?.name
  );


  const tab = ref('rast');

  const tables = {
    rast: TableSelhozRast,
    stad: TableSelhozStad,
  };

  const data = computed(() => {
    if(!areaStore.current) return [];
    const area = Data['сельское хоз-во'].find(area => areaStore.current.id === area.ID);
    if(!area) return { rast: [], stad: [] };

    return {
      rast: [
        {
          label: 'Сельхозугодия (Га)',
          value: getValue(area.rastenya_plochad_selhozygogiy_ga),
          icon: 'branches-sel'
        },
        {
          label: 'Пастбища (Га)',
          value: getValue(area.rastenya_pastbicha_ga),
          icon: 'tables-sel-rast-2'
        },
        {
          label: 'Сенокосы (Га)',
          value: getValue(area.rastenya_senokosy_ga),
          icon: 'tables-sel-rast-3'
        },
        {
          label: 'Пашни (Га)',
          value: getValue(area.rastenya_pashnya_ga),
          icon: 'tables-sel-rast-4'
        },
      ],
      stad: [
        {
          label: 'Молочных коров (тыс. шт)',
          value: getValue(area['stado_kol-vo_mol_korov']),
          icon: 'tables-sel-stad-1'
        },
        {
          label: 'Надои молока (тыс. тонн)',
          value: getValue(area['stado_nadoy_moloka_tonn']),
          icon: 'tables-sel-stad-2'
        },
        // {
        //   label: 'Крупного рогатого скота (тыс. шт)',
        //   value: '-',
        //   icon: 'tables-sel-stad-3'
        // },
        // {
        //   label: 'Крупного рогатого скота (тыс. шт)',
        //   value: '-',
        //   icon: 'tables-sel-stad-4'
        // },
        // {
        //   label: 'Свиней (тыс. тонн)',
        //   value: '-',
        //   icon: 'tables-sel-stad-5'
        // },
        // {
        //   label: 'Мелкого рогатого скота (тыс. шт)',
        //   value: '-',
        //   icon: 'tables-sel-stad-6'
        // },
        // {
        //   label: 'Мелкого рогатого скота (тыс. шт)',
        //   value: '-',
        //   icon: 'tables-sel-stad-7'
        // },
        // {
        //   label: 'Лошадей (тыс. тонн)',
        //   value: '-',
        //   icon: 'tables-sel-stad-8'
        // },
        // {
        //   label: 'Птицы (тыс. шт)',
        //   value: '-',
        //   icon: 'tables-sel-stad-9'
        // },
      ],
    }
  });

  const table = computed(() => {
    return tables[tab.value];
  });

  const cells = computed(() => {
    return data.value[tab.value];
  });
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.content {
  margin-left: auto;
  padding: 3rem;
  border-radius: 1.5rem;
  background: linear-gradient(38deg, rgba(0, 24, 32, 0.86) 0%, rgba(13, 29, 45, 0.86) 46.88%, rgba(15, 31, 47, 0.46) 100%);
}
</style>

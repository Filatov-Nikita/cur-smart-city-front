<template>
  <PageContent
    :footerData="{ nextClick: next, nextTitle: zoneData.title, videoSrc: zoneData.videoSrc }"
    :mapData="{ 1: { color: 'black' }, 2: { color: 'red' } }"
  >
    <div class="tw-grow">
      <div class="tabs tw-mb-16">
        <ButtonTab class="tw-w-full" :active="tab === 'people'" @click="tab = 'people'">
          Количество жителей
        </ButtonTab>
        <ButtonTab class="tw-w-full" :active="tab === 'citcenrb'" @click="tab = 'citcenrb'">
          Ситуационный центр Главы РБ
        </ButtonTab>
        <ButtonTab class="tw-w-full" :active="tab === 'portzab'" @click="tab = 'portzab'">
          Портал Забота
        </ButtonTab>
        <ButtonTab class="tw-w-full" :active="tab === 'sockom'" @click="tab = 'sockom'">
          Социальные коммуникации
        </ButtonTab>
      </div>
      <component :is="currentTab" :cells="currentCells" />
    </div>
  </PageContent>
</template>

<script setup>
  import { computed, watch, ref } from 'vue';
  import PageContent from '../../../components/PageContent.vue';
  import TableSupportPeople from '../../../components/Tables/Bashkorrtostan/TableSupportPeople.vue';
  import TableSupportPortZab from '../../../components/Tables/Bashkorrtostan/TableSupportPortZab.vue';
  import TableSupportSitCent from '../../../components/Tables/Bashkorrtostan/TableSupportSitCent.vue';
  import TableSupportSocKom from '../../../components/Tables/Bashkorrtostan/TableSupportSocKom.vue';
  import { useBreadcrumbsStore } from '../../../store/breadcrumbs';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-support',
      label: 'Обращение граждан'
    },
    'Башкортостан',
  );

  const zones = getZones();

  const tables = {
    people: TableSupportPeople,
    citcenrb: TableSupportSitCent,
    portzab: TableSupportPortZab,
    sockom: TableSupportSocKom
  };

  const tab = ref('people');

  const currentTab = computed(() => tables[tab.value]);

  if(!route.query.zone || !zones[route.query.zone]) router.replace({ query: { zone: 'ural' } });

  const zone = computed(() => route.query.zone ?? 'ural');

  const zoneData = computed(() => zones[zone.value] ?? zones.ural);

  const currentCells = computed(() => zoneData.value.tables[tab.value]);

  function next() {
    const keys = Object.keys(zones);
    const i = keys.findIndex(item => item === zone.value);
    if(i === -1) return;
    let nextI = Math.min(i + 1, keys.length - 1);
    router.push({ query: { zone: keys[nextI] } });
  }

  watch(zone, () => {
    breadcrumbsStore.back();
    breadcrumbsStore.append({
      label: 'Башкортостан',
      children: [
        {
          classes: zoneData.value.titleClass,
          label: zoneData.value.title,
        }
      ]
    });
  }, { immediate: true });

  function getZones() {
    return {
      ural: {
        title: 'Уральская зона',
        titleClass: 'tw-text-[#98CFF8]',
        videoSrc: '/videos/test.mp4',
        tables: getUralTables()
      },
      ug: {
        title: 'Южная зона',
        titleClass: 'tw-text-[#EA85A4]',
        videoSrc: '/videos/test.mp4',
        tables: getUgTables()
      },
      central: {
        title: 'Центральная',
        titleClass: 'tw-text-[#2FB0F8]',
        videoSrc: '/videos/test.mp4',
        tables: getCentralTables()
      },
      zapad: {
        title: 'Западная зона',
        titleClass: 'tw-text-[#32E564]',
        videoSrc: '/videos/test.mp4',
        tables: getZapadTables()
      },
    }
  }

  function getUralTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: '1 843 000'
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: '13 958'
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: '118'
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: '215'
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-1',
          value: '353'
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: '113'
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: '225'
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: '22 649'
        },
      ],
      sockom: [
        {
          label: 'Обращения на портал «Забота» Помощь семьям мобилизованных',
          icon: 'tables-support-zab-1',
          value: '3 958'
        },
        {
          label: 'Обращения на портал «Забота» Адресная помощь',
          icon: 'tables-support-zab-1',
          value: '1 186'
        },
        {
          label: 'Обращения на портал «Забота» Консультации',
          icon: 'tables-support-zab-1',
          value: '215'
        },
      ]
    }
  }

  function getUgTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: '1 843 00'
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: '13 95'
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: '11'
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: '21'
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-1',
          value: '35'
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: '11'
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: '22'
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: '22 64'
        },
      ],
      sockom: [
        {
          label: 'Обращения на портал «Забота» Помощь семьям мобилизованных',
          icon: 'tables-support-zab-1',
          value: '3 95'
        },
        {
          label: 'Обращения на портал «Забота» Адресная помощь',
          icon: 'tables-support-zab-1',
          value: '1 18'
        },
        {
          label: 'Обращения на портал «Забота» Консультации',
          icon: 'tables-support-zab-1',
          value: '21'
        },
      ]
    }
  }

  function getCentralTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: '1 843 '
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: '13'
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: '18'
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: '25'
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-1',
          value: '33'
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: '13'
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: '25'
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: '22'
        },
      ],
      sockom: [
        {
          label: 'Обращения на портал «Забота» Помощь семьям мобилизованных',
          icon: 'tables-support-zab-1',
          value: '398'
        },
        {
          label: 'Обращения на портал «Забота» Адресная помощь',
          icon: 'tables-support-zab-1',
          value: '116'
        },
        {
          label: 'Обращения на портал «Забота» Консультации',
          icon: 'tables-support-zab-1',
          value: '25'
        },
      ]
    }
  }

  function getZapadTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: '184'
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: '3 958'
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: '8'
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: '15'
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-1',
          value: '53'
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: '13'
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: '2'
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: '649'
        },
      ],
      sockom: [
        {
          label: 'Обращения на портал «Забота» Помощь семьям мобилизованных',
          icon: 'tables-support-zab-1',
          value: '58'
        },
        {
          label: 'Обращения на портал «Забота» Адресная помощь',
          icon: 'tables-support-zab-1',
          value: '1 861'
        },
        {
          label: 'Обращения на портал «Забота» Консультации',
          icon: 'tables-support-zab-1',
          value: '400'
        },
      ]
    }
  }
</script>
<style scoped>
.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 53.4rem;
  gap: 1rem;
}
</style>

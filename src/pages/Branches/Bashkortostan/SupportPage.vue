<template>
  <PageContent
    :footerData="{ nextClick: next, nextTitle: zoneData.title, videoSrc: zoneData.videoSrc }"
    :mapData="zoneData.mapData"
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
          Горячая линия
        </ButtonTab>
        <ButtonTab class="tw-w-full" :active="tab === 'sockom'" @click="tab = 'sockom'">
          Портал забота
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
  import Data from '../../../json/data.json';
  import { useAppStore } from '../../../store/app';


  const route = useRoute();
  const router = useRouter();

  const { getValue } = useAppStore();
  const breadcrumbsStore = useBreadcrumbsStore();

  breadcrumbsStore.set(
    {
      icon: 'branches-support',
      label: 'Обращение граждан'
    },
    'Цифровой Башкортостан',
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

  if(!route.query.zone || !zones[route.query.zone]) router.replace({ query: { zone: 'bash' } });

  const zone = computed(() => route.query.zone ?? 'bash');

  const zoneData = computed(() => zones[zone.value] ?? zones.bash);

  const currentCells = computed(() => zoneData.value.tables[tab.value]);

  function next() {
    const keys = Object.keys(zones);
    const i = keys.findIndex(item => item === zone.value);
    if(i === -1) return;
    let nextI = i + 1;
    if(nextI > keys.length - 1) nextI = 0;
    router.push({ query: { zone: keys[nextI] } });
  }

  watch(zone, (val) => {
    breadcrumbsStore.back();

    if(val === 'bash') {
      breadcrumbsStore.append('Цифровой Башкортостан');
    }
    else {
      breadcrumbsStore.append({
        label: 'Цифровой Башкортостан',
        children: [
          {
            classes: zoneData.value.titleClass,
            label: zoneData.value.title,
          }
        ]
      });
    }
  }, { immediate: true });

  function getMapData(zone, color) {
    return Data['обращения граждан']
          .filter(area => area.zona_Municipal_districts === zone)
          .reduce((acc, area) => {
            acc[area.ID] = { color };
            return acc;
          }, {});
  }

  function getZones() {
    return {
      bash: {
        title: 'Башкортостан',
        titleClass: 'tw-text-[#98CFF8]',
        videoSrc: '/videos/obr.mp4',
        tables: getBashTables(),
        mapData: {},
      },
      ural: {
        title: 'Уральская зона',
        titleClass: 'tw-text-[#98CFF8]',
        videoSrc: '/videos/obr.mp4',
        tables: getUralTables(),
        mapData: getMapData('Уральская зона', '#94CCF5'),
      },
      ug: {
        title: 'Южная зона',
        titleClass: 'tw-text-[#EA85A4]',
        videoSrc: '/videos/obr.mp4',
        tables: getUgTables(),
        mapData: getMapData('Южная зона', '#F36792'),
      },
      central: {
        title: 'Центральная зона',
        titleClass: 'tw-text-[#2FB0F8]',
        videoSrc: '/videos/obr.mp4',
        tables: getCentralTables(),
        mapData: getMapData('Центральная зона', '#27B1FE'),
      },
      zapad: {
        title: 'Западная зона',
        titleClass: 'tw-text-[#32E564]',
        videoSrc: '/videos/obr.mp4',
        tables: getZapadTables(),
        mapData: getMapData('Западная зона', '#1CCF4E'),
      },
      sevZapad: {
        title: 'Северо-Западная зона',
        titleClass: 'tw-text-[#FF8E4F]',
        videoSrc: '/videos/obr.mp4',
        tables: getSevZapadTables(),
        mapData: getMapData('Северо-Западная зона', '#FF8E4F'),
      },
      ufa: {
        title: 'Уфа',
        titleClass: 'tw-text-[#FF5656]',
        videoSrc: '/videos/obr.mp4',
        tables: getUfaTables(),
        mapData: getMapData('Уфа', '#FF5656'),
      },
    }
  }

  function getBashTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: getValue(4100000)
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(257126),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(1043),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(2496),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(6996),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(5303),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(3076),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(9827),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(723),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(498),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(872)
        },
      ]
    }
  }

  function getSevZapadTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: getValue(301000)
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(769614),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(2204),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(3900),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(16784),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(16369),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(6480),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(20506),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(4098),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(2557),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(3286)
        },
      ]
    }
  }

  function getUfaTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: getValue(1100000)
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(142883),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(758),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(1726),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(4738),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(3189),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(2248),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(7074),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(235),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(116),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(502)
        },
      ]
    }
  }

  function getUralTables() {
    return {
      people: [
        {
          label: 'Количество жителей',
          icon: 'tables-support-people-1',
          value: getValue(433000)
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(752459),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(2141),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(3809),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(16386),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(15999),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(6220),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(19475),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(3925),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(2429),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(3193)
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
          value: getValue(401000),
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(678980),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(1940),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(3497),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(14703),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(14326),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(5595),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(17552),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(3548),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(2207),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(2891),
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
          value: getValue(525000),
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(767085),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(2241),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(3924),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(16965),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(16522),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(6681),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(21107),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(4029),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(2511),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(3292),
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
          value: getValue(366000),
        }
      ],
      citcenrb: [
        {
          label: 'Обращений к врачу (амбулаторно)',
          icon: 'tables-support-citcen-1',
          value: getValue(796153),
        },
        {
          label: 'Вызов скорой помощи',
          icon: 'tables-support-citcen-2',
          value: getValue(2283),
        },
        {
          label: 'Звонков на линию «Антиковид»',
          icon: 'tables-support-citcen-3',
          value: getValue(4042),
        },
        {
          label: 'Обращений на тему СВО',
          icon: 'tables-support-citcen-6',
          value: getValue(17417),
        },
        {
          label: 'Звонков «Служба по контракту»',
          icon: 'tables-support-citcen-4',
          value: getValue(17022),
        },
        {
          label: 'Звонков на тему пособий и выплат',
          icon: 'tables-support-citcen-5',
          value: getValue(6829),
        },
      ],
      portzab: [
        {
          label: 'Звонков на горячую линию',
          icon: 'tables-support-zab-1',
          value: getValue(21733),
        },
      ],
      sockom: [
        {
          label: 'Помощь семьям мобилизованных',
          icon: 'tables-support-sockom-1',
          value: getValue(4191),
        },
        {
          label: 'Адресная помощь',
          icon: 'tables-support-sockom-2',
          value: getValue(2591),
        },
        {
          label: 'Консультации',
          icon: 'tables-support-sockom-3',
          value: getValue(3398),
        },
      ]
    }
  }
</script>
<style scoped>
.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 54rem;
  gap: 1rem;
}
</style>

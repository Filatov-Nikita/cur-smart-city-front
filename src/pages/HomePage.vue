<template>
  <div class="rows">
    <div class="branches">
      <RombItem
        ref="build"
        path="/branches/building/bashkortostan"
        :active="false"
        label="Строительство"
        icon="branches-build"
        text="заявлений: 20 079<br>выдано: 14 765"
      />
      <RombItem
        ref="fire"
        path="/branches/system112/bashkortostan"
        :active="false"
        label="Система-112"
        icon="branches-fire"
        text="обращений: 546 903"
      />
      <RombItem
        ref="road"
        path="/branches/roads/bashkortostan"
        :active="false"
        label="Дороги"
        icon="branches-road"
        text="47 368 км"
      />
    </div>
    <div class="branches">
      <RombItem
        ref="sel"
        path="/branches/selhoz/bashkortostan"
        :active="false"
        label="Сельское хозяйство"
        icon="branches-sel"
        text="5 198 Га"
      />
      <RombItem
        ref="gos"
        path="/"
        :active="false"
        label="Госуслуги"
        icon="branches-gos"
      />
      <RombItem
        ref="support"
        path="/branches/support/bashkortostan"
        :active="false"
        label="Обращение граждан"
        icon="branches-support"
        text="4 579 150"
      />
    </div>
  </div>
</template>

<script setup>
  import RombItem from '../components/RombItem.vue';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';

  const breadStore = useBreadcrumbsStore();
  breadStore.set('Цифровой Башкортостан');
</script>
<style scoped>
.branches {
  display: flex;
  gap: 2.25rem;
  width: 100%;
}

.rows {
  padding: 7.4rem 31.2rem 0;
}

.branches:nth-child(2n) {
  margin-left: 25.5rem;
  margin-top: -12.3rem;
}
</style>

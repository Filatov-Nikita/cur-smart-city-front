<template>
  <MainLayout>
    <div class="rows">
      <div class="branches">
        <Tappable v-slot="{ isCurrent }" :row="0" :col="0" @ok="go($refs.build)">
          <RombItem
            ref="build"
            path="/branches/building/bashkortostan"
            :active="isCurrent"
            label="Строительство"
            icon="branches-build"
            text="заявлений: 20 079<br>выдано: 14 765"
          />
        </Tappable>
        <Tappable v-slot="{ isCurrent }" :row="0" :col="1" @ok="go($refs.fire)">
          <RombItem
            ref="fire"
            path="/branches/system112/bashkortostan"
            :active="isCurrent"
            label="Система-112"
            icon="branches-fire"
            text="обращений: 546 903"
          />
        </Tappable>
        <Tappable v-slot="{ isCurrent }" :row="0" :col="2" @ok="go($refs.road)">
          <RombItem
            ref="road"
            path="/branches/roads/bashkortostan"
            :active="isCurrent"
            label="Дороги"
            icon="branches-road"
            text="47 368 км"
          />
        </Tappable>
      </div>
      <div class="branches">
        <Tappable v-slot="{ isCurrent }" :row="1" :col="0" @ok="go($refs.sel)">
          <RombItem
            ref="sel"
            path="/branches/selhoz/bashkortostan"
            :active="isCurrent"
            label="Сельское хозяйство"
            icon="branches-sel"
            text="5 198 Га"
          />
        </Tappable>
        <Tappable v-slot="{ isCurrent }" :row="1" :col="1" @ok="go($refs.gos)">
          <RombItem
            ref="gos"
            path="/"
            :active="isCurrent"
            label="Госуслуги"
            icon="branches-gos"
          />
        </Tappable>
        <Tappable v-slot="{ isCurrent }" :row="1" :col="2" @ok="go($refs.support)">
          <RombItem
            ref="support"
            path="/branches/support/bashkortostan"
            :active="isCurrent"
            label="Обращение граждан"
            icon="branches-support"
            text="4 579 150"
          />
        </Tappable>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '../layouts/MainLayout.vue';
  import RombItem from '../components/RombItem.vue';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';

  const breadStore = useBreadcrumbsStore();
  breadStore.set('Цифровой Башкортостан');

  function go(ref) {
    ref.go();
  }
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

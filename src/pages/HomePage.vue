<template>
  <div class="rows">
    <RombItem
      path="/branches/building/bashkortostan"
      label="Строительство"
      icon="branches-build"
      text="заявлений: 20 079<br>выдано: 14 765"
    />
    <RombItem
      path="/branches/system112/bashkortostan"
      label="Система-112"
      icon="branches-fire"
      text="обращений: 546 903"
    />
    <RombItem
      path="/branches/roads/bashkortostan"
      label="Дороги"
      icon="branches-road"
      text="47 368 км"
    />
    <RombItem
      path="/branches/selhoz/bashkortostan"
      label="Сельское хозяйство"
      icon="branches-sel"
      text="5 198 Га"
    />
    <RombItem
      path="/"
      label="Умный город"
      icon="branches-gos"
      text="Подстрочник"
      @click.prevent="showModal = true"
    />
    <RombItem
      path="/branches/support/bashkortostan"
      label="Обращение граждан"
      icon="branches-support"
      text="4 579 150"
    />
  </div>
  <Modal v-model="showModal">
    <video class="tw-w-full tw-h-full" controls autoplay>
      <source src="/videos/test.mp4" type="video/mp4">
    </video>
  </Modal>
</template>

<script setup>
  import RombItem from '../components/RombItem.vue';
  import Modal from '../components/Modal.vue';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';
  import { ref } from 'vue';

  const breadStore = useBreadcrumbsStore();
  breadStore.set('Цифровой Башкортостан');

  const showModal = ref(false);
</script>
<style scoped>
.rows {
  padding-top: 5.81rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, auto);
  column-gap: 2rem;
  row-gap: 1rem;
}
</style>

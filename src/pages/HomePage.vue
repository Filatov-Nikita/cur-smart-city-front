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
      label="Цифровой Башкортостан"
      icon="branches-finger"
      text="Воспроизвести"
      active
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
    <video class="modal-video" controls autoplay>
      <source src="/videos/test.mp4" type="video/mp4">
    </video>
  </Modal>
  <Modal v-model="showAbout">
    <video class="modal-video" controls autoplay>
      <source src="/videos/about.mp4" type="video/mp4">
    </video>
  </Modal>
  <teleport to="#footer">
    <div class="tw-pb-10 tw-pr-10">
      <button class="video-btn tw-ml-auto" @click="showAbout = true">
        <div class="video-btn-icon">
          <svg class="tw-w-full tw-h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M34 23.6456L16 35L16 12L34 23.6456Z" fill="#27D0F9" stroke="#27D0F9" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="video-btn-label">
          Смотреть видеоролик о ЦУР
        </div>
      </button>
    </div>
  </teleport>
</template>

<script setup>
  import RombItem from '../components/RombItem.vue';
  import Modal from '../components/Modal.vue';
  import { useBreadcrumbsStore } from '../store/breadcrumbs';
  import { ref } from 'vue';

  const breadStore = useBreadcrumbsStore();
  breadStore.set('Цифровой Башкортостан');

  const showModal = ref(false);
  const showAbout = ref(false);
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

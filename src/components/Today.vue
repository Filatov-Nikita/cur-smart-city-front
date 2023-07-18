<template>
  <div class="today">
    <div class="today-date">
      {{ date }}
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const now = new Date();

  const date = computed(() => {
    return `${now.getDate()} ${ months[now.getMonth()] } ${ now.getFullYear() } г.`;
  });

</script>
<style scoped>
  .today {
    display: flex;
    align-items: center;
    gap: 2.25rem;
  }

  .today::before {
    content: "";
    width: 1.875rem;
    height: 1.875rem;
    @apply tw-bg-blue tw-rounded-full;
  }

  .today-date {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1;
    @apply tw-text-white;
  }
</style>

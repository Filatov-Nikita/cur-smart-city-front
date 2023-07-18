<template>
  <slot :isCurrent="isCurrent" />
</template>

<script setup>
  import { computed, inject, onMounted, onUnmounted } from 'vue';

  const emit = defineEmits(['ok']);

  const tabCurrent = inject('tabCurrent');
  const setTab = inject('setTab');
  const removeTab = inject('removeTab');

  const symbol = Symbol();

  const props = defineProps({
    row: Number,
    col: Number,
  });

  const isCurrent = computed(() => {
    return tabCurrent.value?.symbol === symbol;
  });

  function onOk() {
    if(isCurrent.value) {
      emit('ok');
    }
  }

  onMounted(() => {
    setTab(props.row, props.col, {
      symbol,
      onOk
    });
  });

  onUnmounted(() => {
    removeTab(props.row, props.col);
  });
</script>

<template>
  <button class="button-tab" :class="{ active }">
    <slot />
  </button>
</template>

<script setup>
  defineProps({
    active: {
      default: false,
      type: Boolean
    }
  });
</script>

<style scoped>
.button-tab {
  border-radius: 0.5rem;
  padding: 1.5rem 2.25rem;
  color: #F5FDFE;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  border: 1.5px solid #0E5E75;
}

.active {
  background: #0E5E75;
}
</style>

<template>
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <use :href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup>
  defineProps({
    name: String,
  });
</script>

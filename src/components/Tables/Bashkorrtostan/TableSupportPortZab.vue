<template>
  <div class="table-building">
    <div class="cell" v-for="cell in cells">
      <div class="tw-flex tw-items-center tw-gap-8 tw-mb-6">
        <div class="icon">
          <Icon class="tw-w-12 tw-h-12" :name="cell.icon" />
          <svg class="tw-absolute tw-inset-0 -tw-z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
            <path d="M9.22932 25.7185C-3.07644 38.0242 -3.07644 57.9758 9.22932 70.2815L25.7185 86.7707C38.0243 99.0764 57.9758 99.0764 70.2815 86.7707L86.7707 70.2815C99.0764 57.9758 99.0764 38.0243 86.7707 25.7185L70.2815 9.22932C57.9758 -3.07644 38.0243 -3.07644 25.7185 9.2293L9.22932 25.7185Z" fill="#005060"/>
          </svg>
        </div>
        <div class="label">{{ cell.label }}</div>
      </div>
      <div class="value">{{ cell.value }}</div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    cells: Array
  });
</script>

<style scoped>
.table-building {
  display: grid;
  grid-template-columns: 100%;
}

.icon {
  min-width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.label {
  color: #D6F6FC;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 120%;
}

.value {
  font-size: 11rem;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.25rem;
  @apply tw-text-white;
}
</style>

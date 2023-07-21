<template>
  <Teleport to="body">
    <transition name="scale">
      <div v-if="modelValue" class="modal">
        <div class="content">
          <slot />
        </div>
        <button class="close" @click="hide">
          <svg class="tw-w-full tw-h-full" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.751953" y="49.972" width="70" height="7.54889" transform="rotate(-45 0.751953 49.972)" fill="white"/>
            <rect x="6.33789" width="70" height="7.54889" transform="rotate(45 6.33789 0)" fill="white"/>
          </svg>
        </button>
      </div>
    </transition>
    <div v-if="modelValue" class="overlay"></div>
  </Teleport>
</template>

<script setup>
  defineProps({
    modelValue: {
      default: false,
      type: Boolean
    },
  });

  const emit = defineEmits(['update:modelValue']);

  function hide() {
    emit('update:modelValue', false);
  }
</script>

<style scoped>
  .modal {
    position: fixed;
    z-index: 9900;
    padding: 4rem;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
  }

  .overlay {
    position: absolute;
    background-color: black;
    @apply tw-inset-0 tw-opacity-50;
    z-index: 9800;
  }

  .scale-enter-from {
    transform: scale(0);
  }

  .scale-enter-active {
    transition: transform 300ms;
  }

  .scale-leave-active {
    transform: scale(0);
    transition: transform 300ms;
  }

  .close {
    position: absolute;
    width: 3.45rem;
    height: 3.45rem;
    z-index: 10;
    right: 1rem;
    top: 1rem;
  }
</style>

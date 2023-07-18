<template>
  <router-link class="item" :to="path">
    <div class="content">
      <div class="icon">
        <Icon class="tw-w-full tw-h-full" :name="icon" />
      </div>
      <div class="bottom">
        <div class="label">{{ label }}</div>
        <div v-if="text" class="text" v-html="text"></div>
      </div>
    </div>
    <svg class="cover" :class="{ active }" xmlns="http://www.w3.org/2000/svg" width="785" height="876" viewBox="0 0 785 876">
      <path d="M688.811 719.481C735.752 692.451 759.222 678.936 772.111 656.641C785 634.346 785 607.263 785 553.095L785 322.905C785 268.738 785 241.654 772.111 219.359C759.222 197.064 735.752 183.549 688.811 156.519L488.45 41.1449C441.708 14.2288 418.336 0.770755 392.682 0.765525C367.028 0.760294 343.651 14.2088 296.897 41.1058L96.2574 156.532C49.2841 183.555 25.7975 197.067 12.8988 219.368C4.98595e-05 241.67 4.86751e-05 268.765 4.63063e-05 322.957L3.62489e-05 553.043C3.38801e-05 607.235 3.26957e-05 634.331 12.8988 656.632C25.7975 678.933 49.2841 692.445 96.2574 719.468L296.897 834.894C343.651 861.791 367.028 875.24 392.682 875.235C418.336 875.229 441.708 861.771 488.45 834.855L688.811 719.481Z" />
    </svg>
  </router-link>
</template>

<script setup>
import { useRouter } from 'vue-router';

  const router = useRouter();

  const props = defineProps({
    label: String,
    icon: String,
    path: String,
    text: {
      default: undefined,
      type: String
    },
    active: {
      default: false,
      type: Boolean
    }
  });

  function go() {
    router.push(props.path);
  }

  defineExpose({
    go
  });
</script>

<style scoped>
  .item {
    width: 49rem;
    height: 56.5rem;
    position: relative;
  }

  .cover {
    position: absolute;
    inset: 0;
    z-index: -1;
    top: 0.5rem;
    left: 0;
    fill: #005060;
  }

  .content {
    padding: 11rem 0;
    text-align: center;
  }

  .icon {
    width: 15rem;
    height: 15rem;
    margin: 0 auto 4rem;
  }

  .label {
    letter-spacing: -0.09rem;
    line-height: 1.2;
    font-weight: 500;
    font-size: 4.5rem;
    margin-bottom: 2.25rem;
    @apply tw-text-white;
  }

  .text {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.2;
    color: #D6F6FC;
  }

  .active {
    fill: #1c4c7c;
  }
</style>

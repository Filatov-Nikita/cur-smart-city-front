<template>
  <footer class="footer">
    <Tappable :row="1000" :col="0" v-slot="{ isCurrent }" @ok="appStore.toggleAreas">
      <button class="area-btn" :class="{ 'tw-opacity-50': isCurrent }" @click="appStore.toggleAreas">
        <div class="area-btn-label">
          {{ area ?? 'Выберите район' }}
        </div>
        <div class="area-btn-icon">
          <svg class="tw-w-full tw-h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M17.334 34.6666L29.334 23.4768L17.334 12" stroke="#F5FDFE" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
      </button>
    </Tappable>


    <div class="tw-grow"></div>

    <Tappable :row="1000" :col="1" v-slot="{ isCurrent }">
      <button class="video-btn tw-mr-12" :class="{ 'tw-opacity-50': isCurrent }">
        <div class="video-btn-icon">
          <svg class="tw-w-full tw-h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M34 23.6456L16 35L16 12L34 23.6456Z" fill="#27D0F9" stroke="#27D0F9" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="video-btn-label">
          Смотреть видеоролик
        </div>
      </button>
    </Tappable>

    <Tappable :row="1000" :col="2" v-slot="{ isCurrent }">
      <button class="help-btn" :class="{ 'tw-opacity-50': isCurrent }">
        <svg class="tw-w-full tw-h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5367 32.1481C-3.84554 47.5303 -3.84556 72.4698 11.5366 87.8519L32.1481 108.463C47.5303 123.846 72.4698 123.846 87.8519 108.463L108.463 87.8519C123.846 72.4697 123.846 47.5303 108.463 32.1481L87.8519 11.5366C72.4697 -3.84554 47.5303 -3.84555 32.1481 11.5366L11.5367 32.1481Z" fill="#005060"/>
          <path d="M80.2866 39.7157C77.1436 36.5595 73.2929 34.1986 69.0545 32.8292C64.816 31.4597 60.3119 31.1212 55.9164 31.8416C50.2472 32.7939 45.0029 35.4511 40.8821 39.4592C36.7614 43.4673 33.9598 48.636 32.8508 54.2765C31.7335 60.0999 32.4952 66.1278 35.0262 71.4901L33.4662 79.234C33.2674 80.2352 33.3185 81.2699 33.615 82.2467C33.9115 83.2234 34.4442 84.1119 35.166 84.8337C35.8878 85.5555 36.7763 86.0882 37.753 86.3847C38.7298 86.6812 39.7645 86.7323 40.7657 86.5336L48.4993 84.9863C52.2278 86.7492 56.3011 87.6622 60.4253 87.6595C62.2036 87.6588 63.9781 87.493 65.7257 87.1642C71.3688 86.0535 76.5392 83.2492 80.5479 79.1251C84.5566 75.001 87.2131 69.7531 88.1632 64.0808C88.884 59.6858 88.5453 55.1822 87.1754 50.9444C85.8054 46.7066 83.4437 42.8571 80.2866 39.7157ZM83.113 63.2944C82.5317 66.8631 81.1154 70.244 78.9796 73.1615C76.8438 76.0791 74.0488 78.4507 70.8225 80.0831C67.5962 81.7156 64.0299 82.5626 60.4142 82.5552C56.7984 82.5479 53.2355 81.6863 50.0159 80.0408C49.6575 79.8561 49.26 79.7598 48.8568 79.7599C48.6853 79.76 48.5143 79.7771 48.3462 79.811L39.7674 81.5267C39.5888 81.5621 39.4043 81.5529 39.2301 81.5C39.0559 81.447 38.8975 81.352 38.7688 81.2233C38.64 81.0945 38.545 80.9361 38.4921 80.7619C38.4392 80.5877 38.43 80.4032 38.4653 80.2246L40.181 71.6433C40.2945 71.0801 40.2135 70.495 39.9513 69.9838C38.3068 66.7635 37.4464 63.2002 37.44 59.5844C37.4336 55.9685 38.2815 52.4022 39.9146 49.1762C41.5477 45.9501 43.9197 43.1554 46.8376 41.0198C49.7554 38.8842 53.1365 37.468 56.7053 36.8867C60.3058 36.3006 63.994 36.5789 67.4657 37.6986C70.9375 38.8184 74.0932 40.7476 76.6727 43.327C79.2521 45.9065 81.1813 49.0622 82.3011 52.534C83.4208 56.0057 83.6991 59.6939 83.113 63.2944Z" fill="#73E2F7"/>
          <path d="M62.9779 67.234V57.0212C62.9779 56.3441 62.7089 55.6946 62.2301 55.2158C61.7513 54.737 61.1019 54.468 60.4247 54.468H57.8716C57.1944 54.468 56.545 54.737 56.0662 55.2158C55.5874 55.6946 55.3184 56.3441 55.3184 57.0212C55.3184 57.6984 55.5874 58.3478 56.0662 58.8266C56.545 59.3054 57.1944 59.5744 57.8716 59.5744V69.7872C57.8716 70.4643 58.1405 71.1137 58.6194 71.5925C59.0982 72.0714 59.7476 72.3404 60.4247 72.3404H62.9779C63.6551 72.3404 64.3045 72.0714 64.7833 71.5925C65.2621 71.1137 65.5311 70.4643 65.5311 69.7872C65.5311 69.11 65.2621 68.4606 64.7833 67.9818C64.3045 67.503 63.6551 67.234 62.9779 67.234Z" fill="#73E2F7"/>
          <path d="M60.4262 51.9149C61.8363 51.9149 62.9794 50.7718 62.9794 49.3617C62.9794 47.9516 61.8363 46.8085 60.4262 46.8085C59.0161 46.8085 57.873 47.9516 57.873 49.3617C57.873 50.7718 59.0161 51.9149 60.4262 51.9149Z" fill="#73E2F7"/>
        </svg>
      </button>
    </Tappable>
  </footer>
</template>

<script setup>
  import { computed } from 'vue';
  import { useDistrictsStore } from '../store/districts';
  import { useAppStore } from '../store/app';

  const districtsStore = useDistrictsStore();
  const appStore = useAppStore();

  const area = computed(() => {
    return districtsStore.current;
  });
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  padding: 0 10rem 3.1rem;
}
.area-btn, .video-btn {
  border-radius: 1rem;
  border: 2px solid #10D4F3;
  background: radial-gradient(468.70% 70.89% at 0.00% 100.00%, rgba(19, 50, 58, 0.86) 0%, rgba(34, 69, 79, 0.84) 46.88%, rgba(34, 69, 79, 0.46) 100%);
  mix-blend-mode: hard-light;
  padding: 2.25rem;
}
.video-btn {
  width: 33rem;
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.area-btn {
  width: 39rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.area-btn-label, .video-btn-label {
  font-size: 2.25rem;
  @apply tw-text-white tw-font-medium;
}

.area-btn-icon, .video-btn-icon {
  min-width: 3rem;
  height: 3rem;
}

.help-btn {
  width: 7.5rem;
  height: 7.5rem;
}
</style>

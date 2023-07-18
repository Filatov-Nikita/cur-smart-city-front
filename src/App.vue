<template>
  <div id="app">
    <Loader/>
    <DistrictsList />
    <router-view></router-view>
  </div>
</template>

<script setup>
  import Loader from './components/Loader.vue';
  import DistrictsList from './components/DistrictsList.vue';
  import { useTabNavigation } from './composables/tab-navigation';

  const { left, right, up, down, ok } = useTabNavigation();

  const stream = new EventSource('http://localhost:3000/stream');

  stream.addEventListener('move', function (e) {
    const { to } = JSON.parse(e.data);
    switch(to) {
      case 'left':
        left();
        break;
      case 'right':
        right();
        break;
      case 'up':
        up();
        break;
      case 'down':
        down();
        break;
    }
  });

  stream.addEventListener('ok', ok);
</script>

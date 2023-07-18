import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/HomePage.vue'),
      name: 'home'
    },
    {
      path: '/branches/building/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/BuildingPage.vue'),
    },
    {
      path: '/branches/roads/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/RoadsPage.vue'),
    },
    {
      path: '/branches/selhoz/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/SelhozPage.vue'),
    },
    {
      path: '/branches/support/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/SupportPage.vue'),
    },
    {
      path: '/branches/system112/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/System112Page.vue'),
    },
    {
      path: '/branches/building/:district',
      component: () => import('../pages/Branches/Districts/BuildingPage.vue'),
    },
    {
      path: '/branches/roads/:district',
      component: () => import('../pages/Branches/Districts/RoadsPage.vue'),
    },
    {
      path: '/branches/selhoz/:district',
      component: () => import('../pages/Branches/Districts/SelhozPage.vue'),
    },
    {
      path: '/branches/support/:district',
      component: () => import('../pages/Branches/Districts/SupportPage.vue'),
    },
    {
      path: '/branches/system112/:district',
      component: () => import('../pages/Branches/Districts/System112Page.vue'),
    },
  ]
});

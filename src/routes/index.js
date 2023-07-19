import { createRouter, createWebHistory } from 'vue-router';

import { useAppStore } from '../store/app';

function beforeBranch(branch, district, next) {
  const { setBranch, setDistrict } = useAppStore();
  setBranch(branch);
  setDistrict(district);
  next();
}

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
      beforeEnter(to, from, next) {
        beforeBranch('building', 0, next);
      },
    },
    {
      path: '/branches/roads/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/RoadsPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('roads', 0, next);
      },
    },
    {
      path: '/branches/selhoz/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/SelhozPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('selhoz', 0, next);
      },
    },
    {
      path: '/branches/support/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/SupportPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('support', 0, next);
      },
    },
    {
      path: '/branches/system112/bashkortostan',
      component: () => import('../pages/Branches/Bashkortostan/System112Page.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('system112', 0, next);
      },
    },
    {
      path: '/branches/building/:district',
      component: () => import('../pages/Branches/Districts/BuildingPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('building', +to.params.district, next);
      },
    },
    {
      path: '/branches/roads/:district',
      component: () => import('../pages/Branches/Districts/RoadsPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('roads', +to.params.district, next);
      },
    },
    {
      path: '/branches/selhoz/:district',
      component: () => import('../pages/Branches/Districts/SelhozPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('selhoz', +to.params.district, next);
      },
    },
    {
      path: '/branches/support/:district',
      component: () => import('../pages/Branches/Districts/SupportPage.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('support', +to.params.district, next);
      },
    },
    {
      path: '/branches/system112/:district',
      component: () => import('../pages/Branches/Districts/System112Page.vue'),
      beforeEnter(to, from, next) {
        beforeBranch('system112', +to.params.district, next);
      },
    },
  ]
});

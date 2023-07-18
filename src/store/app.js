import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore',  {
  state: () => ({
    branch: null,
    district: null
  }),
});

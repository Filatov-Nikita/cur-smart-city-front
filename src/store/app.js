import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore',  {
  state: () => ({
    branch: null,
    district: null
  }),
  actions: {
    setBranch(branch) {
      this.branch = branch;
    },
    setDistrict(district) {
      this.district = district;
    }
  }
});

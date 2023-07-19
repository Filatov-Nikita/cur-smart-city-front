import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore',  {
  state: () => ({
    branch: null,
    district: null,
    showAreas: false
  }),
  actions: {
    setBranch(branch) {
      this.branch = branch;
    },
    setDistrict(district) {
      this.district = district;
    },
    toggleAreas() {
      this.showAreas = !this.showAreas
    }
  }
});

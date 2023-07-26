import { defineStore } from 'pinia';

function formatVal(val) {
  const [num, num2 = ''] = val.toString().split('.');
  const parts = num.match(/\d{1,3}(?=(\d{3})*$)/g);
  return [parts.join(' '), num2].filter(val => !!val).join(',');
}

export const useAppStore = defineStore('appStore',  {
  state: () => ({
    branch: null,
    district: null,
    showAreas: false,
    mapColors: {
      r: '#9D1923',
      g: '#089742',
      y: '#85A118'
    }
  }),
  getters: {
    getValue() {
      return (val, after = '') => {
        if(val === undefined || val === null) return '-';
        return [formatVal(val), after].filter(val => !!val).join(' ');
      }
    }
  },
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

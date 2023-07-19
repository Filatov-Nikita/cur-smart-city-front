import { defineStore } from 'pinia';

export const useBreadcrumbsStore = defineStore('breadcrumbsStore',  {
  state: () => ({
    items: [],
    prevItems: [],
    freezen: false
  }),
  getters: {
    list() {
      return this.items.map((item) => {
        if(typeof item === 'string') return { label: item };

        if(Array.isArray(item.children)) {
          item = {
            ...item,
            children: item.children.map(child => {
              if(typeof child === 'string') return { label: child };
              return child;
            }),
          }
        }

        return item;
      });
    }
  },
  actions: {
    freeze(val = true) {
      this.freezen = val;
    },
    set(...list) {
      if(this.freezen) return;
      this.prevItems = [...this.items];
      this.items = [...list];
    },
    append(...list) {
      this.items.push(...list);
    },
    setChild(child) {
      if(this.items.length === 0) return;
      const ind = this.items.length - 1;
      if(typeof this.items[ind] === 'string') {
        this.items[ind] = { label: this.items[ind], children: [ child ] };
      } else {
        this.items[ind] = {
          ...this.items[ind],
          children: [ ...(this.items[ind]?.children ?? []), child  ]
        };
      }
    },
    restore() {
      this.set(...this.prevItems);
      this.prevItems = [];
    },
    back() {
      const newItems = [...this.items];
      newItems.pop();
      this.items = newItems;
    }
  }
});

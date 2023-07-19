import { computed, provide } from 'vue';
import { ref } from 'vue';

export const useTabNavigation = () => {
  const tabColIndex = ref(0);
  const tabRowIndex = ref(0);
  const tablist = ref({});

  const tabCurrent = computed(() => {
    return findTab(tabRowIndex.value, tabColIndex.value) ?? null;
  });

  function findTab(row, col) {
    if(!tablist.value[row]) return;
    return tablist.value[row][col];
  }

  function left() {
    let newRow = tabRowIndex.value;
    let newCol = tabColIndex.value - 1;
    const tab = tablist.value[newRow][newCol];
    if(!tab) {
      newRow = tabRowIndex.value - 1;
      if(!tablist.value[newRow]) {
        newRow = tabRowIndex.value
        newCol = tabColIndex.value
      } else {
        const cols = Object.keys(tablist.value[newRow]).map(n => +n);
        newCol = cols.slice(-1);
      }
    }

    tabRowIndex.value = newRow;
    tabColIndex.value = newCol;
  }

  function right() {
    let newRow = tabRowIndex.value;
    let newCol = tabColIndex.value + 1;
    const tab = tablist.value[newRow][newCol];
    if(!tab) {
      newRow = tabRowIndex.value + 1;
      if(!tablist.value[newRow]) {
        newRow = tabRowIndex.value
        newCol = tabColIndex.value
      } else {
        const cols = Object.keys(tablist.value[newRow]).map(n => +n);
        newCol = cols[0];
      }
    }

    tabRowIndex.value = newRow;
    tabColIndex.value = newCol;
  }

  function up() {
    let newRow = tabRowIndex.value - 1;
    let newCol = tabColIndex.value;
    if(!tablist.value[newRow]) newRow = tabRowIndex.value;
    const tab = tablist.value[newRow][tabColIndex.value];
    if(!tab) {
      const cols = Object.keys(tablist.value[newRow]).map(n => +n);
      newCol = cols.pop();
    }

    tabRowIndex.value = newRow;
    tabColIndex.value = newCol;
  }

  function down() {
    let newRow = tabRowIndex.value + 1;
    let newCol = tabColIndex.value;
    if(!tablist.value[newRow]) newRow = tabRowIndex.value;
    const tab = tablist.value[newRow][tabColIndex.value];
    if(!tab) {
      const cols = Object.keys(tablist.value[newRow]).map(n => +n);
      newCol = cols.pop();
    }

    tabRowIndex.value = newRow;
    tabColIndex.value = newCol;
  }

  function setTab(rowIndex, colIndex, data) {
    if(!tablist.value[rowIndex]) tablist.value[rowIndex] = {};
    tablist.value[rowIndex][colIndex] = data;
  }

  function removeTab(rowIndex, colIndex) {
    if(!tablist.value[rowIndex]) return;
    delete tablist.value[rowIndex][colIndex];
  }

  function ok() {
    Object.values(tablist.value).forEach((row) => {
      Object.values(row).forEach(col => {
        if(col.onOk) {
          col.onOk();
        }
      });
    });
  }

  function resetNav() {
    tabRowIndex.value = 0;
    tabColIndex.value = 0;
  }

  function setNav(row, col) {
    tabRowIndex.value = row;
    tabColIndex.value = col;
  }

  provide('tablist', tablist);
  provide('tabCurrent', tabCurrent);
  provide('setTab', setTab);
  provide('removeTab', removeTab);
  provide('resetNav', resetNav);
  provide('setNav', setNav);

  window.left = left;
  window.right = right;
  window.up= up;
  window.down = down;
  window.ok = ok;

  return {
    left,
    right,
    up,
    down,
    ok
  }
}

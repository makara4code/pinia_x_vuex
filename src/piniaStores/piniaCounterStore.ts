import { defineStore } from "pinia";

interface State {
  count: number;
}

export const useCounterStore = defineStore("counter", {
  state: (): State => ({
    count: 0,
  }),

  getters: {
    getDoubleCount: (state): number => state.count * 2,
  },

  actions: {
    increment(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
});

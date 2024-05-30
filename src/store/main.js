import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    isFetching: false,
  }),

  actions: {
    toggleIsFetching(arg) {
      this.isFetching = arg;
    },
  },
});

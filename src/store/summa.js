import { defineStore, getActivePinia } from "pinia";
import { useMainStore } from "./main";
import api from "@/utils/api/api";

export const useSummaStore = defineStore("summaStore", {
  state: () => ({
    summa: null,
    error: null,
  }),
  actions: {
    async addSponsorSumma(props) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        await api.post("/sponsor-summa-create/",{...props});
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});
import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api/api";
import { useMainStore } from "./main";

export const useSponsorStore = defineStore("sponsorStore", {
  state: () => ({
    datas: null,
    error: null,
  }),

  actions: {
    async getSponsors() {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/sponsor-list/", {
          page: 1,
          page_size: 10,
        });
        this.datas = await res.data.results;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

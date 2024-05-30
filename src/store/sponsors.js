import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api/api";
import { useMainStore } from "./main";

export const useSponsorStore = defineStore("sponsorStore", {
  state: () => ({
    datas: null,
    count: null,
    error: null,
  }),

  actions: {
    async getSponsors({ page, size }) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      console.log(page, size);
      try {
        const res = await api.get("/sponsor-list/", {
          page: page,
          page_size: size,
        });
        this.datas = await res.data.results;
        this.count = await res.data.count;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

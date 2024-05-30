import { defineStore } from "pinia";
import api from "@/utils/api";

export const useSponsorStore = defineStore("sponsorStore", {
  state: () => ({
    isLoading: false,
    sponsors: null,
  }),

  actions: {
    async getSponsors() {
      this.isLoading = true;
      try {
        const res = await api.get("/sponsor-list/", {
          params: { page: 1, page_size: 1 },
        });
        console.log(await res.json());
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

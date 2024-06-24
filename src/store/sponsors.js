import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api/api";
import { useMainStore } from "./main";

export const useSponsorStore = defineStore("sponsorStore", {
  state: () => ({
    datas: null,
    count: {
      page: null,
      size: null,
      amount: null,
    },
    detail: null,
    error: null,
    tarifs: null,
  }),

  actions: {
    async getSponsors({ page, size }) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/sponsor-list/", {
          page: page,
          page_size: size,
        });
        this.datas = await res.data.results;
        this.count = {
          ...this.count,
          page,
          size,
          amount: await res.data.count,
        };
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    async getSponsorDetail(id) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get(`/sponsor-detail/${id}/`);
        this.detail = res.data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    async EditSponsor(id, data) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        this.detail = await api.put(`/sponsor-update/${id}/`, data);
        this.getSponsorDetail(id);
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    async getTarifs() {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/tariff-list/");
        this.tarifs = res.data;
        console.log(res.data);
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

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
    search: "",
  }),

  actions: {
    filterSponsors(data) {
      console.log("filterSponsors => ", data);
      const { status, sum } = data;
      this.getSponsors({
        page: 1,
        size: 10,
        search: this.search,
        filterByStatus: status || null,
        filterBySum: sum || null,
      });
    },
    async addSponsor(data) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.post("/sponsors", data);
        this.detail = res.data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
      return this.detail;
    },
    async getSponsors(query = { page: 1, size: 10 }) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/sponsors", {
          page: query.page,
          size: query.size,
          search: this.search,
          ...query,
        });
        this.datas = await res.data.sponsors;
        this.count = {
          ...this.count,
          page: query.page,
          size: query.size,
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
        const res = await api.get(`/sponsors/${id}`);
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
        this.detail = await api.put(`/sponsors/${id}/`, data);
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
        const res = await api.get("/tarifs");
        const arr = [];
        res.data.forEach((e) => {
          arr.push(e.value);
        });
        this.tarifs = arr;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

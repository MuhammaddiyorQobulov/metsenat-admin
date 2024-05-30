import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api";
import { useMainStore } from "@/store/main";
export const useDashboardStore = defineStore("DashboardStore", {
  state: () => ({
    datas: null,
    error: null,
  }),

  actions: {
    async getDashboardDatas() {
      const mainStore = useMainStore(getActivePinia());
      mainStore.isFetching(true);
      try {
        const res = await api("/dashboard/");
        this.datas = await res.data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.isFetching(false);
      }
    },
  },
});

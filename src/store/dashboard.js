import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api/api";
import { useMainStore } from "@/store/main";
export const useDashboardStore = defineStore("DashboardStore", {
  state: () => ({
    datas: null,
    error: null,
  }),

  actions: {
    async getDashboardDatas() {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/dashboard");
        this.datas = await res.data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api/api";
import { useMainStore } from "./main";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token"),
    error: null,
  }),

  actions: {
    async Login({ username, password }) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.post("/auth/login", { username, password });
        const data = await res.data;
        localStorage.setItem("token", data.token);
        this.user = data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    LogOut() {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      setTimeout(() => {
        localStorage.removeItem("token");
        this.user = null;
        this.token = null;
        mainStore.toggleIsFetching(false);
      }, 1000);
    },
  },
});

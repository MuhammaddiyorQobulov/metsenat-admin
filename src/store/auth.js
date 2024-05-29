import { defineStore } from "pinia";
import api from "@/utils/api";
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    isLoading: false,
    user: null,
    token: localStorage.getItem("token"),
    error: null,
  }),

  actions: {
    async Login({ username, password }) {
      this.isLoading = true;
      try {
        const res = await api.post("/auth/login/", { username, password });
        const data = await res.data;
        localStorage.setItem("token", data.refresh);
        this.user = data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

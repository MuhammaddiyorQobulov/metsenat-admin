import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    isLoading: false,
    user: null,
    token: localStorage.getItem("token"),
  }),

  actions: {
    async Login({ username, password }) {
      this.isLoading = true;
      try {
        const res = await fetch("https://club.metsenat.uz/api/v1/auth/login/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const data = await res.json();
        this.user = data;
        localStorage.setItem("token", data.refresh);
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

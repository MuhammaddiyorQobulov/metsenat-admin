import { defineStore, getActivePinia } from "pinia";
import api from "@/utils/api/api";
import { useMainStore } from "./main";

export const useStudentsStore = defineStore("studentsStore", {
  state: () => ({
    students: null,
    count: {
      page: null,
      size: null,
      amount: null,
    },
    singleStudent: null,
    institutes: null,
    error: null,
  }),
  actions: {
    async getStudents({ page, size }) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/student-list/", {
          page: page,
          page_size: size,
        });
        this.students = res.data.results;
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

    async createStudent(data) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        this.singleStudent = await api.post("/student-create/", data);
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    async getInstitutes() {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/institute-list/");
        this.institutes = res.data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

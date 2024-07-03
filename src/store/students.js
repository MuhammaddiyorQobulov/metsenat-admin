import { defineStore, getActivePinia } from "pinia";
import { useMainStore } from "./main";
import api from "@/utils/api/api";

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
    
    sponsors: null,
    error: null,
  }),
  actions: {
    async getStudents({ page, size }) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get("/students", {
          page: page,
          page_size: size,
        });
        this.students = res.data;
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
        const res = await api.post("/students", data);
        this.singleStudent = res.data;
        this.error = null;
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
      return this.singleStudent;
    },

    async EditStudent(id, data) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        await api.put(`/students/${id}`, data);
        this.error = null;
        location.reload();
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },

    async getSingleStudent(id) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        const res = await api.get(`/students/${id}`);
        const sponsors = await api.get(`/student-sponsor/${id}`);
        this.singleStudent = res.data;
        this.sponsors = sponsors.data.sponsors;
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
        const res = await api.get("/institute-list");
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

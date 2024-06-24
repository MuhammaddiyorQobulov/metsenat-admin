import { defineStore, getActivePinia } from "pinia";
import { useMainStore } from "./main";
import api from "@/utils/api/api";
import { useStudentsStore } from "./students";
export const useSummaStore = defineStore("summaStore", {
  state: () => ({
    summa: null,
    error: null,
  }),
  actions: {
    async addSponsorSumma(props) {
      const mainStore = useMainStore(getActivePinia());
      const studentsStore = useStudentsStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        await api.post("/sponsor-summa-create/", { ...props });
        studentsStore.getSingleStudent(props.student);
        this.error = null;
      } catch (err) {
        this.error = err.message;
        alert("Homiyda Bunday summa mavjud emas");
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    async editSponsorSumma(id, data) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        await api.put(`/sponsor-summa-update/${id}/`, data);
        this.error = null;
        location.reload()
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
    async deleteSponsorSumma(id) {
      const mainStore = useMainStore(getActivePinia());
      mainStore.toggleIsFetching(true);
      try {
        await api.delete(`/sponsor-summa-delete/${id}/`);
        this.error = null;
        location.reload()
      } catch (err) {
        this.error = err.message;
      } finally {
        mainStore.toggleIsFetching(false);
      }
    },
  },
});

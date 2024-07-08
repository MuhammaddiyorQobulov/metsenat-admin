<script setup>
import { defineEmits, ref, onMounted } from "vue";
import MainButton from "@/components/MainButton.vue";
import { EyeIcon } from "@/assets/icons/eye";
import { ClearIcon } from "@/assets/icons/clear";
import { useStudentsStore } from "@/store/students";

const studentsStore = useStudentsStore();
const type = ref(null);
const otm = ref(null);

const emits = defineEmits(["closeModal"]);

const handleSubmit = () => {
  emits("closeModal");
  studentsStore.filterStudents({ type: type.value, otmId: otm.value });
};
const handleDefaultFilter = () => {
  type.value = null;
  otm.value = null;
  emits("closeModal");
};

onMounted(() => {
  studentsStore.getInstitutes();
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="main-title">Filter</h1>
    <div class="inputs">
      <label for="sponsor-type" class="main-title bold-5">TALABALIK TURI</label>
      <select id="sponsor-type" v-model="type" class="selects">
        <option :value="null">Barchasi</option>
        <option value="1">Bakalavr</option>
        <option value="2">Magistratura</option>
      </select>
    </div>
    <div class="inputs">
      <label for="sponsor-type" class="main-title bold-5">OTM</label>
      <select id="sponsor-type" v-model="otm" class="selects">
        <option :value="null">Barchasi</option>
        <option
          v-for="otm in studentsStore.institutes"
          :key="otm.id"
          :value="otm.id"
        >
          {{ otm.name }}
        </option>
      </select>
    </div>
    <div class="actions">
      <main-button
        type="submit"
        style="
          background-color: transparent;
          color: #2e5bff;
          border: 1px solid #2e5bff;
        "
        @onClick="handleDefaultFilter"
        title="Tozalash"
      >
        <clear-icon
      /></main-button>
      <main-button
        type="submit"
        @onClick="handleSubmit"
        title="Natijalarni ko'rish"
      >
        <eye-icon
      /></main-button>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.form {
  width: max-content;
  height: max-content;
  h1 {
    border-bottom: 2px solid $light-blue;
    padding-bottom: 1rem;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    max-width: 500px;
  }
  .selects {
    width: 100%;
    padding: 10px;
    background: rgba($light-blue, 0.2);
    border: 1px solid $light-blue;
    padding-right: 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .date-picker {
    width: 50%;
    height: 40px;
    background: rgba($light-blue, 0.2);
    border: 1px solid $light-blue;
  }

  .tags {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-content: center;
  }
  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
}
</style>

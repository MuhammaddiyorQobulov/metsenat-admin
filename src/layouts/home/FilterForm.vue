<script setup>
import { ref, reactive, defineEmits } from "vue";
import MainButton from "@/components/MainButton.vue";
import SummaTag from "@/layouts/components/SummaTag.vue";
import { EyeIcon } from "@/assets/icons/eye";

const emits = defineEmits(["closeModal"]);
const status = ref("barchasi");
const active = ref(0);
const dateRange = reactive([]);
const tags = [0, 1000000, 5000000, 7000000, 10000000, 30000000, 50000000];
const handleActive = (value) => {
  active.value = value;
};
const onChange = (_, dateString) => {
  dateRange.value = dateString;
};
const handleSubmit = () => {
  emits("closeModal");
};
const handleDefaultFilter = () => {
  status.value = "barchasi";
  active.value = 0;
  emits("closeModal");
  dateRange.value = [];
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="main-title">Filter</h1>
    <div class="inputs">
      <label for="sponsor-status" class="main-title bold-5">ARIZA HOLATI</label>
      <select id="sponsor-status" v-model="status" class="selects">
        <option value="barchasi">Barchasi</option>
        <option value="yangi">Yangi</option>
        <option value="moderatsiyada">Moderatsiyada</option>
        <option value="tasdiqlangan">Tasdiqlangan</option>
        <option value="bekor qilingan">Bekor qilingan</option>
      </select>

      <h3 class="main-title bold-5">Homiylik summasi</h3>
      <div class="tags">
        <summa-tag
          v-for="tag in tags"
          :key="tag"
          :count="tag"
          :active="active"
          @change="handleActive"
        />
      </div>

      <h3 class="main-title bold-5">Sana</h3>
      <div class="date">
        <a-range-picker
          class="date-picker"
          format="YYYY-MM-DD"
          @change="onChange"
          :defaultValue="dateRange"
        />
      </div>
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
        <eye-icon
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

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
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
  }
}
</style>

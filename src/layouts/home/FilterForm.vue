<script setup>
import { ref, reactive, defineEmits } from "vue";
import MainButton from "../../components/MainButton.vue";
import SummaTag from "../components/SummaTag.vue";

const emits = defineEmits(["closeModal"]);
const status = ref("barchasi");
const handleSubmit = () => {
  emits("closeModal");
};
const active = ref(0);
const dateRange = reactive([]);
const tags = [0, 1000000, 5000000, 7000000, 10000000, 30000000, 50000000];
const handleActive = (value) => {
  active.value = value;
};
const onChange = (_, dateString) => {
  dateRange.value = dateString;
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="main-title">Filter</h1>
    <label for="sponsor-status" class="main-title bold-500">ARIZA HOLATI</label>
    <select id="sponsor-status" v-model="status" class="selects">
      <option value="barchasi">Barchasi</option>
      <option value="yangi">Yangi</option>
      <option value="moderatsiyada">Moderatsiyada</option>
      <option value="tasdiqlangan">Tasdiqlangan</option>
      <option value="bekor qilingan">Bekor qilingan</option>
    </select>

    <h3 class="main-title bold-500">Homiylik summasi</h3>
    <div class="tags">
      <summa-tag
        v-for="tag in tags"
        :key="tag"
        :count="tag"
        :active="active"
        @change="handleActive"
      />
    </div>

    <h3 class="main-title bold-500">Sana</h3>
    <div class="date">
      <a-range-picker
        style="width: 50%; height: 40px"
        format="YYYY-MM-DD"
        @change="onChange"
      />
    </div>
    <main-button type="submit" @onClick="handleSubmit" title="Submit" />
  </form>
</template>

<style scoped lang="scss">
@import "../../styles/variables";
.form {
  width: 586px;
  height: 586px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .selects {
    width: 100%;
    padding: 10px;
    background: rgba($light-blue, 0.2);
    border: 1px solid $light-blue;
    padding-right: 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .tags {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-content: center;
  }
}
</style>

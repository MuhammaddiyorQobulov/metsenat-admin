<script setup>
import { ref, defineEmits } from "vue";
import MainButton from "../../components/MainButton.vue";
const emits = defineEmits(["closeModal"]);
const status = ref("barchasi");
const handleSubmit = () => {
  console.log(status.value);
  emits("closeModal");
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="main-title">Filter</h1>
    <hr />

    <label for="sponsor-status" class="main-title">ARIZA HOLATI</label>
    <select id="sponsor-status" v-model="status" class="selects">
      <option value="barchasi">Barchasi</option>
      <option value="yangi">Yangi</option>
      <option value="moderatsiyada">Moderatsiyada</option>
      <option value="tasdiqlangan">Tasdiqlangan</option>
      <option value="bekor qilingan">Bekor qilingan</option>
    </select>
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
}
</style>

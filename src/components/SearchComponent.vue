<script setup>
import { SearchIcon } from "@/assets/icons/search";
import { ref } from "vue";
const handleSearch = () => {
  console.log(model.value);
};
const model = ref("");
</script>

<template>
  <form @submit.prevent="handleSearch">
    <label for="search">
      <search-icon />
    </label>
    <input
      v-model="model"
      @input="handleSearch"
      type="text"
      id="search"
      placeholder="Izlash"
    />
  </form>
</template>

<style scoped lang="scss">
@import "../styles/variables";

form {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 7px;
  padding: 10px;
  width: max-content;
  background-color: $grey-white;
  color: $grey;
  input {
    border: none;
    outline: none;
    font-size: 15px;
    background: transparent;
  }
}
</style>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(["onClick"]);
</script>

<template>
  <button @click="emits('onClick')" class="btn-main">{{ title }}</button>
</template>

<style lang="scss" scoped>
.btn-main {
  border: none;
  background-color: #2e5bff;
  color: white;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  padding: 10px;
  width: 100%;
}
</style>

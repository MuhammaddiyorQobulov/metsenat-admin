<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "button",
  },
  style: {
    type: String,
  },
});
const emits = defineEmits(["onClick"]);
</script>

<template>
  <button
    :style="style"
    :type="type"
    @click="emits('onClick')"
    class="btn-main"
  >
    <p>{{ title }}</p>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/variables";
.btn-main {
  border: none;
  background-color: $blue;
  color: white;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
}
</style>

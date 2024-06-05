<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});
const emits = defineEmits(["onClick"]);
</script>

<template>
  <button :type="type" @click="emits('onClick')" class="btn-main">
    {{ title }} <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "../styles/variables";
.btn-main {
  border: none;
  background-color: $blue;
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

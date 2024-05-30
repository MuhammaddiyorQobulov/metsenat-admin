<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  isModal: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["closeModal"]);
</script>

<template>
  <div class="filter-modal" @click="emits('closeModal')">
    <div class="overlay">
      <div class="modal" @click.stop>
        <p>Filter</p>
        <p>Filter</p>
        <p>Filter</p>
        <p>Filter</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables";
.filter-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: $white;
    border-radius: 10px;
    padding: 20px;
  }
}
</style>

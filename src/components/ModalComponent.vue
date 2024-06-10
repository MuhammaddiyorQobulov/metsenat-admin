<script setup>
import { CloseIcon } from "@/assets/icons/close";
import { defineEmits } from "vue";

const emits = defineEmits(["closeModal"]);
</script>

<template>
  <div class="filter-modal" @click="emits('closeModal')">
    <div class="overlay">
      <div class="modal" @click.stop>
        <slot />
        <div @click="emits('closeModal')" class="close-icon">
          <close-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.filter-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: $white;
    border-radius: 10px;
    padding: 20px;
  }
  .close-icon {
    position: absolute;
    top: 2.5%;
    right: 2.5%;
    cursor: pointer;
  }
}
</style>

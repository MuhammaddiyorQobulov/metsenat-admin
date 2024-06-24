<script setup>
import { defineProps, defineEmits } from "vue";
import { TickIcon } from "@/assets/icons/tick";
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  active: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["change"]);
</script>
<template>
  <div
    class="sum-tag"
    :class="active == count && 'active'"
    @click="emits('change', count)"
  >
    <div class="text" v-if="!!count">
      <p class="bold-5">{{ props.count }}</p>
      <p class="text-blue">UZS</p>
    </div>
    <p class="bold-5" v-else>Boshqa</p>
    <tick-icon class="tick" v-if="count == active" />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.sum-tag {
  width: 100%;
  padding: 1rem 0;
  position: relative;
  border: 2px solid $grey;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  &:hover {
    background: $light-violet;
  }

  .text {
    gap: 0.7rem;
    display: flex;
  }
}
.active {
  border: 2px solid $blue;
}
.tick {
  position: absolute;
  top: -7.5%;
  right: -2.5%;
}
</style>

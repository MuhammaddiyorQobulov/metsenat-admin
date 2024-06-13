<template>
  <div>
    <a-pagination
      v-model:current="current"
      v-model:pageSize="size"
      :page-size="size"
      :page="current"
      :total="count"
      show-size-changer
      @change="onShowSizeChange"
    />
    <br />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["change"]);
const props = defineProps({
  page: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 },
  count: { type: Number, default: 1 },
});

const size = ref(props.pageSize);
const current = ref(props.page);
const onShowSizeChange = (current, pageSize) => {
  emits("change", current, pageSize);
};
</script>

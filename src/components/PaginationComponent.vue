<template>
  <div>
    <a-pagination
      show-size-changer
      v-model:current="current1"
      v-model:pageSize="size"
      :total="835"
      @change="onChange"
    />
    <br />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["onChange"]);
const props = defineProps({
  page: { type: Number, default: 3 },
  pageSize: { type: Number, default: 25 },
});

const size = ref(props.pageSize);
const current1 = ref(props.page);

const onChange = (current, pageSize) => {
    emits("onChange", current, pageSize);
};
</script>

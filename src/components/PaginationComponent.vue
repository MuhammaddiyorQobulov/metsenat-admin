<template>
  <div>
    <a-pagination
      v-model:current="current"
      v-model:pageSize="size"
      :page-size="size"
      :page="current"
      :total="sponsorStore.count.amount"
      show-size-changer
      @change="onShowSizeChange"
    />
    <br />
  </div>
</template>
<script setup>
import { useSponsorStore } from "@/store/sponsors";
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
const sponsorStore = useSponsorStore();

const emits = defineEmits(["change"]);
const props = defineProps({
  page: { type: Number, default: 1 },
  pageSize: { type: Number, default: 15 },
});

const size = ref(props.pageSize);
const current = ref(props.page);
const onShowSizeChange = (current, pageSize) => {
  emits("change", current, pageSize);
};
</script>

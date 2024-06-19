<script setup>
import { useRoute, useRouter } from "vue-router";
import { ChevronLeftIcon } from "@/assets/icons/chevron-left";
import { onMounted, ref } from "vue";
import { useStudentsStore } from "@/store/students";
import MainButton from "@/components/MainButton.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import AddSponsorSumma from "./AddSponsorSumma.vue";

const studentsStore = useStudentsStore();
const route = useRoute();
const router = useRouter();
const isAddSponsor = ref(false);

onMounted(() => {
  studentsStore.getSingleStudent(route.params.id);
});
</script>
<template>
  <div class="student" v-if="studentsStore.singleStudent">
    <div class="head container">
      <chevron-left-icon
        @click="router.push('/students')"
        style="cursor: pointer"
      />
      <h2 class="bold-5">{{ studentsStore.singleStudent.full_name }}</h2>
      <main-button
        title="Homiy qo'shish"
        style="
          border: 1px dashed #2e5bff;
          background: #edf1fd;
          color: #2e5bff;
          width: max-content;
          margin-left: auto;
        "
        @click="() => (isAddSponsor = true)"
      />
    </div>

    <modal-component
      v-if="isAddSponsor"
      @closeModal="() => (isAddSponsor = false)"
    >
      <add-sponsor-summa @closeModal="() => (isAddSponsor = false)" />
    </modal-component>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.student {
  .head {
    width: calc(100% - 240px);
    background: $secondary;
    padding: 20px 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
}
</style>

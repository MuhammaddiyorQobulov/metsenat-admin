<script setup>
import { useRoute, useRouter } from "vue-router";
import { ChevronLeftIcon } from "@/assets/icons/chevron-left";
import { EditIcon } from "@/assets/icons/edit";
import { onMounted, ref } from "vue";
import { useStudentsStore } from "@/store/students";
import MainButton from "@/components/MainButton.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import AddSponsorSumma from "./AddSponsorSumma.vue";

const studentsStore = useStudentsStore();
const route = useRoute();
const router = useRouter();
const isAddSponsor = ref(false);
const isEditStudent = ref(false);

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

    <div class="detail">
      <div class="about">
        <p class="bold-5 f-medium">Talaba haqida</p>
        <main-button
          styles="
            background: #edf1fd;
            width: max-content;
            color: #2e5bff;
            border: 1px dashed #2e5bff;
          "
          title="Tahrirlash"
          @onClick="() => (isEditStudent = true)"
        >
          <edit-icon />
        </main-button>
      </div>
      <div class="user">
        <div class="avatar">
          <img src="@/assets/images/user-avatar.png" alt="#" />
        </div>
        <p class="bold-5">
          {{ studentsStore.singleStudent.full_name }}
        </p>
      </div>

      <div class="row">
        <div class="col">
          <p class="bold-5 small text-muted">TELEFON RAQAM</p>
          <p class="bold-5">{{ studentsStore.singleStudent.phone }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="bold-5 small text-muted">OTM</p>
          <p class="bold-5">
            {{ studentsStore.singleStudent.institute.name }}
          </p>
        </div>
        <div class="col">
          <p class="bold-5 small text-muted">TALABALIK TURI</p>
          <p class="bold-5">
            {{
              studentsStore.singleStudent.type == 1
                ? "Bakalavr"
                : "Magistratura"
            }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="bold-5 small text-muted">AJRATILGAN SUMMA</p>
          <p class="bold-5">
            {{ studentsStore.singleStudent.given }}
          </p>
        </div>
        <div class="col">
          <p class="bold-5 small text-muted">CONTRACT MIQDORI</p>
          <p class="bold-5">
            {{ studentsStore.singleStudent.contract }}
          </p>
        </div>
      </div>
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
  background: url("@/assets/images/image.png") no-repeat fixed bottom;
  background-size: 50%;
  height: calc(100vh - 5.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  .head {
    width: calc(100% - 240px);
    background: $secondary;
    padding: 20px 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
  }
  .detail {
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 10px;
    background: $white;
    box-shadow: 0px 5px 40px 0px #00000008;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .about {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .user {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: 3rem;
      .col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
}
</style>

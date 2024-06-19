<script setup>
import { ChevronLeftIcon } from "@/assets/icons/chevron-left";
import { useRouter } from "vue-router";
import MainButton from "@/components/MainButton.vue";
import { useStudentsStore } from "@/store/students";
import { onMounted, reactive } from "vue";
import { PlusIcon } from "@/assets/icons/plus";

const router = useRouter();
const studentsStore = useStudentsStore();
const handleSubmit = () => {
  //   router.push("/students");
  console.log(student);
};

onMounted(() => {
  studentsStore.getInstitutes();
});

const student = reactive({
  type: null,
  full_name: null,
  phone: null,
  contract: null,
  institute: null,
});
</script>
<template>
  <div class="create">
    <div class="head container">
      <chevron-left-icon @click="router.go(-1)" style="cursor: pointer" />
      <h1 class="bold-5">Talaba Qo'shish</h1>
    </div>
    <div class="body">
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col">
            <label class="main-title bold-5" for="full_name"
              >FAMILYA ISM SHARIF</label
            >
            <input
              placeholder="F.I.SH"
              class="input"
              id="full_name"
              v-model="student.full_name"
            />
          </div>
          <div class="col">
            <label class="main-title bold-5" for="phone">TELEFON RAQAM</label>
            <input
              placeholder="+998YYXXXXXXX"
              class="input"
              id="phone"
              v-model="student.phone"
            />
          </div>

          <div class="inputs">
            <label for="otm" class="main-title bold-5">OTM</label>
            <select id="otm" v-model="student.institute" class="selects">
              <option :value="null">OTMni tanlang</option>
              <option
                v-for="otm in studentsStore.institutes"
                :key="otm.id"
                :value="otm.id"
              >
                {{ otm.name }}
              </option>
            </select>
          </div>
          <div class="inputs col">
            <label for="type" class="main-title bold-5">TALABALIK TURI</label>
            <select id="type" v-model="student.type" class="selects">
              <option :value="null">Barchasi</option>
              <option :value="1">Bakalavr</option>
              <option :value="2">Magistratura</option>
            </select>
          </div>
          <div class="col">
            <label class="main-title bold-5" for="contract"
              >KONTRACT SUMMASI</label
            >
            <input
              placeholder="Summani kiriting"
              class="input"
              id="contract"
              v-model="student.contract"
              type="number"
            />
          </div>
        </div>
        <main-button
          style="width: max-content; margin: 1rem 0 0 auto"
          title="Qo'shish"
          type="submit"
        >
          <plus-icon />
        </main-button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.create {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .head {
    width: calc(100% - 240px);
    background: $secondary;
    padding: 30px 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .body {
    width: 45rem;
    padding: 2rem;
    border-radius: 7px;
    background: $white;

    .row {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 1rem;
    }
    .inputs {
      display: flex;
      flex-direction: column;
      width: calc(100% - 0.5rem);
      .selects {
        width: 100%;
        padding: 9px;
        background: rgba($light-blue, 0.2);
        border: 1px solid $light-blue;
        padding-right: 20px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    .col {
      display: flex;
      flex-direction: column;
      width: calc(50% - 0.5rem);
      .input {
        width: calc(100% - 2.5rem);
      }
    }
  }
}
</style>

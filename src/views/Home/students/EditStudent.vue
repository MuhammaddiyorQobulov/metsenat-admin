<script setup>
import { reactive, defineEmits, onMounted } from "vue";
import { SaveIcon } from "@/assets/icons/save";
import MainButton from "@/components/MainButton.vue";
import { useStudentsStore } from "@/store/students";
import { useRoute } from "vue-router";

const studentStore = useStudentsStore();
const route = useRoute();
const emits = defineEmits(["closeModal"]);
const data = reactive({
  full_name: studentStore.singleStudent.full_name,
  phone: studentStore.singleStudent.phone,
  institute: studentStore.singleStudent.institute.id,
  contract: studentStore.singleStudent.contract,
});
const handleSubmit = async () => {
  try {
    if (data.full_name && data.phone && data.contract && data.institute) {
      studentStore.EditStudent(route.params.id, data);
      emits("closeModal");
    } else {
      alert("Ma'lumotlarni to'ldirishda xatolik");
    }
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  studentStore.getInstitutes();
});
</script>
<template>
  <form @submit.prevent="handleSubmit" class="student-edit">
    <h2 class="bold-5 main-title">Homiy Qo'shish</h2>
    <div class="inputs">
      <label class="label bold-5 main-title" for="full_name"
        >F.I.Sh. (Familiya Ism Sharifingiz)</label
      >
      <input id="full_name" v-model="data.full_name" class="selects" />
    </div>
    <div class="inputs">
      <label class="label bold-5 main-title" for="phone">Telefon raqam</label>
      <input
        type="tel"
        placeholder="+998YYXXXXXXX"
        id="phone"
        v-model="data.phone"
        class="selects"
      />
    </div>
    <div class="inputs">
      <label for="student" class="main-title bold-5">Homiy</label>
      <select id="student" v-model="data.institute" class="selects">
        <option
          v-for="item in studentStore.institutes"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="inputs">
      <label class="label bold-5 main-title" for="summa"
        >Kontrakt Miqdori</label
      >
      <input
        type="number"
        placeholder="summa"
        id="summa"
        v-model="data.contract"
        class="selects"
      />
    </div>
    <main-button
      title="Saqlash"
      type="submit"
      style="width: max-content; margin-left: auto"
    >
      <save-icon />
    </main-button>
  </form>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.student {
  &-edit {
    width: 40rem;
    h2 {
      border-bottom: 2px solid $light-blue;
      padding-bottom: 1rem;
    }
    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 0;
    }

    .selects {
      padding: 10px;
      background: rgba($light-blue, 0.2);
      border: 1px solid $light-blue;
      padding-right: 20px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>

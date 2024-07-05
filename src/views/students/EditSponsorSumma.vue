<script setup>
import { reactive, defineEmits, defineProps } from "vue";
import { SaveIcon } from "@/assets/icons/save";
import { DeleteIcon } from "@/assets/icons/delete";
import MainButton from "@/components/MainButton.vue";
import { useRoute } from "vue-router";
import { useStudentsStore } from "@/store/students";
import { useSummaStore } from "@/store/summa";

const studentsStore = useStudentsStore();
const summaStore = useSummaStore();
const route = useRoute();
const emits = defineEmits(["closeModal"]);
const props = defineProps({
  sponsor: {
    type: Object,
    required: true,
  },
});

const data = reactive({
  sponsor: props.sponsor.sponsor.id,
  summa: null,
});

const handleSubmitAddSponsor = async () => {
  try {
    if (data.sponsor && data.summa) {
      summaStore.editSponsorSumma(props.sponsor.id, {
        ...data,
        student: Math.floor(route.params.id),
      });
      emits("closeModal");
    } else {
      alert("Ma'lumotlarni to'ldirishda xatolik");
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteSponsorSumma = () => {
  summaStore.deleteSponsorSumma(route.params.id, props.sponsor._id);
  emits("closeModal");
};
</script>
<template>
  <form @submit.prevent="handleSubmitAddSponsor" class="sponsor-add">
    <h2 class="bold-5 main-title">Homiylarni Tahrirlash</h2>
    <div class="inputs">
      <label for="sponsor" class="main-title bold-5"
        >F.I.SH. (Familiya Ism Sharifingiz)</label
      >
      <select id="sponsor" v-model="data.sponsor" class="selects">
        <option
          v-for="{ sponsor } in studentsStore.sponsors"
          :key="sponsor.id"
          :value="sponsor.id"
          class="option"
        >
          {{ sponsor.full_name }}
        </option>
      </select>
    </div>
    <div class="inputs">
      <label class="label bold-5 main-title" for="summa"
        >Ajratilingan summa</label
      >
      <input
        type="number"
        placeholder="summa"
        id="summa"
        v-model="data.summa"
        class="selects"
      />
    </div>
    <div class="actions">
      <main-button
        title="O'chirish"
        @onClick="deleteSponsorSumma"
        style="
          width: max-content;
          color: #ff4945;
          border: 1px solid #ff4945;
          background: #ff494520;
        "
      >
        <delete-icon />
      </main-button>
      <main-button title="Qo'shish" type="submit" style="width: max-content">
        <save-icon />
      </main-button>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.sponsor {
  &-add {
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
    .actions {
      display: flex;
      justify-content: right;
      gap: 2rem;
    }
  }
}
</style>

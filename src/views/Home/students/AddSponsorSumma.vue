<script setup>
import { reactive, defineEmits, onMounted } from "vue";
import { PlusIcon } from "@/assets/icons/plus";
import MainButton from "@/components/MainButton.vue";
import { useSponsorStore } from "@/store/sponsors";
import { useRoute } from "vue-router";
import { useSummaStore } from "@/store/summa";

const summaStore = useSummaStore();
const sponsorsStore = useSponsorStore();
const route = useRoute();
const emits = defineEmits(["closeModal"]);
const data = reactive({
  sponsor: null,
  summa: null,
  student: null,
});
const handleSubmitAddSponsor = async () => {
  try {
    if (data.sponsor && data.summa >= 0) {
      emits("closeModal");
      summaStore.addSponsorSumma({
        ...data,
        student: Math.floor(route.params.id),
      });
    } else {
      alert("Ma'lumotlarni to'ldirishda xatolik");
    }
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  sponsorsStore.getSponsors({ page: 1, size: 30 });
});
</script>
<template>
  <form @submit.prevent="handleSubmitAddSponsor" class="sponsor-add">
    <h2 class="bold-5 main-title">Homiy Qo'shish</h2>
    <div class="inputs">
      <label for="sponsor" class="main-title bold-5">Homiy</label>
      <select id="sponsor" v-model="data.sponsor" class="selects">
        <option disabled :value="null">Homiyni Tanlang</option>
        <option
          v-for="item in sponsorsStore.datas"
          :key="item.id"
          :value="item.id"
          class="option"
        >
          {{ item.full_name }}
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
    <main-button
      title="Qo'shish"
      type="submit"
      style="width: max-content; margin-left: auto"
    >
      <plus-icon />
    </main-button>
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
  }
}
</style>

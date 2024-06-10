<script setup>
import MainButton from "@/components/MainButton";
import { SaveIcon } from "@/assets/icons/save";
import { reactive, onMounted, defineEmits } from "vue";
import { useSponsorStore } from "@/store/sponsors";
import { useRoute } from "vue-router";

const sponsorStore = useSponsorStore();
const route = useRoute();
const sponsor_id = route.params.id;
const emits = defineEmits(["closeModal"]);
const { comment, firm, full_name, is_legal, phone, sum } = sponsorStore.detail;

const data = reactive({
  full_name,
  phone,
  sum,
  is_legal,
  firm,
  comment,
});

onMounted(() => {
  sponsorStore.getSponsorDetail(sponsor_id);
});

const handleSubmit = () => {
  console.log(data);
  sponsorStore.EditSponsor(sponsor_id, data);
  emits("closeModal");
};
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h1 class="main-title">Tahrirlash</h1>
    <div class="personality">
      <p
        @click="data.is_legal = true"
        :class="data.is_legal && 'active'"
        class="entity is-legal"
      >
        YURIDIK SHAXS
      </p>
      <p
        @click="data.is_legal = false"
        :class="!data.is_legal && 'active'"
        class="natural is-legal"
      >
        JISMONIY SHAXS
      </p>
    </div>

    <label class="label" for="full_name"
      >F.I.Sh. (Familiya Ism Sharifingiz)</label
    >
    <input type="text" v-model="data.full_name" id="full_name" class="input" />

    <label class="label" for="phone">Telefon raqam </label>
    <input
      type="tel"
      class="input"
      id="phone"
      v-model="data.phone"
      pattern="^[+]?[8-9]{3}?[0-9]{9}"
      required
      placeholder="+998YYXXXXXXX"
    />
    <label class="label" for="sum">Homiylik summasi</label>
    <select id="sum" v-model="data.sum" class="input">
      <option defaultValue :value="1000000">1000000</option>
      <option :value="3000000">3000000</option>
      <option :value="5000000">5000000</option>
      <option :value="10000000">10000000</option>
      <option :value="20000000">20000000</option>
      <option :value="30000000">30000000</option>
    </select>

    <label class="label" for="firm">Tashkilot nomi</label>
    <input type="text" v-model="data.firm" id="firm" class="input" />

    <main-button title="Saqlash" type="submit">
      <save-icon />
    </main-button>
  </form>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.form {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .main-title {
    border-bottom: 2px solid $grey;
    padding-bottom: 1rem;
  }
  .personality {
    width: 100%;
    border: 1px solid $blue;
    border-radius: 10px;
    margin-top: 2rem;
    display: flex;
    overflow: hidden;
    .is-legal {
      padding: 0.5rem 1rem;
      color: $blue;
      width: 50%;
      text-align: center;
      cursor: pointer;
    }
  }

  .input {
    padding: 10px;
    background: rgba($light-blue, 0.2);
    border: 1px solid $light-blue;
    padding-right: 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .label {
    margin-top: 1rem;
  }
  .example {
    font-size: 10px;
  }
  .active {
    background: $blue;
    color: white !important;
  }
}
</style>

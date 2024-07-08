<script setup>
import { reactive, onMounted, ref } from "vue";
import MainButton from "@/components/MainButton.vue";
import SummaTag from "@/layouts/components/SummaTag.vue";
import { EyeIcon } from "@/assets/icons/eye";
import { useSponsorStore } from "@/store/sponsors";
import { useRouter } from "vue-router";
import { ChevronLeftIcon } from "@/assets/icons/chevron-left";
const sponsorStore = useSponsorStore();
const err = ref(null);
const router = useRouter();
const handleActive = (value) => {
  data.sum = value;
};

onMounted(() => {
  sponsorStore.getTarifs();
});
const handleSubmit = async () => {
  try {
    const res = await sponsorStore.addSponsor(data);
    if (!sponsorStore.error) {
      router.push("/sponsors/" + res._id);
    } else {
      err.value = sponsorStore.error;
    }
  } catch (error) {
    console.log(error);
    err.value = error.message;
  }
};
const data = reactive({
  full_name: null,
  phone: null,
  sum: 0,
  is_legal: false,
  firm: null,
  payment_type: ["44"],
});
</script>

<template>
  <div class="head container">
    <chevron-left-icon @click="router.go(-1)" style="cursor: pointer" />
    <h2 class="bold-5">Talaba Qo'shish</h2>
  </div>
  <div class="wrapper">
    <form @submit.prevent="handleSubmit" class="form">
      <h1 class="main-title">Homiy sifatida ariza topshirish</h1>

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
      <div class="inputs">
        <label for="sponsor-status" class="bold-5">F.I.SH</label>
        <input
          type="text"
          id="sponsor-status"
          v-model="data.full_name"
          class="input"
        />

        <label for="tel" class="bold-5">TELEFON RAQAMINGIZ</label>
        <input id="tel" type="tel" v-model="data.phone" class="input" />

        <label for="sponsor-status" class="bold-5">FIRMA NOMI</label>
        <input
          type="text"
          id="sponsor-status"
          v-model="data.firm"
          class="input"
        />

        <label class="bold-5">HOMIYLIK SUMMASI</label>
        <div class="tags">
          <summa-tag
            v-for="tag in sponsorStore.tarifs"
            :key="tag"
            :count="tag"
            :active="data.sum"
            @change="handleActive"
          />
          <summa-tag :count="0" :active="data.sum" @change="handleActive" />
          <input id="sum" type="number" v-model="data.sum" class="input" />
        </div>
      </div>
      <div class="actions">
        <main-button type="submit" title="Natijalarni ko'rish">
          <eye-icon
        /></main-button>
        <div v-if="err" class="err">{{ err }}</div>
      </div>
    </form>
    <div class="left-side"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
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
.wrapper {
  width: 100%;
  background-color: $primary;
  display: flex;
  .err {
    position: absolute;
    color: red;
    left: 35%;
    top: -50%;
  }
  .left-side {
    width: 100%;
    background: url("@/assets/images/image.png") no-repeat fixed bottom right;
    background-size: 50%;
  }
  .form {
    max-width: 500px;
    height: 100%;
    padding: 2rem 120px;
    .main-title {
      font-size: 25px;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 0;
    }
    .selects {
      width: 100%;
      padding: 10px;
      background: rgba($light-blue, 0.2);
      border: 1px solid $light-blue;
      padding-right: 20px;
      border-radius: 4px;
      cursor: pointer;
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

    .tags {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      justify-content: center;
    }
    .actions {
      position: relative;
      display: flex;
      gap: 1rem;
    }

    .active {
      background: $blue;
      color: white !important;
    }
  }
}
</style>

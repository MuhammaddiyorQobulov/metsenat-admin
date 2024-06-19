<script setup>
import { useRoute, useRouter } from "vue-router";
import { useSponsorStore } from "@/store/sponsors";
import { onMounted, ref } from "vue";
import { ChevronLeftIcon } from "@/assets/icons/chevron-left";
import { EditIcon } from "@/assets/icons/edit";
import ModalComponent from "@/components/ModalComponent.vue";
import MainButton from "@/components/MainButton.vue";
import SponsorEdit from "@/views/Home/Sponsor/SponsorEdit";

const sponsorStore = useSponsorStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  sponsorStore.getSponsorDetail(route.params.id);
});

const isModal = ref(false);
</script>

<template>
  <div v-if="sponsorStore.detail" class="sponsor-detail">
    <div class="head container">
      <chevron-left-icon @click="router.go(-1)" style="cursor: pointer" />
      <h2 class="bold-5">{{ sponsorStore.detail.full_name }}</h2>
      <nav :class="sponsorStore.detail.get_status_display" class="status">
        {{ sponsorStore.detail.get_status_display }}
      </nav>
    </div>
    <div class="detail">
      <div class="about">
        <p class="bold-5 f-medium">Homiy haqida</p>
        <main-button
          styles="
            background: #edf1fd;
            width: max-content;
            color: #2e5bff;
            border: 1px dashed #2e5bff;
          "
          title="Tahrirlash"
          @onClick="() => (isModal = true)"
        >
          <edit-icon />
        </main-button>
      </div>
      <div class="user">
        <div class="avatar">
          <img src="@/assets/images/user-avatar.png" alt="#" />
        </div>
        <p class="bold-5 f-medium">{{ sponsorStore.detail.full_name }}</p>
      </div>

      <div class="info row">
        <div class="col">
          <p class="bold-5 small text-muted">TELEFON RAQAM</p>
          <p class="bold-5 f-medium">{{ sponsorStore.detail.phone }}</p>
        </div>
        <div class="col">
          <p class="bold-5 small text-muted">HOMIYLIK SUMMASI</p>
          <p class="bold-5 f-medium">{{ sponsorStore.detail.sum }}</p>
        </div>
      </div>
    </div>
    <modal-component v-if="isModal" @closeModal="() => (isModal = false)">
      <sponsor-edit @closeModal="() => (isModal = false)" />
    </modal-component>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.sponsor-detail {
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

    .status {
      padding: 0.4rem 0.7rem;
      border-radius: 6px;
    }

    .Yangi {
      color: $blue;
      background: rgba($blue, 0.15);
    }
    .Moderatsiyada {
      color: $tag-orrange;
      background: rgba($tag-orrange, 0.15);
    }
    .Bekor {
      color: $grey;
      background: rgba($grey, 0.15);
    }
    .Tasdiqlangan {
      color: $green-tag;
      background: rgba($green-tag, 0.15);
    }
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
      .col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
}
</style>

<script setup>
import SearchComponent from "@/components/SearchComponent.vue";
import { FilterIcon } from "@/assets/icons/filter";
import ModalComponent from "@/components/ModalComponent.vue";
import SponsorsFilter from "./SponsorsFilter.vue";
import StudentsFilter from "./StudentsFilter.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useSponsorStore } from "@/store/sponsors";
import { useStudentsStore } from "@/store/students";

const route = useRoute();
const isModal = ref(false);
const sponsorStore = useSponsorStore();
const studentsStore = useStudentsStore();

const tabs = [
  {
    id: 1,
    title: "DASHBOARD",
    link: "/",
    name: "dashboard",
  },
  {
    id: 2,
    title: "HOMIYLAR",
    link: "/sponsors",
    name: "sponsors",
  },
  {
    id: 3,
    title: "TALABALAR",
    link: "/students",
    name: "students",
  },
];

const handleSearch = (value) => {
  if (route.name === "sponsors") {
    sponsorStore.search = value;
    sponsorStore.getSponsors({ page: 1, size: 10 });
  }
  if (route.name === "students") {
    studentsStore.search = value;
    studentsStore.getStudents({ page: 1, size: 10 });
  }
  console.log(route.name);
};
</script>

<template>
  <div class="header container">
    <table class="tabs">
      <thead>
        <router-link v-for="tab in tabs" :to="tab.link" :key="tab.id">
          <th :class="{ active: route.name === tab.name }">{{ tab.title }}</th>
        </router-link>
      </thead>
    </table>
    <div class="search-filter" v-if="route.name !== 'dashboard'">
      <search-component @on-change="handleSearch" />
      <div class="filter" @click="() => (isModal = true)">
        <filter-icon />
        <p>Filter</p>
      </div>
    </div>
    <modal-component v-if="isModal" @close-modal="() => (isModal = false)">
      <sponsors-filter
        v-if="route.name === 'sponsors'"
        @close-modal="() => (isModal = false)"
      />
      <students-filter
        v-if="route.name === 'students'"
        @close-modal="() => (isModal = false)"
      />
    </modal-component>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";
.header {
  display: flex;
  justify-content: space-between;
  background: $secondary;
  padding: 24px;
  .tabs {
    display: flex;
    width: max-content;
    thead {
      border-collapse: collapse;
      a {
        text-decoration: none;
      }
      th {
        border: 2px solid $light-blue;
        border-radius: 5px;
        padding: 10px 30px;
        color: rgba($blue, 0.6);
        cursor: pointer;
      }
      .active {
        background: $blue;
        color: $white;
      }
    }
  }
  .search-filter {
    display: flex;
    gap: 40px;
    .filter {
      color: $blue;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      padding: 10px 30px;
      border-radius: 5px;
      background: rgba($blue, 0.1);
    }
  }
}
</style>

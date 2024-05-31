<script setup>
import SearchComponent from "../../components/SearchComponent.vue";
import { FilterIcon } from "../../assets/icons/filter";
import FilterModal from "../../components/ModalComponent.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isModal = ref(false);

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
    <div class="search-filter">
      <search-component />
      <div class="filter" @click="isModal = true">
        <filter-icon />
        <p>Filter</p>
      </div>
    </div>
    <filter-modal v-if="isModal" @close-modal="() => (isModal = false)">
      <h1>Filter</h1>
    </filter-modal>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables";
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
        border: 2px solid $border;
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

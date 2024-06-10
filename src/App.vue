<script setup>
import NavBar from "./layouts/home/NavBar.vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import { useMainStore } from "./store/main";
const mainStore = useMainStore();
</script>

<template>
  <div class="views">
    <nav-bar />
    <loader-component :visible="mainStore.isFetching" />
    <router-view />
  </div>
</template>

<style></style>

<script setup>
import LoaderComponent from "./layouts/LoaderComponent.vue";
import { useAuthStore } from "./store/auth";
const authStore = useAuthStore();
</script>

<template>
  <div class="views">
    <loader-component :visible="authStore.isLoading" />
    <router-view />
  </div>
</template>

<style></style>

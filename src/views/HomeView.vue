<script setup>
import NavBar from "../layouts/home/NavBar.vue";
import HeaderSection from "../layouts/home/HeaderSection.vue";
</script>
<template>
  <nav-bar />
  <header-section />
  <div class="wrapepr">
    <router-view />
  </div>
</template>

<template>
  <div class="container">
    <div class="logo">
      <LogoIcon />
      <h1 class="title">METSENAT</h1>
      <nav class="tag">CLUB</nav>
    </div>
    <form @submit.prevent="handleSubmit" class="form">
      <h2>Kirish</h2>
      <div class="input">
        <label for="login">Login</label>
        <input v-model="login" type="text" id="login" />
      </div>
      <div class="input">
        <label for="parol">Parol</label>
        <input v-model="parol" type="text" id="parol" />
      </div>
      <button>Kirish</button>
    </form>
  </div>
</template>

<script setup>
import { LogoIcon } from "@/assets/icons/logo";
import { ref } from "vue";
const login = ref("");
const parol = ref("");
const handleSubmit = () => {
  console.log(parol.value, login.value);
};
</script>

<style scoped lang="scss">
.container {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .tag {
      padding: 5px 10px;
      border-radius: 7px;
      background-color: orangered;
      color: white;
    }
  }
  .form {
    background-color: white;
    border: 1px solid #e0e7ff;
    border-radius: 10px;
    padding: 32px;
    .input {
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        border: 1px solid #e0e7ff;
        background-color: #ebeffd;
        border-radius: 6px;
      }
    }
  }
}
</style>

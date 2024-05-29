<script setup>
import { LogoIcon } from "@/assets/icons/logo";
import { ref } from "vue";
const login = ref("");
const parol = ref("");
const handleSubmit = () => {
  console.log(parol.value, login.value);
};
</script>
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
        <label for="login">LOGIN</label>
        <input type="text" v-model="login" id="login" />
      </div>
      <div class="input">
        <label for="parol">PAROL</label>
        <input type="password" v-model="parol" id="parol" />
      </div>
      <button>Kirish</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
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
    h2 {
      padding-bottom: 30px;
    }
    .input {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 20px;
      input {
        border: 1px solid #e0e7ff;
        background-color: #ebeffd81;
        border-radius: 6px;
        width: 295px;
        height: 22px;
        font-size: 16px;
        padding: 10px;
        color: #2e384d76;
      }
      label {
        font-size: 12px;
        font-weight: 500;
        line-height: 14.22px;
        letter-spacing: 1.125px;
        text-align: left;
      }
    }
  }
}
</style>

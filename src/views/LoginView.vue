<script setup>
import MainButton from "@/components/MainButton.vue";
import { LogoIcon } from "@/assets/icons/logo";
import { ref } from "vue";
const login = ref("");
const parol = ref("");
const error = ref(null);
const handleSubmit = () => {
  if (login.value.length <= 4 || parol.value.length <= 4) {
    error.value = "Login yoki parol xatolik mavjud";
    return;
  }
  console.log(parol.value, login.value);
  error.value = null;
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
      <div class="check-bot"></div>
      <div class="btn">
        <main-button title="Kirish" />
        <p v-if="error" class="error">{{ error }}</p>
      </div>
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
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
    .btn {
      position: relative;
      .error {
        text-align: center;
        position: absolute;
        color: red;
        font-size: 12px;
        top: 105%;
      }
    }
  }
}
</style>

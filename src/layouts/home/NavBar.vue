<script setup>
import { LogoIcon } from "@/assets/icons/logo";
import { UserIcon } from "@/assets/icons/user";
import { LogoutIcon } from "@/assets/icons/logout";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const HandleLogout = () => {
  authStore.LogOut();
  router.push("/login");
};
</script>

<template>
  <div class="nav-bar container">
    <div class="logo" @click="() => router.push('/')">
      <logo-icon />
      <div class="name">
        <h1 class="main-title">METSENAT</h1>
        <nav class="tag">PRO</nav>
      </div>
    </div>
    <div class="user-section">
      <div class="user">
        <p class="user-name">Prince</p>
        <nav class="user-icon">
          <user-icon />
        </nav>
      </div>
      <div class="log-out" @click="HandleLogout">
        <logout-icon />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables";
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: $white;
  position: sticky;
  top: 0;
  left: 0;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    .main-title {
      font-size: 25px;
      font-weight: 900;
      line-height: 27px;
    }

    .tag {
      border-radius: 7px;
      color: $green-tag;
    }
  }

  .user-section {
    display: flex;
    align-items: center;
    gap: 20px;

    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px 10px;
      border-radius: 6px;
      background: $secondary;
      .user-name {
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
      }
      .user-icon {
        width: 25px;
        height: 25px;
        background: $green-tag;
        padding: 5px;
        border-radius: 3px;
      }
    }
    .log-out {
      cursor: pointer;
    }
  }
}
</style>

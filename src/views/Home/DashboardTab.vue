<script setup>
import { onMounted } from "vue";
import { CopuraIcon } from "../../assets/icons/copura";
import { useDashboardStore } from "../../store/dashboard";

const dashboardStore = useDashboardStore();
onMounted(() => {
  dashboardStore.getDashboardDatas();
});
</script>

<template>
  <div class="container">
    <div class="costs" v-if="dashboardStore.datas">
      <div
        class="cost"
        v-for="cost in Object.keys(dashboardStore.datas)"
        :key="cost"
      >
        <nav class="tag">
          <copura-icon />
        </nav>
        <div>
          <p class="title">Cost</p>
          <p class="amount">{{dashboardStore.datas[cost]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables";
.costs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  .cost {
    width: 33%;
    display: flex;
    align-items: center;
    flex: flex-start;
    background: $white;
    border-radius: 10px;
    padding: 20px;
    gap: 10px;

    .tag {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      color: $blue;
      background: rgba($blue, 0.1);
      padding: 10px;
      border-radius: 10px;
    }
    .title {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      text-align: left;
      color: $title;
    }
    .amount {
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
      text-align: left;
    }
  }
}
</style>

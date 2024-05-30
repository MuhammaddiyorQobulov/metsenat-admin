<script setup>
import PaginationComponent from "../../components/PaginationComponent.vue";
import { useSponsorStore } from "@/store/sponsors";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { EyeIcon } from "@/assets/icons/eye";

const moment = require("moment");
const sponsorStore = useSponsorStore();
const { t } = useI18n();
onMounted(() => {
  sponsorStore.getSponsors({ page: 1, size: 10 });
});

const HandlePaginate = (page, size) => {
  // sponsorStore.getSponsors({ page: page, size: size });
  console.log(page, size);
};
</script>

<template>
  <div class="container" v-if="sponsorStore.datas">
    <table class="table" @click="() => console.log(sponsorStore.datas)">
      <thead>
        <tr class="header">
          <th class="title">#</th>
          <th class="title">{{ t("table.fio") }}</th>
          <th class="title">{{ t("table.tel") }}</th>
          <th class="title">{{ t("table.sponsor_cost") }}</th>
          <th class="title">{{ t("table.spent_cost") }}</th>
          <th class="title">{{ t("table.date") }}</th>
          <th class="title">{{ t("table.status") }}</th>
          <th class="title">{{ t("table.options") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="trow" v-for="data in sponsorStore.datas" :key="data">
          <td>{{ data.id }}</td>
          <td>{{ data.full_name }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.sum }}</td>
          <td>{{ data.spent }}</td>
          <td>{{ moment(data.created_at).format("YYYY-MM-DD") }}</td>
          <td :class="data.get_status_display">
            {{ data.get_status_display }}
          </td>
          <td>
            <div class="options">
              <eye-icon />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent :onChange="HandlePaginate" />
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables";
.table {
  width: 100%;
  border-collapse: collapse;

  tbody {
    display: table-row-group;
    margin-top: 20px;
    tr {
      background: $white;
      border-radius: 10px;
      border: 1px solid $border;
      margin-top: 30px;
      padding: 20px;
    }
  }

  th,
  td {
    text-align: start;
  }
}
</style>

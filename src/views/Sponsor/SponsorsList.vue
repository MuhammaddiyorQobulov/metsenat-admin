<script setup>
import PaginationComponent from "@/components/PaginationComponent.vue";
import { useSponsorStore } from "@/store/sponsors";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import CustomTable from "@/components/CustomTable";

const sponsorStore = useSponsorStore();
const { t } = useI18n();
onMounted(() => {
  sponsorStore.getSponsors({ page: 1, size: 15 });
});

const HandlePaginate = (page, size) => {
  sponsorStore.getSponsors({ page, size });
};

const TableHead = [
  {
    title: "#",
    dataIndex: "index",
    key: "1",
  },
  {
    title: "F.I.SH",
    dataIndex: "full_name",
    key: "2",
  },
  {
    title: "TEL.RAQAMI",
    dataIndex: "phone",
    key: "3",
  },
  {
    title: "HOMIYLIK SUMMASI",
    dataIndex: "sum",
    key: "4",
    isUzs: true,
  },
  {
    title: "SARFLANGAN SUMMA",
    dataIndex: "spent",
    key: "5",
    isUzs: true,
  },
  {
    title: "SANA",
    dataIndex: "created_at",
    key: "6",
  },
  {
    title: "HOLATI",
    dataIndex: "get_status_display",
    key: "7",
  },
  {
    title: "AMALLAR",
    dataIndex: "actions",
    key: "8",
    link: "sponsors",
  },
];
</script>

<template>
  <div class="container" v-if="sponsorStore.datas">
    <custom-table :body="sponsorStore.datas" :head="TableHead" />
    <div class="pagination">
      <p>
        {{ sponsorStore.count.amount }} {{ t("table.shows.from") }}
        {{ sponsorStore.count.page + "-" + sponsorStore.count.size }}
        {{ t("table.shows.showing") }}
      </p>
      <PaginationComponent
        @change="HandlePaginate"
        :count="sponsorStore.count.amount"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}
</style>

<script setup>
import CustomTable from "@/components/CustomTable.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import { useStudentsStore } from "@/store/students";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const studentsStore = useStudentsStore();
const { t } = useI18n();
onMounted(() => {
  studentsStore.getStudents({ page: 1, size: 10 });
  studentsStore.getInstitutes();
});

const HandlePaginate = (page, size) => {
  studentsStore.getStudents({ page, size });
};

const TableHead = [
  {
    title: "#",
    dataIndex: "id",
    key: "1",
  },
  {
    title: "F.I.SH",
    dataIndex: "full_name",
    key: "2",
  },
  {
    title: "TALABALIK TURI",
    dataIndex: "type",
    key: "3",
  },
  {
    title: "OTM",
    dataIndex: "institute",
    key: "4",
  },
  {
    title: "AJRATILINGAN SUMMA",
    dataIndex: "given",
    key: "5",
  },
  {
    title: "KONTRAKT MIQDORI",
    dataIndex: "created_at",
    key: "6",
  },
  {
    title: "AMALLAR",
    dataIndex: "actions",
    key: "8",
    link: "student-detail",
  },
];
</script>

<template>
  <div class="container" v-if="studentsStore.students">
    <custom-table :body="studentsStore.students" :head="TableHead" />
    <div class="pagination">
      <p>
        {{ studentsStore.count.amount }} {{ t("table.shows.from") }}
        {{ studentsStore.count.page + "-" + studentsStore.count.size }}
        {{ t("table.shows.showing") }}
      </p>
      <PaginationComponent
        @change="HandlePaginate"
        :count="studentsStore.count.amount"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}
</style>

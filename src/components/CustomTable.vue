<script setup>
import { EyeIcon } from "@/assets/icons/eye";
import { useStudentsStore } from "@/store/students";
import { defineProps } from "vue";
const moment = require("moment");
const props = defineProps({
  head: Array,
  body: Array,
});
const studentsStore = useStudentsStore();

const getSingleInstitute = (id) => {
  return studentsStore.institutes
    ? studentsStore.institutes.find((item) => item.id === id)
    : { id: 0, name: "-" };
};
</script>

<template>
  <table>
    <thead class="thead">
      <tr class="header">
        <th class="title bold-5" v-for="tr in props.head" :key="tr.key">
          {{ tr.title }}
        </th>
      </tr>
    </thead>
    <tbody class="tbody">
      <tr class="trow" v-for="(tr, idx) in props.body" :key="tr.id">
        <td v-for="th in head" :key="th.key">
          <div v-if="th.dataIndex == 'index'">{{ idx + 1 }}</div>
          <router-link v-if="th.link" :to="'/' + th.link + '/' + tr.id">
            <EyeIcon />
          </router-link>
          <div v-if="th.dataIndex == 'created_at'">
            {{ moment(tr[th.dataIndex]).format("YYYY-MM-DD") }}
          </div>
          <div v-else-if="th.dataIndex == 'institute'">
            {{ getSingleInstitute(tr[th.dataIndex].id).name }}
          </div>
          <div v-else-if="th.dataIndex == 'type'">
            {{ tr[th.dataIndex] == 1 ? "Bakalavr" : "Magistratura" }}
          </div>
          <div
            v-else
            :class="th.dataIndex == 'get_status_display' && tr[th.dataIndex]"
          >
            {{ tr[th.dataIndex] }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "@/styles/variables";
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 3rem;
  .header {
    th {
      font-size: 11px;
    }
  }
  th {
    text-align: left;
    padding-left: 1rem;
  }
  .thead {
    tr th {
      padding: 0.5rem 1rem;
    }
  }
  .tbody {
    tr td {
      padding: 1rem;
      max-width: 250px;
    }

    .trow {
      background: $white;
      border-radius: 10px;
      border: 1px solid $light-blue;
      padding: 20px;
      transition: 0.2s;
      .Yangi {
        color: $blue;
      }
      .Moderatsiyada {
        color: $tag-orrange;
      }
      .Bekor {
        color: $grey;
      }
      .Tasdiqlangan {
        color: $green-tag;
      }
      .options {
        cursor: pointer;
      }

      &:hover {
        background: $light-blue;
      }
    }
  }
}
</style>

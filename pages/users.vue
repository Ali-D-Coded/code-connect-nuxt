<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Cash Assets",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
  },
];

const open = useState("openmodal", () => false);

const showModal = () => {
  open.value = true;
};
</script>
<template>
  <div>
    <a-table
      :columns="columns"
      :scroll="{ y: 240 }"
      :pagination="{ pageSize: 10 }"
      :data-source="data"
      bordered
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a class="hover:text-green-300 hover:font-bold">{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <div class="flex gap-1">
            <a-button @click="showModal"> Edit </a-button>
            <a-button> delete </a-button>
          </div>
        </template>
      </template>
      <template #title>
        <div class="flex justify-between">
          <div class="text-3xl font-bold">Users</div>
          <!-- <button class="shadow-md border h-10 w-10 rounded-full pb-1">
          <PlusOutlined />
        </button> -->
        </div>
      </template>
    </a-table>

    <a-modal :footer="false" v-model:open="open" title="Basic Modal">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>

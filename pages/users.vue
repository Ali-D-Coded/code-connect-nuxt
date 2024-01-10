<script lang="ts" setup>
import { PlusOutlined, EyeOutlined } from "@ant-design/icons-vue";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
  },
  {
    title: "Last Name",
    className: "column-money",
    dataIndex: "lastName",
  },
  {
    title: "UserName",
    dataIndex: "userName",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];

const data = [
  {
    key: 1,
    firstName: "Hunais",
    lastName: "Mongan",
    userName: "mongan",
    phone: "9865985665",
    email: "abs@gmail.com",
    password: "123456789",
    status: "ACTIVE",
  },
  {
    key: 2,
    firstName: "Sufail",
    lastName: "Akashavani",
    userName: "kunjapu",
    phone: "9865985665",
    email: "abs@gmail.com",
    password: "123456789",
    status: "ACTIVE",
  },
  {
    key: 3,
    firstName: "Sreya",
    lastName: "Sasikumar",
    userName: "ammu",
    phone: "9865985665",
    email: "abs@gmail.com",
    password: "123456789",
    status: "ACTIVE",
  },
];

const open = useState("openmodal", () => false);
const showData = useState("showData", () =>
  shallowRef({
    key: 3,
    firstName: "fdvgdf",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    status: "",
  })
);

const showModal = (record: any) => {
  showData.value = record;

  open.value = true;
};

console.log(showData.value.firstName);
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
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.dataIndex === 'name'">
          <a class="hover:text-green-300 hover:font-bold">{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <div class="flex items-center gap-3">
            <!-- <a-button  class="p-2"> -->
            <EyeOutlined @click="showModal(record)" class="text-2xl" />
            <!-- </a-button> -->
            <a-button
              >{{
                record.status == "ACTIVE"
                  ? "block"
                  : record.status == "BLOCKED"
                  ? "unblock"
                  : ""
              }}
            </a-button>
          </div>
        </template>
      </template>
      <template #title>
        <div class="flex justify-between">
          <div class="text-3xl font-bold">Users</div>
          <!-- <button class="w-10 h-10 pb-1 border rounded-full shadow-md">
          <PlusOutlined />
        </button> -->
        </div>
      </template>
    </a-table>

    <a-modal :footer="false" v-model:open="open">
      <a-descriptions bordered title="User Info" size="small" layout="vertical">
        <a-descriptions-item label="First Name">
          {{ showData.firstName }}
        </a-descriptions-item>
        <a-descriptions-item label="Last Name">{{
          showData.lastName
        }}</a-descriptions-item>
        <a-descriptions-item label="Username">{{
          showData.userName
        }}</a-descriptions-item>
        <a-descriptions-item label="Phone">{{
          showData.phone
        }}</a-descriptions-item>
        <a-descriptions-item label="Email">{{
          showData.email
        }}</a-descriptions-item>
        <a-descriptions-item label="Status">{{
          showData.status
        }}</a-descriptions-item>
      </a-descriptions>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>

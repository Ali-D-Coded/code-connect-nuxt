<script lang="ts" setup>
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "View",
    dataIndex: "url",
    width: "20%",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    width: "20%",
  },
];

const data = [
  {
    key: 1,
    name: "Course Completion Certificate",
    url: "Mongan",
  },
  {
    key: 2,
    name: "Diploma Completion Certificate",
    url: "Akashavani",
  },
  {
    key: 3,
    name: "Special Course Completion Certificate",
    url: "Sasikumar",
  },
];

const openCreate = useState("openCreate", () => false);
const openEdit = useState("openEdit", () => false);
const editData = reactive({
  name: "",
  url: "",
});

const handleEditDataChanged = (newEditData: any) => {
  editData.name = newEditData.name;
  editData.url = newEditData.url;
};

watch(editData, (newVal) => {
  handleEditDataChanged(newVal);
});

const showEditModal = (data: any) => {
  console.log({ data });

  editData.name = data.name;
  editData.url = data.url;

  openEdit.value = true;
};

console.log({ editData });
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
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'url'">
          <a :href="record.url" class="text-xl">
            <EyeOutlined />
          </a>
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <div class="flex items-center gap-5 text-xl">
            <EditOutlined @click="() => showEditModal(record)" />
            <DeleteOutlined />
          </div>
        </template>
      </template>
      <template #title>
        <div class="flex justify-between">
          <div class="text-3xl font-bold">Certficates</div>
          {{ editData.name }}
          <button
            class="w-10 h-10 pb-1 border rounded-full shadow-md"
            @click="openCreate = !openCreate"
          >
            <PlusOutlined />
          </button>
        </div>
      </template>
    </a-table>

    <a-modal
      :footer="false"
      v-model:open="openCreate"
      title="Create Certificate"
    >
      <create-certificate />
    </a-modal>
    <a-modal :footer="false" v-model:open="openEdit" title="Edit Certificate">
      <edit-certificate
        :editData="editData"
        @editDataChanged="handleEditDataChanged"
      />
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>

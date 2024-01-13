<script lang="ts" setup>
import { UploadOutlined } from "@ant-design/icons-vue";

const { editData } = defineProps(["editData"]);

const onFinish = (values: any) => {
  console.log("Success:", values);
  console.log("file :", values.upload[0].originFileObj);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
<template>
  <div class="p-5">
    <a-form
      :model="editData"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Name"
        name="name"
        :rules="[{ required: true, message: 'Please input name!' }]"
      >
        <a-input v-model:value="editData.name" />
      </a-form-item>

      <a-form-item
        name="upload"
        label="Upload"
        autoLink
        :rules="[{ required: true, message: 'upload a file!' }]"
      >
        <a-upload v-model:fileList="editData.upload" name="file">
          <a-button>
            <template #icon><UploadOutlined /></template>
            Click to upload
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item class="" label="Certificate">
        {{ editData.url }}
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" class="bg-blue-500" html-type="submit"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

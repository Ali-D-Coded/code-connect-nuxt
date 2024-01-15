<script lang="ts" setup>
import { UploadOutlined } from "@ant-design/icons-vue";
interface FormState {
  title: string;
  description?: string;
  date: string;
  location: string;
  upload: any;
}

const formState = reactive<FormState>({
  title: "",
  description: "",
  date: "",
  location: "",
  upload: null,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
  console.log("file :", values.upload);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
<template>
  <div class="p-5">
    <a-form
      :model="formState"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Title"
        name="title"
        :rules="[{ required: true, message: 'Please input title!' }]"
      >
        <a-input v-model:value="formState.title" />
      </a-form-item>

      <a-form-item label="Description" name="description">
        <a-textarea v-model:value="formState.description" />
      </a-form-item>

      <a-form-item
        label="Date"
        name="date"
        :rules="[{ required: true, message: 'Please input date!' }]"
      >
        <a-date-picker v-model:value="formState.date" />
      </a-form-item>

      <a-form-item
        label="Location"
        name="location"
        :rules="[{ required: true, message: 'Please input location!' }]"
      >
        <a-input v-model:value="formState.location" />
      </a-form-item>

      <a-form-item
        name="upload"
        label="Upload"
        autoLink
        :rules="[{ required: true, message: 'upload a file!' }]"
      >
        <a-upload v-model:fileList="formState.upload" name="file">
          <a-button>
            <template #icon><UploadOutlined /></template>
            Click to upload
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" class="bg-blue-500" html-type="submit"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";


definePageMeta({
  middleware: "auth",
});
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

const selectedKeys = ref<string[]>(["4"]);
</script>
<template>
  <a-layout class="h-screen">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="flex justify-center p-5">
        <img
          src="/code connnect logo.png"
          alt="code connnect logo"
          width="120"
        />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="(n, index) in nav" :key="index">
          <NuxtLink class="w-ful" :to="n.url">
            <!-- {{ n.icon }} -->
            <AppstoreOutlined />
            <span class="nav-text">{{ n.name }}</span>
          </NuxtLink>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content
        :style="{ margin: '24px 16px 0' }"
        class="overflow-y-scroll"
      >
        <div
          :style="{
            padding: '24px',
            background: '#fff',
            minHeight: '100%',
          }"
        >
          <slot />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Rootsys International ©2019 Created by Ali Afthab
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>

<script lang="ts" setup>
import Cookie from "js-cookie";
// import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();
const handleLogout = () => {
  Cookie.remove("access-token");
  router.push("/auth");
};
</script>

<template>
  <a-button class="" @click="handleLogout">
    <Icon icon="solar:logout-outline" />
  </a-button>
</template>

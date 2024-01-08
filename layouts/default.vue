<script setup lang="ts">
// console.log(Cookie.get());

const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};

const route = useRoute(); // Access the current route

// Function to check if the current route is the authentication page
const isAuthPage = () => {
  return route.name === "auth"; // Adjust 'auth' to the actual name of your authentication route
};
</script>

<template>
  <div class="grid-container">
    <header class="flex justify-end p-3 header">
      <div class="">
        <!-- <logout-button /> -->
        <!-- <logout-button /> -->
      </div>
    </header>

    <aside class="aside bg-[#75bcff]">
      <div class="flex justify-center p-5">
        <img
          src="/code connnect logo.png"
          alt="code connnect logo"
          width="120"
        />
      </div>
      <nav
        class="relative justify-center text-lg md:flex md:flex-col md:items-center"
      >
        <div
          class="absolute right-0 hidden w-10 h-10 p-1 text-center rounded-full bg-emerald-600"
          @click="showDrawer()"
        >
          x
        </div>
        <div
          v-for="n in nav"
          :key="n.name"
          class="w-full py-5 text-center hover:border-b"
        >
          <NuxtLink class="w-ful" @click="onClose" :to="n.url">{{
            n.name
          }}</NuxtLink>
        </div>
      </nav>
    </aside>
    <main class="main">
      <slot />
    </main>

    <footer class="footer">footer</footer>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "aside header"
    "aside main"
    "aside footer";
  height: 100vh;
}

.header {
  grid-area: header;
  box-shadow: 0 0.5px 10px rgb(155, 155, 155);
}
.aside {
  grid-area: aside;
}
.main {
  grid-area: main;
  overflow: scroll;
}
.footer {
  grid-area: footer;
}
/*
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 0px 1fr;
    position: relative;
  }

  .header {
    flex-direction: column;
    align-items: center;
  }

  .header img {
    margin-bottom: 10px;
  }

  .aside {
    overflow: hidden;
    position: fixed;
    z-index: 10;
    height: 100%;
    width: 80%;
  }
}*/
</style>

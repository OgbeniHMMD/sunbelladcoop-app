<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-page-container>
      <q-page
        class="flex flex-center q-pa-md q-mx-auto"
        style="max-width: 512px"
      >
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

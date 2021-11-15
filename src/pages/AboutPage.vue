<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center fullscreen">
        <div class="flex-col flex-center column">
          <img
            alt="Quasar logo"
            src="~assets/images/logo.png"
            style="width: 200px; height: auto"
          />
          <div class="font-bold text-primary text-weight-bold text-h6 q-pt-sm">
            SunbelladCoop
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      setTimeout(() => {
        this.$router.push("/auth/login");
      }, 3000);
    });
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

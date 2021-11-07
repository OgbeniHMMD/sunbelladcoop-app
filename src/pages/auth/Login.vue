<template>
  <main class="full-width">
    <header class="text-center">
      <img
        alt="Quasar logo"
        src="~assets/images/logo.png"
        style="width: auto; height: 75px"
        class="text-center"
      />
      <div class="text-primary text-center text-weight-bold text-h5 q-py-sm">
        Login
      </div>
    </header>

    <div>
      <q-input
        outlined
        bottom-slots
        color="primary"
        placeholder="email@example.com"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        type="password"
        bottom-slots
        color="primary"
        placeholder="Password"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>

      <q-btn color="primary" label="Login" to="/home" />
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
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

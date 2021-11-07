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
        Register
      </div>
    </header>

    <div>
      <q-input outlined bottom-slots color="primary" placeholder="First Name">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input outlined bottom-slots color="primary" placeholder="Last Name">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        bottom-slots
        color="primary"
        placeholder="+2348100928503"
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>

      <q-input
        outlined
        bottom-slots
        color="primary"
        placeholder="your.email@example.com"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-btn color="primary" label="Continue" to="/home" class="full-width" />
    </div>
  </main>
</template>

<template>
  <main class="full-width">
    <header class="text-center">
      <img
        alt="Quasar logo"
        src="~assets/images/logo.png"
        style="width: auto; height: 75px"
        class="text-center"
      />
      <div class="text-primary text-center text-weight-medium text-h5 q-py-md">
        Password Reset
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
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input
        outlined
        type="password"
        bottom-slots
        color="primary"
        placeholder="Old Password"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>

      <q-input
        outlined
        type="password"
        bottom-slots
        color="primary"
        placeholder="New Password"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>

      <q-btn
        color="primary"
        label="Reset Password"
        to="/auth/password/success"
        class="full-width"
      />

      <div class="text-center q-py-md">
        Or
        <router-link to="/auth/login" class="text-primary"
          >Click here to Login</router-link
        >
      </div>
    </div>
  </main>
</template>

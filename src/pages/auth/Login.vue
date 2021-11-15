<template>
  <q-page class="full-width">
    <header class="text-center">
      <img
        alt="Quasar logo"
        src="~assets/images/logo.png"
        style="width: auto; height: 75px"
        class="text-center"
      />
      <div
        class="
          text-primary text-center text-weight-medium text-subtitle1
          q-py-sm
        "
      >
        Login to your account
      </div>

      <div class="text-center q-pb-md">
        Or click here to
        <router-link to="/auth/signup" class="text-primary"
          >Create a new account</router-link
        >
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
        placeholder="Password"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>

      <q-btn
        color="primary"
        label="Login"
        to="/home"
        size="md"
        class="full-width"
      />
      <div class="text-center q-py-md">
        Already have an account?
        <router-link to="/auth/password/reset" class="text-primary"
          >Reset Password</router-link
        >
      </div>

      <div class="text-center q-py-sm">
        <div>Don't have an account?</div>
        <router-link to="/auth/signup" class="text-primary"
          >Create a new account</router-link
        >
      </div>
    </div>
  </q-page>
</template>

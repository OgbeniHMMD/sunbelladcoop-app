const routes = [
  {
    path: "/",
    component: () => import("pages/SplashScreen.vue"),
  },

  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "login", component: () => import("src/pages/auth/Login.vue") },
      {
        path: "register",
        component: () => import("src/pages/auth/Register.vue"),
      },
      {
        path: "reset-password",
        component: () => import("src/pages/auth/PasswordReset.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

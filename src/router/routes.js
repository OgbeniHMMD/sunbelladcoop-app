const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        alias: "home",
        component: () => import("pages/Index.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/auth/Login.vue") },
      {
        path: "signup",
        component: () => import("pages/auth/Signup.vue"),
      },
      {
        path: "password/reset",
        component: () => import("pages/auth/password/Reset.vue"),
      },
      {
        path: "password/success",
        component: () => import("pages/auth/password/Success.vue"),
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

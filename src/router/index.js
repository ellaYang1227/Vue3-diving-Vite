import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/index",
    name: "首頁",
    component: () => import("../views/Index.vue"),
  },
  {
    // 重新導向
    path: "/:pathMatch(.*)*",
    redirect: {
      name: "首頁",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;

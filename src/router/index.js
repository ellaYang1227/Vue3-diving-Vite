import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/FrontLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("../views/front/IndexView.vue")
            },
            {
                path: "index",
                component: () => import("../views/front/IndexView.vue")
            },
            {
                // 重新導向
                path: ":pathMatch(.*)*",
                redirect: "/index"
            }
        ]
    },
    {
        path: "/admin",
        component: () => import("../views/AdminLayout.vue"),
        children: [
            {
                path: "index",
                component: () => import("../views/admin/AdminIndexView.vue")
            },
            {
                // 重新導向
                path: ":pathMatch(.*)*",
                redirect: "/admin/index"
            }
        ]
    },
    {
        // 重新導向
        path: "/:pathMatch(.*)*",
        redirect: "/index"
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active"
});

export default router;

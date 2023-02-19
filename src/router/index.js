import { createRouter, createWebHashHistory } from "vue-router";
const { VITE_COMPANY_NAME } = import.meta.env;

const routes = [
    {
        path: "/",
        component: () => import("../views/FrontLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("../views/front/IndexView.vue"),
                meta: { title: "首頁" }
            },
            {
                path: "index",
                component: () => import("../views/front/IndexView.vue"),
                meta: { title: "首頁" }
            },
            {
                path: "login",
                component: () => import("../views/front/LoginView.vue"),
                meta: { title: "登入" }
            },
            {
                path: "signup",
                component: () => import("../views/front/SignupView.vue"),
                meta: { title: "註冊" }
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

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title} - ${VITE_COMPANY_NAME}`;
    }

    next();
});

export default router;

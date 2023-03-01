import { createRouter, createWebHashHistory } from "vue-router";
import AuthStore from "../stores/AuthStore.js";
const { VITE_COMPANY_NAME } = import.meta.env;

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
                path: "activities",
                component: () => import("../views/front/ActivitiesView.vue"),
                meta: { title: "找揪團" },
            },
            {
                path: "activity/:activityId",
                component: () => import("../views/front/ActivityView.vue"),
                meta: { title: "找揪團" },
            },
            {
                path: "addActivity",
                component: () => import("../views/front/EditActivityView.vue"),
                meta: { title: "新增揪團" }
            },
            {
                path: "editActivity/:activityId",
                component: () => import("../views/front/EditActivityView.vue"),
                meta: { title: "編輯揪團" }
            },
            {
                path: "member",
                component: () => import("../views/front/MemberView.vue"),
                children: [{
                    path: "myActivity",
                    component: () => import("../views/front/member/MyActivityView.vue"),
                    meta: { title: "我的揪團" }
                }]
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
                component: () => import("../views/admin/AdminIndexView.vue"),
                meta: { title: "首頁" }
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
    let { title } = to.meta;

    if (title) {
        const { path } = to;
        if (path.indexOf("/admin") > -1) {
            title = `後台管理 - ${title}`;
        }

        title = `${title} - `;
    }

    document.title = `${title ? title : ""}${VITE_COMPANY_NAME}`;

    const { getStorageUser } = AuthStore();
    getStorageUser();
    next();
});

export default router;

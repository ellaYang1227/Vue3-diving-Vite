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
                children: [
                    {
                        path: "myActivities",
                        component: () => import("../views/front/member/MyActivitiesView.vue"),
                        meta: { title: "我的揪團" }
                    },
                    {
                        path: "myOrders",
                        component: () => import("../views/front/member/MyOrdersView.vue"),
                        meta: { title: "我的報名" }
                    },
                    {
                        path: "myComments",
                        component: () => import("../views/front/member/MyCommentsView.vue"),
                        meta: { title: "評論管理" }
                    },
                    {
                        path: "editMyinfo",
                        component: () => import("../views/front/member/EditMyinfoView.vue"),
                        meta: { title: "編輯個人檔案" }
                    },
                ]
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
    // {
    //     path: "/admin",
    //     component: () => import("../views/AdminLayout.vue"),
    //     children: [
    //         {
    //             path: "index",
    //             component: () => import("../views/admin/AdminIndexView.vue"),
    //             meta: { title: "首頁" }
    //         },
    //         {
    //             // 重新導向
    //             path: ":pathMatch(.*)*",
    //             redirect: "/admin/index"
    //         }
    //     ]
    // },
    {
        // 重新導向
        path: "/:pathMatch(.*)*",
        redirect: "/index"
    }
];

// 始终滚动到顶部
const scrollBehavior = ((to, from, savedPosition) => {
    const { hash } = to;
    if (hash === "#messaget") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ top: window.innerWidth >= 992 ? 1000 : 2000 })
            }, 100)
        });
    } 
    
    return { top: 0 }
});

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
    scrollBehavior
});

router.beforeEach((to, from, next) => {
    let { title } = to.meta;
    const { path } = to;

    if (title) {
        if (path.indexOf("/admin") > -1) {
            title = `後台管理 - ${title}`;
        }else if (path.indexOf("/member") > -1) {
            title = `會員專區 - ${title}`;
        }

        title = `${title} - `;
    }

    document.title = `${title ? title : ""}${path.indexOf("/activity") === -1 ? VITE_COMPANY_NAME : ""}`;

    const { getStorageUser } = AuthStore();
    getStorageUser();
    next();
});

export default router;

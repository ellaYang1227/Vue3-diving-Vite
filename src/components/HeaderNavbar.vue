<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
import { getMainImg } from "../data/utilitieFunctions.js";
import { logo } from "../data/imagePaths.js";
const { VITE_COMPANY_NAME } = import.meta.env;
</script>

<script>
import * as bootstrap from "bootstrap";
import { mapState, mapActions } from "pinia";

import UserMugShot from "./UserMugShot.vue";
import AuthStore from "../stores/AuthStore.js";
import MemberStore from "../stores/MemberStore.js";

export default {
    data() {
        return {
            offcanvasNavbar: null,
            hasHavbarBg: false
        };
    },
    props: {
        showSearchBar: {
            type: Boolean,
            required: true
        }
    },
    inject: ["frontLayoutData"],
    components: {
        UserMugShot
    },
    computed: {
        ...mapState(MemberStore, ["myFirstThreeOrders"]),
        ...mapState(AuthStore, ["user"])
    },
    watch: {
        showSearchBar() {
            this.setShowSearchBar();
        }
    },
    mounted() {
        this.setShowSearchBar();
        window.addEventListener("scroll", this.scrollEvent);
        this.offcanvasNavbar = new bootstrap.Offcanvas(this.$refs.offcanvasNavbar, { keyboard: false });
    },
    methods: {
        ...mapActions(AuthStore, ["logout"]),
        setShowSearchBar() {
            this.hasHavbarBg = this.showSearchBar;
        },
        scrollEvent() {
            if(!this.frontLayoutData.showSearchBar) {
                this.hasHavbarBg = window.scrollY > 0 ? true : false;
            }
        },
        toggleOffcanvasNavbar() {
            if (768 > document.body.clientWidth) {
                this.offcanvasNavbar.toggle();
            }
        }
    }
};
</script>
<template>
    <nav
        class="fixed-top navbar navbar-expand-md navbar-dark p-0"
        :class="{ 'show-bg body-bg': hasHavbarBg, 'shadow-lg': !showSearchBar && hasHavbarBg }"
    >
        <div class="container">
            <router-link class="navbar-brand" to="/index">
                <img :src="logo" :alt="VITE_COMPANY_NAME" class="mb-md-2 logo-img" />
            </router-link>
            <router-link class="btn btn-primary btn-custom-rectangle ms-auto me-3 me-md-0 ms-md-2 order-md-last" to="/addActivity" role="button"
                >我要揪團</router-link
            >
            <button class="navbar-toggler" type="button" aria-controls="offcanvasNavbar" @click="toggleOffcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas-navbar offcanvas offcanvas-start border-0"
                tabindex="-1"
                ref="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-body px-0 pt-0">
                    <ul class="navbar-nav ms-auto align-items-md-center">
                        <li class="nav-item dropdown order-md-last" :class="{ 'd-md-none': !user }">
                            <a
                                class="nav-link dropdown-toggle dropdown-hide-arrow d-flex align-items-center border-bottom border-color-dropdown"
                                href="#"
                                id="dropUser"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                <UserMugShot :is-show-name="false" :name="user.name" :img="user.img" v-if="user" class="me-2" />
                                <h5 class="fs-5 d-md-none mb-0 text-truncate text-primary">
                                    <img :src="logo" :alt="VITE_COMPANY_NAME" class="logo-img" v-if="!user" />
                                    <template v-else>{{ user.name }}</template>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close btn-close-white d-md-none ms-auto flex-shrink-0"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-md-end" aria-labelledby="dropUser" :class="{ 'd-none': !user }">
                                <li>
                                    <h5 class="dropdown-header fs-6 text-truncate text-primary d-none d-md-block">
                                        {{ user?.name }}
                                    </h5>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/member/editMyinfo" @click="toggleOffcanvasNavbar">編輯個人資料</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/member/editMyinfo" @click="toggleOffcanvasNavbar">我的潛水證照</router-link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <router-link class="dropdown-item" to="/member/myActivities" @click="toggleOffcanvasNavbar">我的揪團</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/member/myOrders" @click="toggleOffcanvasNavbar">我的報名</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/member/myComments" @click="toggleOffcanvasNavbar">評論管理</router-link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item d-none d-md-block" href="#" @click.prevent="logout">登出</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/activities" @click="toggleOffcanvasNavbar">找揪團</router-link>
                        </li>
                        <li class="nav-item dropdown d-none d-md-block" v-if="user">
                            <router-link
                                class="nav-link"
                                :class="{ 'dropdown-toggle dropdown-hide-arrow': myFirstThreeOrders.length }"
                                id="dropMyOrders"
                                role="button"
                                :data-bs-toggle="myFirstThreeOrders.length ? 'dropdown' : ''"
                                data-bs-display="static"
                                aria-expanded="false"
                                to="/member/myOrders"
                            >
                                我的報名
                            </router-link>
                            <div class="dropdown-menu dropdown-menu-md-end" aria-labelledby="dropMyOrders">
                                <div class="list-group list-group-flush mx-3">
                                    <router-link :to="`/activity/${order.activityId}`" class="list-group-item list-group-item-action bg-transparent px-0 py-3" v-for="order in myFirstThreeOrders" :key="order.id">
                                        <div class="row gx-2 align-items-center">
                                            <div class="col-4">
                                                <div class="custom-rectangle border-card-border-width border">
                                                    <img :src="getMainImg(order.activity.imgs).img" :alt="order.activity.title" class="custom-rectangle img-cover" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <h2 class="fw-bold h6 mb-0 text-primary text-truncate-row-2">
                                                    {{ order.activity.title }}
                                                </h2>
                                                <small class="font-barlow text-white"
                                                    >{{ dateFormat(order.activity.startDate) }} ~ {{ dateFormat(order.activity.endDate) }}</small
                                                >
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <router-link
                                    class="py-2 d-block text-center text-decoration-none bg-lightPrimary bg-opacity-20 text-body border-top border-color-dropdown"
                                    to="/member/myOrders"
                                    >更多我的報名</router-link
                                >
                            </div>
                        </li>
                        <template v-if="!user">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/login" @click="toggleOffcanvasNavbar">登入</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/signup" @click="toggleOffcanvasNavbar">註冊</router-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item" v-if="user.identityId === '0'">
                                <router-link class="nav-link" to="/admin/index" @click="toggleOffcanvasNavbar">後台管理</router-link>
                            </li>
                            <li class="nav-item d-md-none border-top border-color-dropdown">
                                <a
                                    class="nav-link"
                                    href="#"
                                    @click.prevent="
                                        toggleOffcanvasNavbar();
                                        logout();
                                    "
                                    >登出</a
                                >
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";

.navbar {
    height: $header-height;
    background-color: transparent;
    transition: all 0.5s ease-out;

    .show-bg {
        transition: all 0.5s ease-in;
    }

    .logo-img {
        height: 45px;

        @media (min-width: 768px) {
            height: 50px;
        }
    }

    .navbar-toggler[aria-controls="offcanvasNavbar"] {
        @media (max-width: 767px) {
            display: flex;
            align-items: center;
            width: 40px;
            height: 40px;
            border-color: rgba($light-primary, 0.25);
            background-color: $bg-primary-20;
        }
    }

    .dropdown-toggle {
        @media (min-width: 768px) {
            border-bottom: 0 !important;
        }
    }

    .offcanvas-navbar {
        @media (max-width: 767px) {
            width: 100vw;
        }

        .navbar-nav {
            > .nav-item {
                .nav-link {
                    @media (max-width: 767px) {
                        padding: $dropdown-item-padding-y $dropdown-item-padding-x;

                        &#dropUser {
                            padding-bottom: 1rem;
                            padding-top: 1rem;
                            height: $header-height;
                        }
                    }

                    &:not(#dropUser) {
                        &.active {
                            pointer-events: none;
                        }

                        &:hover,
                        &.active {
                            color: $dropdown-link-hover-color;

                            @media (max-width: 767px) {
                                background-color: $dropdown-link-hover-bg;
                            }
                        }
                    }
                }
            }
        }

        .dropdown-menu {
            &[aria-labelledby="dropMyOrders"] {
                @media (min-width: 768px) {
                    width: 320px;
                }

                .list-group-item.active {
                    border-color: unset;
                }
            }

            &[aria-labelledby="dropUser"] {
                @media (max-width: 767px) {
                    display: block;
                    background-color: transparent;
                }
            }

            @media (max-width: 767px) {
                box-shadow: none;
                border: 0;
                margin-top: 0;
                border-radius: 0;
            }
        }

        .img-cover {
            height: 70px;
        }
    }
}
</style>

<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
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
    components: {
        UserMugShot
    },
    computed: {
        ...mapState(MemberStore, ["mySignUp"]),
        ...mapState(AuthStore, ["user"])
    },
    mounted() {
        this.getMySignUp(3);
        window.addEventListener("scroll", this.scrollEvent);
        this.offcanvasNavbar = new bootstrap.Offcanvas(this.$refs.offcanvasNavbar, { keyboard: false });
    },
    methods: {
        ...mapActions(MemberStore, ["getMySignUp"]),
        ...mapActions(AuthStore, ["logout"]),
        scrollEvent() {
            this.hasHavbarBg = window.scrollY > 0 ? true : false;
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
        :class="[hasHavbarBg ? 'bg-darkPrimary bg-opacity-95 shadow' : 'bg-transparent']"
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
                                <UserMugShot :width-size="45" :is-show-name="false" :name="user.name" :img="user.img" v-if="user" class="me-2" />
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
                            <ul class="dropdown-menu dropdown-menu-md-end" aria-labelledby="dropUser" v-if="user">
                                <li>
                                    <h5 class="dropdown-header fs-6 text-truncate text-primary d-none d-md-block">
                                        {{ user.name }}
                                    </h5>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="#" @click="toggleOffcanvasNavbar">編輯個人資料</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="#" @click="toggleOffcanvasNavbar">我的潛水證照</router-link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <router-link class="dropdown-item" to="#" @click="toggleOffcanvasNavbar">我的揪團</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="#" @click="toggleOffcanvasNavbar">我的報名</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="#" @click="toggleOffcanvasNavbar">評價管理</router-link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item d-none d-md-block" href="#" @click.prevent="logout">登出</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/activitys" @click="toggleOffcanvasNavbar">找揪團</router-link>
                        </li>
                        <li class="nav-item dropdown d-none d-md-block" v-if="user">
                            <a
                                class="nav-link"
                                :class="{ 'dropdown-toggle dropdown-hide-arrow': mySignUp.length }"
                                href="#"
                                id="dropMySignUp"
                                role="button"
                                :data-bs-toggle="mySignUp.length ? 'dropdown' : ''"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                我的報名
                            </a>
                            <div class="dropdown-menu dropdown-menu-md-end" aria-labelledby="dropMySignUp">
                                <div class="list-group list-group-flush mx-3">
                                    <template v-for="(item, index) in mySignUp" :key="item.id">
                                        <router-link to="#" class="list-group-item list-group-item-action bg-transparent px-0 py-3" v-if="3 > index">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-4" v-if="item.imgs.length">
                                                    <img :src="item.imgs[0]" :alt="item.title" class="img-cover border rounded-3" />
                                                </div>
                                                <div class="col">
                                                    <h2 class="h6 mb-0 text-primary text-truncate-row-2">
                                                        {{ item.title }}
                                                    </h2>
                                                    <small class="font-barlow text-white"
                                                        >{{ dateFormat(item.startDate) }} ~ {{ dateFormat(item.endDate) }}</small
                                                    >
                                                </div>
                                            </div>
                                        </router-link>
                                    </template>
                                </div>
                                <router-link
                                    class="py-2 d-block text-center text-decoration-none bg-lightPrimary bg-opacity-20 text-body border-top border-color-dropdown"
                                    to="#"
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
            border-color: rgba($light-primary, 0.75);
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
            &[aria-labelledby="dropMySignUp"] {
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

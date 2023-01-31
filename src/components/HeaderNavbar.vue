<script setup>
import Company from "../data/company.js";
import { token, user } from "../data/auth.js";
import { formatDate } from "../data/handle-format.js";
import { apiGetMySignUp } from "../api/index.js";
import UserMugShot from "./UserMugShot.vue";
</script>

<script>
export default {
  data() {
    return {
      mySignUp: [],
      hasHavbarBg: false,
    };
  },
  mounted() {
    this.getMySignUp();
    window.addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      this.hasHavbarBg = window.scrollY ? true : false;
    },
    getMySignUp() {
      (async () => {
        try {
          const data = await apiGetMySignUp();
          // activeStatus: 0 未開始、1 進行中、2 已結束、3 系統中止
          this.mySignUp = data.filter(
            (item) => item.activeStatus === 0 || item.activeStatus === 1
          );
        } catch {
          console.log("err");
        }
      })();
    },
  },
};
</script>

<template>
  <nav
    class="fixed-top navbar navbar-expand-md navbar-dark p-0"
    :class="[
      hasHavbarBg ? 'bg-darkPrimary bg-opacity-50 shadow' : 'bg-transparent',
    ]"
  >
    <div class="container">
      <a class="navbar-brand" href="index.html"
        ><img
          src="../assets/images/氣瓶海人logo.svg"
          :alt="Company?.name"
          class="mb-md-2"
      /></a>
      <button
        type="button"
        class="btn btn-primary btn-custom-rounded ms-auto me-3 me-md-0 ms-md-2 order-md-last"
      >
        我要揪團
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbarHeader"
        aria-controls="offcanvasNavbarHeader"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start border-0"
        tabindex="-1"
        id="offcanvasNavbarHeader"
        aria-labelledby="offcanvasNavbarHeaderLabel"
      >
        <div class="offcanvas-body px-0 pt-0">
          <ul class="navbar-nav ms-auto align-items-md-center">
            <li class="nav-item dropdown order-md-last" v-if="user">
              <a
                class="nav-link dropdown-toggle dropdown-hide-arrow d-flex align-items-center"
                href="#"
                id="dropUser"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <UserMugShot />
                <h5 class="fs-5 ms-2 d-md-none mb-0 text-truncate text-primary">
                  {{ user.name }}
                </h5>
                <button
                  type="button"
                  class="btn-close btn-close-white d-md-none ms-auto flex-shrink-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-md-end"
                aria-labelledby="dropUser"
              >
                <li>
                  <h5
                    class="dropdown-header fs-6 text-truncate text-primary d-none d-md-block"
                  >
                    {{ user.name }}
                  </h5>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item active" href="#">編輯個人資料</a>
                </li>
                <li><a class="dropdown-item" href="#">我的潛水證照</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">我的揪團</a></li>
                <li><a class="dropdown-item" href="#">我的報名</a></li>
                <li><a class="dropdown-item" href="#">評價管理</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item d-none d-md-block" href="#">登出</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">找揪團</a>
            </li>
            <li class="nav-item dropdown d-none d-md-block" v-if="user">
              <a
                class="nav-link"
                :class="{
                  'dropdown-toggle dropdown-hide-arrow': mySignUp.length,
                }"
                href="#"
                id="dropMySignUp"
                role="button"
                :data-bs-toggle="mySignUp.length ? 'dropdown' : ''"
                data-bs-display="static"
                aria-expanded="false"
              >
                我的報名
              </a>
              <div
                class="dropdown-menu dropdown-menu-md-end"
                aria-labelledby="dropMySignUp"
              >
                <div class="list-group list-group-flush mx-3">
                  <template v-for="(item, index) in mySignUp" :key="item.id">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action bg-transparent px-0 py-3"
                      v-if="3 > index"
                    >
                      <div class="row gx-2 align-items-center">
                        <div class="col-4">
                          <div class="img-box border rounded-3">
                            <img :src="item.img" :alt="item.name" />
                          </div>
                        </div>
                        <div class="col">
                          <h2 class="h6 mb-0 text-primary text-truncate-row-2">
                            {{ item.name }}
                          </h2>
                          <small class="font-barlow text-white"
                            >{{ formatDate(item.activeStartDate) }} ~
                            {{ formatDate(item.activeEndData) }}</small
                          >
                        </div>
                      </div>
                    </a>
                  </template>
                </div>
                <a
                  href="#"
                  class="py-2 d-block text-center text-decoration-none bg-lightPrimary bg-opacity-20 text-lightPrimary border-top border-color-dropdown"
                  >更多我的報名</a
                >
              </div>
            </li>
            <template v-if="!user">
              <li class="nav-item">
                <a class="nav-link" href="#">登入</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">註冊</a>
              </li>
            </template>
            <template v-else>
              <li class="nav-item d-md-none border-top border-color-dropdown">
                <a class="nav-link" href="#">登出</a>
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
  @media (min-width: 768px) {
    height: $header-height-md-up;
  }

  .navbar-brand {
    img {
      height: 45px;

      @media (min-width: 768px) {
        height: 50px;
      }
    }
  }

  .navbar-toggler[data-bs-target="#offcanvasNavbarHeader"] {
    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      width: 40px;
      height: 40px;
      border-color: rgba($light-primary, 0.75);
      background-color: $bg-primary-20;
    }
  }

  #offcanvasNavbarHeader {
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

    .img-box {
      height: 70px;
    }
  }
}
</style>

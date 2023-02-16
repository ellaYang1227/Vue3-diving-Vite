import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap";
import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* 將圖標添加到庫中 */
library.add(fas, fab, far);

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { register } from "swiper/element/bundle";
register();
import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

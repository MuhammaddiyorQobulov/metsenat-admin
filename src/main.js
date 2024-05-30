import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";
import { createPinia } from "pinia";
import i18n from "./utils/i18n/i18n";

createApp(App).use(router).use(i18n).use(createPinia()).mount("#app");

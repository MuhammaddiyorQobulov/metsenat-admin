import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";
import { createPinia } from "pinia";
import i18n from "./utils/i18n/i18n";
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

createApp(App).use(router).use(i18n).use(Antd).use(createPinia()).mount("#app");

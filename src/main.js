import { createApp } from "vue";
import App from "./App.vue";
import Routes from "./routes";
import "./axios";

createApp(App).use(Routes).mount("#app");

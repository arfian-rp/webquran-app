if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => {
      console.log(`SW Registered!`);
      console.log(reg);
    })
    .catch((e) => {
      console.log(`SW Failed!`);
      console.log(e);
    });
}

import { createApp } from "vue";
import App from "./App.vue";
import Routes from "./routes";
import "./axios";

createApp(App).use(Routes).mount("#app");

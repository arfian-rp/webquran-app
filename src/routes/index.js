import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../layouts/Dashboard.vue";
import E404 from "../layouts/E404.vue";
import Quran from "../views/Quran.vue";
import Surat from "../views/Surat.vue";
import Ayat from "../views/Ayat.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Quran",
        component: Quran,
      },
      {
        path: ":noSurat",
        name: "Surat",
        component: Surat,
      },
      {
        path: ":noSurat/:noAyat",
        name: "Ayat",
        component: Ayat,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "E404",
    component: E404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

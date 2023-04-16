import { createRouter, createWebHistory } from "vue-router";
import AHome from "../views/AHome.vue";
import BTreatments from "../views/BTreatments.vue";
import CCourses from "../views/CCourses.vue";
import DLinks from "../views/DLinks.vue";
import EContact from "../views/EContact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AHome,
  },
  {
    path: "/treatments",
    name: "treatments",
    component: BTreatments,
  },
  {
    path: "/courses",
    name: "courses",
    component: CCourses,
  },
  {
    path: "/links",
    name: "links",
    component: DLinks,
  },
  {
    path: "/contact",
    name: "contact",
    component: EContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

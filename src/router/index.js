import { createRouter, createWebHistory } from "vue-router";
import AHome from "../views/AHome.vue";
import BTreatments from "../views/BTreatments.vue";
import CCourses from "../views/CCourses.vue";
import DLinks from "../views/DLinks.vue";
import EContact from "../views/EContact.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: AHome,
  },
  {
    path: "/treatments",
    name: "TreatmentsPage",
    component: BTreatments,
  },
  {
    path: "/courses",
    name: "CoursesPage",
    component: CCourses,
  },
  {
    path: "/links",
    name: "LinksPage",
    component: DLinks,
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: EContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

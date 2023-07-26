// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/FlightSearchVue.vue"),
  },
  {
    path: "/flight-search",
    component: () => import("@/views/FlightSearchVue.vue"),
  },
  {
    path: "/flight-tickets",
    component: () => import("@/views/FlightTicketsVue.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

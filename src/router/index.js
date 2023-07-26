// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/FlightSearchView.vue"),
  },
  {
    path: "/flight-search",
    component: () => import("@/views/FlightSearchView.vue"),
  },
  {
    path: "/flight-tickets",
    component: () => import("@/views/FlightTicketsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

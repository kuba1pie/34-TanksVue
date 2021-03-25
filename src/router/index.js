import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home";
import Tanks from "../views/Tanks";
import Clients from "../views/Clients";

const routes = [
  { path: "/", component: Home },
  { path: "/clients", component: Clients },
  { path: "/tanks", component: Tanks },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

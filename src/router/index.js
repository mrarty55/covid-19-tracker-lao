import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/what-is-covid-19",
    name: "About COVID-19",
    component: () => import("../views/AboutCovid19.vue")
  },
  {
    path: "/covid-19-prevention",
    name: "COVID-19 Prevention",
    component: () => import("../views/Covid19Prevention.vue")
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(VueMeta, {
  tagIDKeyName: "vmid",
  attribute: "data-vue-meta",
  refreshOnceOnNavigation: true
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";
import Buefy from "buefy";
import "@fortawesome/fontawesome-free/js/all";

Vue.use(VueAxios, Axios);
Vue.use(VueMeta);
Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

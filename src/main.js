import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import VueAxios from "vue-axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(VueAxios, Axios);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

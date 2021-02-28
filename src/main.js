import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import VueAxios from "vue-axios";
import Moment from "moment";
import "moment/locale/lo";
import VueMoment from "vue-moment";
import numeral from "numeral";
import numFormat from "vue-filter-number-format";
import vuetify from "./plugins/vuetify";

Vue.filter("numFormat", numFormat(numeral));

Axios.defaults.baseURL = "https://disease.sh/v3";
Vue.use(VueAxios, Axios);

Moment.locale("lo");
Vue.use(VueMoment, {
  moment: Moment
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

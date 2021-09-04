import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Moment from "moment";
import "moment/locale/lo";
import VueMoment from "vue-moment";
import numeral from "numeral";
import numFormat from "vue-filter-number-format";
import vuetify from "./plugins/vuetify";

Vue.filter("numFormat", numFormat(numeral));

Moment.locale("lo");
Vue.use(VueMoment, {
  moment: Moment
});

Vue.prototype.$apiUrl = "https://disease.sh/v3";
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

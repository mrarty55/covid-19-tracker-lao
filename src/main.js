import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import VueAxios from "vue-axios";
import Moment from "moment";
import "moment/locale/lo";
import VueMoment from "vue-moment";
import Buefy from "buefy";
import "@fortawesome/fontawesome-free/js/all";
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
 
Vue.filter('numFormat', numFormat(numeral));

Vue.use(VueAxios, Axios);

Moment.locale("lo");
Vue.use(VueMoment, {
  moment: Moment
});
Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

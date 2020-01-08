import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { ValidationProvider, extend } from 'vee-validate';
import VeeValidate from "vee-validate";
// import { required } from 'vee-validate/dist/rules';
import "./lib/hotcss/hotcss.js";
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;
// extend('required', {
//   ...required,
//   message: 'The {_field_} field is required'
// });
Vue.use(VeeValidate)

new Vue({
  router,
  store,
  // components: {
  //   ValidationProvider
  // },
  render: h => h(App)
}).$mount("#app");

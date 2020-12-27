import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

//Vue.$toast.open({/* options */});

// install rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.use(VueToast);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

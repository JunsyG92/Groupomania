import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

import SuiVue from 'semantic-ui-vue';

axios.defaults.baseURL = "http://localhost:3000/api/";
const token = sessionStorage.getItem('token');

if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

// Prototypes
Vue.prototype.$axios = axios;

Vue.use(SuiVue)

// Config
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.prototype.$axios = axios;
// import store from './store';

new Vue({
  el: '#app',
  router,
  store,
  // methods: {
  //   fetchData(){
  //     this.$axios.get('')
  //   }
  // },
  render: h => h(App),
})

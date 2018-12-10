import Vue from 'vue'
import App from './App'
import { store } from './store'

// // #1
// import Vuex from 'vuex'

// // #2
// Vue.use(Vuex);

// // #3
// var store = new Vuex.Store({
//   state:{
//     message: 'hi store',
//   }
// });

new Vue({
  el: '#app',
  // #4
  store: store,
  render: h => h(App)
})

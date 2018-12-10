// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Syntax from "./Syntax.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // render: function(createElement) {
  //   return createElement(Syntax);
  // }
  // components: { Syntax },
  // template: "<Syntax></Syntax>"
  render: h => h(App)
});

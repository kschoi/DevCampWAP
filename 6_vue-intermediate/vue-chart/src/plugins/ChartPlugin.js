import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;

    Vue.prototype.$$helloworld = 'hi';
    Vue.prototype.$getNum = function(){
      return 10;
    }
  }
}
import Vue from 'vue'
// #1
import Vuex from 'vuex'

// #2
Vue.use(Vuex);

// #3
export var store = new Vuex.Store({
  // 상태 & 공유되는 데이터 & 데이터 속성
  state:{
    message: 'hi store',
    num: 10,
  },
  // 상태(state)를 변경하는 메서드
  // 그래서 state가 첫번째 인자로 넘어옴
  mutations: {
    changeNum (state) {
      //this.num으로 접근 안됨
      state.num = 100;
    }
  }
});
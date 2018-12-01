<template>
  <div>
    <todo-header></todo-header>
    <todo-input @add:item="addTodoItem"></todo-input>
    <todo-list :propsdata="items" @remove:item="removeTodoItem"></todo-list>
    <todo-footer @remove:all="clearAllTodoItem"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
 // 인스턴스 옵션 & 컴포넌트 속성들이 들어가는 곳
  components: {
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter,
  },

  data(){
    return {
      items: []
    }
  },

  created() { // 데이터가 담김
    // console.log('created');
    // axios.get('products')
    //     .then(function(response){
    //         vm.items = response.data;
    //     })
    // if (localStorage.length > 0) {
        
    //     for (let index = 0; index < localStorage.length; index++) {
    //         if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
    //             const item = localStorage.key(index);
    //             this.items.push(item);
    //         }
    //     }
    // }
    this.fetchData();
  },

  methods: {
    addTodoItem(value){
      //데이터 저장소에 저장
      localStorage.setItem(value, value);
      //할일 목록에 데이터 추가
      this.items.push(value);
    },
    removeTodoItem(item, index){
      //데이터 저장소에서 삭제
      localStorage.removeItem(item);
      // 할일 목록에서 데이터 삭제
      this.items.splice(index,1);
    },
    clearAllTodoItem(){      
      localStorage.clear();
      this.items = [];
    },
    fetchData(){
      if (localStorage.length > 0) {
          
          for (let index = 0; index < localStorage.length; index++) {
              if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
                  const item = localStorage.key(index);
                  this.items.push(item);
              }
          }
      }
    }
  }
}
</script>

<style>
  @import './assets/common.css';
</style>

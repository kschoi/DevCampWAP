<template>
  <div>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
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
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
}
</script>

<style>
  @import './assets/common.css';
</style>

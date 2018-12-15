export default {
  // getNumber(state){
  //   // 무조건 첫번째 인자로 state를 받음. 그래야 state에 접근이 가능하니까.
  //   console.log(state.num);
  // },
  addTodoItem(state, value){
    //데이터 저장소에 저장
    localStorage.setItem(value, value);
    //할일 목록에 데이터 추가
    state.items.push(value);
  },
  removeTodoItem(state, {item,index}){
    //데이터 저장소에서 삭제
    localStorage.removeItem(item);
    // 할일 목록에서 데이터 삭제
    state.items.splice(index,1);
  },
  clearAllTodoItem(state){      
    localStorage.clear();
    state.items = [];
  },  
}
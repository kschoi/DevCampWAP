<template>
    <div class="inputBox shadow">
        <input type="text" v-model="inputText" @keyup.enter="addItem">

        <span class="addContainer" v-on:click="addItem">
            <i class="addBtn fas fa-plus"></i>
        </span>
    </div>
</template>

<script>
export default {
    // 1. 입력값을 인식
    // 2. 입력 값을 DB 저장
    // 3. 입력 값을 초기화
    data(){
        return {
            inputText: '',
        }
    },
    methods: {
        addItem() {
            if (this.inputText !== '') {
                var value = this.inputText;
                // 이벤트 발생 (상위 컴포넌트의 함수 호출)
                // this.$emit('add:item', value);
                // 스토어 커밋 this.$store.commit('뮤테이션 명')
                this.$store.commit('addTodoItem', value);
                this.clearInput();
            }
        },
        clearInput(){
            this.inputText = '';
        }
    }

    // var item = [{'item':1}];
    // text = item = JSON.stringify(item); // localstorage에서 인식가능한 string으로 변환
    // JSON.parse() //꺼낼때는 다시 배열화
}
</script>

<style>

input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>

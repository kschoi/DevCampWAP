<template>
    <div>
        <p id="p1">Hello Vue.js</p>
        <ul>
            <li class="shadow"
                v-for="(item, index) in todoList">
                {{ item }}, {{ doubleNumber }}
                <span class="removeBtn" @click="removeItem(item, index)">
                    <i class="far fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
// import {bus} from './utils/bus.js'

// 데이터 호출 (리스트 받아오기)
export default {
    computed: {
        // ...mapGetters({
        //     todoList
        // }),
        ...mapGetters(['todoList']),
        doubleNumber(){
            return 20;
        }
    },
    methods: {
        removeItem(item, index){
            // this.$emit('remove:item', item, index);
            this.$store.commit('removeTodoItem', {item,index});
        }
    },
}
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

</style>

<template>
    <div>
        <p id="p1">Hello Vue.js</p>
        <ul>
            <li class="shadow"
                v-for="(item, index) in propsdata">
                {{ item }}
                <span class="removeBtn" @click="removeItem(item, index)">
                    <i class="far fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

// import {bus} from './utils/bus.js'

// 데이터 호출 (리스트 받아오기)
export default {
    props: [ 'propsdata' ],
    // data(){
    //     return {
    //         items: [],
    //     }
    // },
    methods: {
        removeItem(item, index){
            // console.log(index);
            // localStorage.removeItem(item);
            // this.items.splice(index,1);
            this.$emit('remove:item', index, index);
        }
    },
    // 화면에 붙기 전
    // beforeCreated () {}, // 데이터 접근이 안됨
    // created() { // 데이터가 담김
    //     // console.log('created');
    //     // axios.get('products')
    //     //     .then(function(response){
    //     //         vm.items = response.data;
    //     //     })
    //     if (localStorage.length > 0) {
            
    //         for (let index = 0; index < localStorage.length; index++) {
    //             if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
    //                 const item = localStorage.key(index);
    //                 this.items.push(item);
    //             }
    //         }
    //     }
    // },
    // render 하기 전
    // beforeMount() {
    //     console.log('beforeMount');

    //     var p1 = document.querySelector('#p1');
    //     console.log('beforeMount', p1);
    // },
    // // render 후 (화면에 인스턴스가 붙고난 직후)
    // mounted(){
    //     console.log('mounted');

    //     var p1 = document.querySelector('#p1');
    //     console.log('mounted', p1);
    // },
    // beforeMount () {
    //     var vm = this;
    //     bus.$on('remove-all-items', function(){
    //         vm.items = [];
    //     })
    // }
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

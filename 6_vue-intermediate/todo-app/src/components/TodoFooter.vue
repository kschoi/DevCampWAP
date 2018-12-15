<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn"
            @click="clearAll">clear All</span>
    </div>
</template>

<script>

// import {bus} from './utils/bus.js'

export default {
    methods: {
        clearAll(){
            // bus.$emit('remove:all');
            // this.$emit('remove:all');
            this.$store.commit('clearAllTodoItem');
        }
    }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>


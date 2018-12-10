<template>
  <div>
    <left-bar></left-bar>
    <right-bar></right-bar>
    <!-- {{this.$store.state.message}} -->
    <!-- <h1>Data 속성</h1>
    <p>{{ message }}</p>
    <h1>Computed 속성</h1>
    <p>{{ reversedMessage }}</p>
    <button @click="num++">increase</button> -->
  </div>
</template>

<script>
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar'

export default {
  components: {
    LeftBar,
    RightBar,
  }
  // data() {
  //   return {
  //     message: 'hello',
  //     num: 10
  //   }
  // },
  // computed: {
  //   reversedMessage(){
  //     return this.message.split('').reverse().join('');
  //   }
  // },
  // watch: {
  //   num() {
  //     console.log('바뀐!');
  //   }
  // }
}
</script>

<style>

</style>

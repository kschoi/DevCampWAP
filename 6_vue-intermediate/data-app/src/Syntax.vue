<template>
  <div>
    input : 
    <input type="text" v-model="inputText">
    <button @click="addText">add</button>
  </div>
</template>

<script>
export default {
  data () {
      return {
          message: 'Hello World',
          inputText: '',
      }
  },

  methods: {
      addText () {
          console.log(this.inputText);
      }
  },
}
</script>

<style>
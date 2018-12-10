<template>
  <div>
    <h1>Bottom Line</h1>
    {{ this.$store.state.num }}
    <button @click="sendEvent">get 100</button>
  </div>
  
</template>

<script>
export default {
  methods: {
    sendEvent(){
      this.$store.commit('changeNum');
    }
  }
}
</script>

<style>

</style>

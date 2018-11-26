<template>
  <app-header v-bind:propsdata="num"></app-header>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',
  components: {
    'app-header': AppHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 500
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

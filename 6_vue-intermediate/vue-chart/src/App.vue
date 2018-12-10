<template>
  <div>
    <h1>Chart.js</h1>
    <Chart :type="chartType"></Chart>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'

export default {
  components: {
    Chart
  },
  data () {
    return {
      chartType: "pie", // bar, line, pie...
      chartData: {},
    }
  },
  created() {
    console.log(this.$$helloworld);
    console.log(this.$getNum());
  },

}
</script>

<style>

</style>

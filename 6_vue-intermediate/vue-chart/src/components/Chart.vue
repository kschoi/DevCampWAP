<template>
    <div>
    <canvas ref="myFirstChart" id="myChart" width="400" height="400"></canvas>
        chart
    </div>
</template>

<script>
export default {

  props: ['type'],

  methods: {
    renderChart () {
      // 1 - DOM 선택자를 이용한 태그 접근
      // document.getElementById("myChart");
      // 2 - jquery
      // $('#mychart');
      // 3- vue reference 속성으로 접근
      // this.$refs.myFirstChart

      var myChart = new this.$_Chart(this.$refs.myFirstChart, {
        type: this.type,
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
      });      
    }
  },

  mounted () {
    this.renderChart();

    // console.log(this.$refs.myFirstChart);
    // console.dir(this.$refs.myFirstChart);
  },

}
</script>

<style>

</style>

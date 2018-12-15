<template>
  <div>
    <h1>Main</h1>
    <div>{{ mapInfo }}</div>
  </div>
</template>

<script>
import weatherData from "./weather.json";

export default {
  // 1. 미세먼지 데이터를 호출
  //   - 현재 단말기(노트북)의 위치 획득
  //   - 위치를 Naver Maps API로 변환
  //   - 변환된 지역 값을 날씨 API로 호출
  data() {
    return {
      mapInfo: {},
      weatherInfo: {}
    };
  },
  methods: {
    getGeolocation() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            // 성공 - 경도, 위도를 제대로 가져왔을 때
            resolve(position);
          },
          function(error) {
            // 실패 - 제대로 못가져왔을 때
            reject(error);
          }
        );
      });
    },
    getWeatherInfo() {
      setTimeout(() => {
        this.weatherInfo = weatherData;
      }, 1000);
    }
  },
  created() {
    console.log("호출하기 전", this);
    this.getGeolocation().then(({ coords }) => {
      // console.log('호출하고 나서', result);
      this.mapInfo = coords;
      console.log(coords);
    });

    this.getWeatherInfo();
  }
};
</script>

<style></style>

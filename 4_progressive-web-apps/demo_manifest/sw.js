// service-worker.js
console.log('service worker is registered');

// var CACHE_NAME = 'sw-cache-v1';
// var cacheFileList = [
//   '/',
//   '/images/bts.jpg'
// ];

// 캐싱할 파일 등록하기
// self.addEventListener('install', function (event) {
//   event.waitUntil(
//     // 캐싱 처리
//     caches.open(CACHE_NAME)
//       .then(function (cache) {
//         // 앞에서 정의한 이름으로 캐싱 파일이 생성 되면 아래 로직 수행
//         return cache.addAll(cacheFileList);
//       })
//       .catch(function (error) {
//         // 만약 실패하면 아래 로직 수행
//         // console.log(error);
//         throw new Error(error);
//       })
//   );
// });

// 캐싱 반환
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function (response) {
//           // 해당 데이터 요청이 캐싱에 있으면, 캐싱을 반환
//           // 요청이 없으면 fetch() 요청
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       })
//       .catch(function (error) {
//         // console.log(error);
//         throw new Error(error);
//       })
//   );
// })
// firebase-db.js
var db = firebase.database();

function sendDeviceKeytoFirebase(key) {
  return db.ref('users/browserKey-' + getID()).set({
    key: key,
    time: getCurrentTime()
  }).then(function () {
    console.log("The key has been sent to Firebase DB. (Firebase DB에 키값이 전송되었습니다)");
  }).catch(function () {
    console.error('Sending a key to server has been failed. (키값 전송을 실패했습니다.)');
  });
}

function getID() {
  var date = new Date();
  return date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
}

function getCurrentTime() {
  return new Date().toLocaleString();
}

function removeDeviceKeyInFirebase(key) {
 // https://firebase.google.com/docs/database/web/read-and-write#delete_data 참고
}
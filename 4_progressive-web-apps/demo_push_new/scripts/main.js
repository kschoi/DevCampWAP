/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, es6 */

'use strict';

var pushButton = document.querySelector('.js-push-btn');
var isSubscribed = false;
var swRegistration = null;

// 서비스 워커가 등록되자마자 호출되는 함수 (UI 관련 설정)
function initialiseUI() {
  pushButton.addEventListener('click', function() {
    pushButton.disabled = true;
    if (isSubscribed) {
      unSubscribeUser();
    } else {
      subscribeUser();
    }
  });

  // 등록된 서비스 워커로 단말기 푸시 서비스 등록
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    // 단말기에 대한 정보가 subscription에 포함됨
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    // 푸시 등록이 되면 버튼에 등록 여부를 표시
    updateBtn();
  });
}

// 
function updateBtn() {
  // 사용자 허용 여부 확인
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}

function subscribeUser() {
  swRegistration.pushManager.subscribe({
    // 푸시 수신 시 알람 표시 속성
    userVisibleOnly: true
  })
  .then(function(subscription) {
    console.log('User is subscribed:', subscription);
    isSubscribed = true;

    updateSubscriptionOnServer(subscription);
    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}

function updateSubscriptionOnServer(subscription, unsubscribed) {
  var subscriptionJson = document.querySelector('.js-subscription-json');
  var subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
    // firebase(백엔드 & 디비)에 전송
    console.log(subscription);    
    sendDeviceKeytoFirebase(subscription.endpoint.split('send/')[1]);
    // $.ajax({
    //   url: 'api/push-keys',
    //   method: 'post',
    //   data: {
    //     key: 'subscription.endpoint.split('send/')[1]'
    //   }
    // });
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}

function unSubscribeUser() {
  swRegistration.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      console.log('User is unsubscribed : ', successful);
      console.log('Unsubscribed subscription : ', subscription);

      updateSubscriptionOnServer(subscription, successful);
      isSubscribed = false;

      updateBtn();
    }).catch(function(e) {
      console.log('Failed to unsubscribe the user: ', e);
      updateBtn();
    })
  });
}
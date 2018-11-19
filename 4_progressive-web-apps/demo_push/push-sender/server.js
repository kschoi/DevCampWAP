var request = require('request');

var serverKey =
  "key=" + "AAAAc5bgznU:APA91bESpXRIt2bb2et6GZIS5yMSdbIZ6uPHtFd02FIfa3mzZY5DYrxRT5tcZP_wMvn0_1Pev-M4xJZOqX4hcx6nty6qESirHim7GiyG3l4GBaW_vgOi_NEUk5PZSqL4Oaby_rcy_F-7";
var deviceKey =
  "cGrmgOcHugQ:APA91bGNNbFIz8kWHUktaDja43TjaocZwhGUaLVy-N7P0VHxBkoEdkd-M0HvHXCOcGwdqfqgwOc8PSEg_AcVh1cCMQNYATPP3of0BhXyhMHdm1tjZI6zcRSW6Qf_gTKIqxYqUC78qpqu";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};

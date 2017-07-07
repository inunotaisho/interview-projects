const promise = require("es6-promise");
import 'whatwg-fetch';
import appSettings from '../app.constants';
import appConfig from '../app.config';

module.exports = {
    post: function (resourceUrl, params) {
        let Promise = promise.Promise;
        //Prepare Headers
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        return new Promise(function (resolve, reject) {
          fetch(resourceUrl, {
            credentials: 'same-origin',
            method: 'post',
            headers: myHeaders,
            body: JSON.stringify(params)
          })
          .then(checkStatus)
          .then(function (response) {
            resolve(response.json());
          })
          .catch(function (err) {
            reject(err);
          });
        });
    }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if(response.status === 401) {
    window.location = appConfig.LoginUrl;
  } else {
    let error = {};
    error.ValidationMessages = [appSettings.messages.exceptionMessage];
    throw error;
  }
}

import Promise from 'bluebird';
import request from 'request';
import rp from 'request-promise';

var options1 = {
  method: 'POST',
  uri: 'http://localhost:6000/submitBuy',
  body: {},
  json: true
}

Promise.delay(0)
.then(() => {
  return rp(options1);
}).then((body) => {
  console.log('body', body);
})

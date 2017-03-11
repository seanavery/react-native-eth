import Promise from 'bluebird';
import request from 'request';
import rp from 'request-promise';
/*
  unit tests for client facing API
*/

const sell = {
  method: 'POST',
  uri: 'http://localhost:6000/sell',
  body: {
    'approve': '10'
  },
  json: true
}

const approve = {
  method: 'POST',
  uri: 'http://localhost:6000/approve',
  body: {"foo": "bar"},
  json: true
}

Promise.delay(0)
.then(() => {
  return rp(sell);
}).then((body) => {
  console.log('/sell ==>', body);
  return rp(approve);
}).then((body) => {
  console.log('/approve ==>', body);
}).catch((err) => {
  console.log(err);
})

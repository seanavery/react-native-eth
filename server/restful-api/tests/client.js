import Promise from 'bluebird';
import request from 'request';

/*
  unit tests for client facing API
*/

const sell = {
  method: 'POST',
  uri: 'http://localhost:6000/sell',
  body: {},
  json: true
}

const approve = {
  method: 'POST',
  uri: 'http://localhost:6000/approve',
  body: {},
  json: true
}

Proise.delay(0)
.then(() => {
  return rp(sell);
}).then((body) => {
  console.log('/sell ==>', body);
  return rp(approve);
}).then((body) => {
  console.log('/approve ==>', body);
})

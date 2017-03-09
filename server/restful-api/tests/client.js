import Promise from 'bluebird';
import request from 'request';

/*
  unit tests for client facing API
*/

var sell = {
  method: 'POST',
  uri: 'http://localhost:6000/sell',
  body: {},
  json: true
}

var approve = {
  method: 'POST',
  uri: 'http://localhost:6000/approve',
  body: {},
  json: true
}

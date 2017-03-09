import express from 'express';
import Promise from 'bluebird';
import redis from 'redis';

/*
  REDIS CLIENT
  listens on port 6379 by default
  createClient(_host_, _port_)
*/
const client = redis.createClient();

// listen for errors from redis client
client.on('error', (err) => {
  console.log('Error from Redis client', err);
})

/*
  EXPRESS SERVER
  http interface
  GET, POST, PUT, DELETE
*/
const app = express();


/*
====================================================
  CLIENT INTERFACE

  applications, trading bots, etc...

  POST:

  POST URI:
  /approve/:token_contract_address;
  /submitSell/:token1_contract_address/:token2_contract_address

  GET:

  GET URI:
  /approve/:token_contract_address/:seller_address
  /submitSell/:token_contract_addres/:seller_address

====================================================
*/


/*
  POST
*/
app.post('/allowance', (req, res) => {
  console.log('hit /allowance endpoint')
})

app.post('/sell', (req, res) => {
  console.log('hit /sell endpoint')
});

/*
  GET
*/

// orderbook

// orderhistory

// user info

/*
====================================================
  ADMIN Interface

  server based exchange agents, Consenergy admins

  POST:
  /transfer/:token_contract_address/:seller_address
  /match/:exchange_contract/

=====================================================
*/

app.most('/match', (req, ress) => {
  console.log('hit /match endpoint');
})

app.listen(6000);

console.log('API listening on port 6000');
console.log('Redis client on port 6379');

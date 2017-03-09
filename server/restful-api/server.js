import express from 'express';
import Promise from 'bluebird';
import orderbook from '../order-book/orderbook';
import redis from 'redis';

// create a redis client
const client = redis.createClient();
console.log('redis client', client)

// client.on('error', (err) => {
//   console.log('Error', err);
// })

const app = express();

const options = {};
let market;

app.post('/submitBuy', (req, res) => {
  Promise.delay()
  .then(() => {
    // call approve on erc20 token contract
  }).then(() => {
    // submit to orderbook
  })
});

Promise.delay(0)
.then(() => {
  market = new orderbook(options)
}).then(() => {
  console.log('market', market)
})
app.listen(6000);

console.log('API listening on port 6000');

import express from 'express';
import Promise from 'bluebird';

const app = express();

app.post('/submitBuy', (req, res) => {
  Promise.delay()
  .then(() => {
    // call approve on erc20 token contract
  }).then(() => {
    // submit to orderbook
  })
});

app.listen(6000);

console.log('API listening on port 6000');

import express from 'express';
import Promise from 'bluebird';

const app = express();

app.post('/submitBuy', (req, res) => {
  Promise.delay()
  .then(() => {
    console.log('submitting buy somehow....')
  })
});

app.listen(6000);

console.log('API listening on port 6000');

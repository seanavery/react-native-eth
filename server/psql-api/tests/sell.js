import Promise from 'bluebird';
import rp from 'request-promise';

const sell1 = {
  method: 'POST',
  uri: 'http://localhost:6000/sell',
  body: {
    'approve': '10'
  },
  json: true
}

Promise.delay(0).then(() => {
  return rp(sell1);
}).then((res) => {
  console.log('response: ', res);
})

import Promise from 'bluebird';
import rp from 'request-promise';

const sell1 = {
  method: 'POST',
  uri: 'http://localhost:6000/sell',
  body: {
    seller: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
    tokenA: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
    tokenB: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
    valueA: 5,
    valueB: 10,
    date: new Date().toISOString().slice(0, 19).replace('T', ' ')
  }
  json: true
};

const sell2 = {

};

const sell3 = {

};

Promise.delay(0).then(() => {
  return rp(sell1)
}).then((body) => {
  console.log('body', body);
}).catch((err) => {
  console.log(err);
})

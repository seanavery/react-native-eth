import Promise from 'bluebird';
import rp from 'request-promise';

const sell1 = {
  method: 'POST',
  uri: 'http://localhost:6000/sell',
  body: {
    tokenA: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
    tokenB: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076"
  }
  json: true
}

Promise.delay(0).then(() => {
  return rp(sell1);
}).then((res) => {
    console.log('response: ', res);
})

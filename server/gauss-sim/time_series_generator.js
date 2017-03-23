import Promise from 'bluebird';

// globals
let starting_price = .5;
let starting_variance = .2

// recursive simulation process

function simulationLoop() {
  return Promise.delay(5000)
  .then(() => {
    console.log('trading event');
    return abc();
  }).then(() => {
    return simulationLoop();
  }).catch((error) => {
    console.log('error', error);
    Promise.delay(5000)
    .then(() => {
      return simulationLoop();
    })
  })
}

// calculate normal random
export function bellRandom(mean) {
  conosole.log('calculating normal random');
  return mean;

  return new Promise(resolve, rejct)
}

simulationLoop();




// instantiate process
// Promise.delay(0)
// .then(() => {
//   runSimulation();
// }).catch((error) => {
//   console.log(error);
// });
//
// function runSimulation() {
//   return Promise.delay(3000)
//   .then(() => {
//     return marketPrice();
//   }).then((price) => {
//     console.log('price', price);
//     console.log('date', new Date());
//     return runSimulation();
//   }).catch((error) => {
//     return Promise.delay(3000)
//     .then(() => { return runSimulation();})
//   })
// }
//
// const marketPrice = () => {
//   return new Promise((resolve, reject) => {
//     Promise.resolve(normalRandom(market_price, 1))
//   })
// }
//
// const normalRandom = () => {
//
// }

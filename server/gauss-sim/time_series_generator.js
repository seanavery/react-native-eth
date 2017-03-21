import Promise from 'bluebird';

// globals

// instantiate process
Promise.delay(0)
.then(() => {
  runSimulation()''
}).catch((error) => {
  console.log(error);
})

function runSimulation() {
  return Promise.delay(3000)
  .then(() => {
    return marketPrice();
  }).then((price) => {
    console.log(price);
    return runSimulation();
  }).catch((error) => {
    return Promise.delay(3000)
    .then(() => { return runSimulation();})
  })
}

marketPrice() {
  return new Promise((resolve, reject) => {
    Promise.resolve(normalRandom(market_price, 1))
  })
}

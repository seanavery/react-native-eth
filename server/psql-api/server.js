import express from 'express';
const app = express()
const router = express.Router();

router.get('/sell', (req, res) => {
  console.log(('hit /sell endpoint'));
  res.send(req)
});

// apply the routes to our application
app.use('/', router);

app.listen(6000, () => {
  console.log('express server listening on port 6001');
});

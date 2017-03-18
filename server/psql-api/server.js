import express from 'express';

const router = express.Router();

router.get('/sell', (req, res) => {
  console.log(('hit /sell endpoint'));
  res.send(req)
});

router.listen(6000, () => {
  console.log('express server listening on port 6001');
})

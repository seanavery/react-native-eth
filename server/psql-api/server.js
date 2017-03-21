import bodyParser from 'body-parser';
import express from 'express';
const app = express();

app.use(bodyParser.json());

app.post('/sell', (req, res) => {
  console.log('hit /sell endpoint');
  res.send(JSON.stringify(req.body));
});

app.listen(6000, () => {
  console.log('express server listening on port 6000');
});

import express from 'express';
import mysql from 'mysql';
import

const router = express.Router();
router.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'turing',
  database: 'turing_database'
});

connection.connect((err) => {
  if(!!err) {console.log(err)};
  console.log('MySQL client is connected!');
});

router.get('/sell', (req, res) => {
  
})

router.get('/approve', (req, res) => {

});

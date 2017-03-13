import express from 'express';
import mysql from 'mysql';

const router = express.Router();

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

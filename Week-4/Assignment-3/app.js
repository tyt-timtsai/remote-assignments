//.env
require('dotenv').config();

//express
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

const jsonParser = express.json();
const urlencodedParser = express.urlencoded({ extended: true });

//MySQL
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

//Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Mysql Connected...');
});

console.log('run');

//Insert User
app.get('/adduser', (req, res) => {
  let post = { email: 'qwe123@gmail.com', password: 'qwe123' };
  let sql = `INSERT INTO user SET ?`;
  db.query(sql, post, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Added 1 user...');
  });
});

//Sign up
app.post('/signup', jsonParser, (req, res) => {
  let post = { email: req.body.email, password: req.body.password };
  let body = JSON.stringify(req.body);
  let input = JSON.parse(body).email;
  console.log('body');
  console.log(req.body);
  console.log('inpuot');
  console.log(input);

  //先篩選有沒有取得input data
  if (input) {
    db.query(`SELECT password FROM user WHERE email = "${input}"`, (err, result) => {
      if (result[0]) {
        console.log('Account exist.');
        res.send('Account is already exist.');
      } else {
        console.log('Account does not exist');
        let sql = `INSERT INTO user SET ?`;

        db.query(sql, post, (err, result) => {
          if (err) {
            throw err;
          }
          res.redirect('/member');
        });
      }
    });
  } else {
    res.send('Please enter your account.');
  }
});

//Sign in
app.post('/signin', jsonParser, (req, res) => {
  let input = { email: req.body.email, password: req.body.password };
  let sql = `SELECT * FROM user WHERE email = '${input.email}'`;

  //Sign in query function
  db.query(sql, (err, result) => {
    console.log(req.url);
    console.log(result);
    if (result[0]) {
      if (result[0].password === input.password) {
        console.log('password correct');
        res.redirect('member');
      } else {
        console.log('password incorrect');
        res.send('Password incorrect');
      }
    } else if (!result[0]) {
      console.log('account does not exist');
      res.send('Email not exist, please sign up first.');
    }
  });
});

//render home page
app.get('/', (req, res) => {
  res.render('index.ejs');
});

//render member page
app.get('/member', (req, res) => {
  res.render('member');
});

app.post('/member', (req, res) => {
  res.render('member');
});

//設定以上都不符合時，404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

//run server
app.listen(port, () => {
  console.log(`The application is running on localhost: ${port}!`);
});

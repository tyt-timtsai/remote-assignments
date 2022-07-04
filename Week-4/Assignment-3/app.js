//.env
require('dotenv').config();

//express
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

// const jsonParser = express.json();
const urlencodedParser = express.urlencoded({ extended: false });

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
app.post('/signup', urlencodedParser, (req, res) => {
  let post = { email: req.body.email, password: req.body.password };
  let body = JSON.stringify(req.body);

  // console.log(`body:${req.body.email}`);
  let input = JSON.parse(body).email;
  if (input) {
    db.query(`SELECT password FROM user WHERE email = "${input}"`, (err, result) => {
      if (result[0]) {
        console.log('Account exist.');
        // req.flash('error_msg', 'Account is already exist.');
        res.redirect('/');
        // res.render('/', { error_msg: 'Account is already exist.' });
      } else {
        console.log('Account does not exist');
        let sql = `INSERT INTO user SET ?`;

        db.query(sql, post, (err, result) => {
          if (err) {
            throw err;
          }
          console.log(`result : ${result}`);
          res.redirect('/member');
        });
      }
    });
  }
});

// //Sign in
// app.post('/signin', urlencodedParser, (req, res) => {
//   let input = { email: req.body.email, password: req.body.password };
//   console.log(`email: ${input.email}`);
//   let sql = `SELECT * FROM user WHERE email = ${input.email}`;

//   //Sign in part
//   db.query(sql, (err, result) => {
//     console.log('result[0]');
//     console.log(result[0]);
//     console.log(result[0].password);
//     console.log(post.password);
//     if (result[0]) {
//       if (result[0].password === post.password) {
//         console.log('password correct');
//         res.redirect('/member');
//       } else {
//         console.log('password incorrect');
//         res.send('Password incorrect');
//       }
//     } else {
//       console.log('account does not exist');
//       res.send('Email not exist, please sign up first.');
//     }
//   });
// });

//Set home page
const mainRoutes = require('./routes');
app.use(mainRoutes);

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

//.env
require('dotenv').config();

//express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');

const port = 3000;

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
app.post('/adduser', urlencodedParser, (req, res) => {
  let post = { email: req.body.email, password: req.body.password };
  let sql = `INSERT INTO user SET ?`;
  console.log(req.body);
  let existEmail = db.query(
    `SELECT * FROM user WHERE email = "${req.body.email}"`,
    (err, result) => {
      console.log(`result:${result}`);
      if (result[0]) {
        return result[0].email;
      } else {
        return null;
      }
    }
  );
  db.query(sql, post, (err, result) => {
    if (err) {
      throw err;
    } else if (existEmail === null) {
      console.log(result);
      res.redirect('/member');
    } else if (existEmail) {
      res.send('email exist');
      //   res.redirect('/');
    }
  });
});

//Get Users
app.get('/getuser', (req, res) => {
  let sql = `SELECT * FROM user `;
  //   db.query(sql, (err, result) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(result);
  //     res.send('Posted fetched...');
  //   });
  db.query(`SELECT * FROM user WHERE email = "123@gmail.com"`, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result[0].email);
    res.send('Posted fetched...');
  });
});

//Get Single User
app.get('/getuser/:id', (req, res) => {
  let sql = `SELECT * FROM user WHERE email = ${req.params.id} `;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send('Posted fetched...');
  });
});

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
  res.status(err.status);
  res.render('error');
});

//run server
app.listen(port, () => {
  console.log(`The application is running on localhost: ${port}!`);
});

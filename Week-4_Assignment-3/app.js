//.env
require('dotenv').config();

//express
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const port = 3000;

//MySQL
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
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
  res.status(err.status);
  res.render('error');
});

//run server
app.listen(port, () => {
  console.log(`The application is running on localhost: ${port}!`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

//可以在第二個參數設定'pug'
//但是在treehouse的專案練習過了，想練習看看ejs，了解一下兩個比較熱門的方法!
app.set('view engine', 'ejs');

//設定 / route
const mainRoutes = require('./routes'); //index is default
app.use(mainRoutes);

//設定 /data route
const dataRouter = require('./routes/data');
app.use('/data', dataRouter);

//設定 /trackName route
const trackRouter = require('./routes/trackName');
app.use('/trackName', trackRouter);

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

//在設定的port運行，同時log一個開始運行的訊息在server
app.listen(port, () => {
  console.log(`The application is running on localhost: ${port}!`);
});

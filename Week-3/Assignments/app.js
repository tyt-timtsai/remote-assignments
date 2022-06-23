const express = require('express');

const app = express();
const port = 3000;

//可以在第二個參數設定'pug'
//但是在treehouse的專案練習過了，想練習看看ejs，了解一下兩個比較熱門的方法!
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { text: 'My Server!' });
});

//在設定的port運行，同時log一個開始運行的訊息在server
app.listen(port, () => {
  console.log(`The application is running on localhost: ${port}!`);
});

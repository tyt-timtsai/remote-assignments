const express = require('express');
const router = express.Router();

//前面研究了一下/:id和req.params，但在這裡可能還用不到，直接抓req.query就行了
router.get('/', (req, res) => {
  //抓取request query string中的number值
  const number = req.query.number;

  //判斷number的有無
  if (!number) {
    console.log(req.query);
    // res.send('Lack of Parameter');
    res.send(req.query);
  }

  //判斷number是否為大於零的整數
  //原本嘗試了typeof / Number() / typeof + parseInt()
  //但用這些方法還沒找到如何解決number等於英文字母時，如何判斷成string，而不是number。
  if (parseInt(number) > 0) {
    //先土法煉鋼，for loop去做總和
    //後續研究一下數字大時如何用空間換取時間，畢竟目前需要O(n)才可以
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    res.send(`<h1>Your input is : ${number}, and sums of 1 to ${number}: ${sum}</h1>`);
  } else {
    res.send('Wrong Parameter');
  }
});

module.exports = router;

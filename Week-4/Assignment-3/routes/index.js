const express = require('express');
const router = express.Router();

//render home page
router.get('/', (req, res) => {
  // console.log(req.body.email);
  // console.log(`query:${req.query}`);
  res.render('index.ejs');
  // res.redirect('/');
});

router.post('/', (req, res) => {
  // console.log(req.body.email);
  // console.log(req.query);
  // console.log(`post:${req.query.email}`);

  res.render('index.ejs');
  // res.render('index');
  // res.redirect('/');
});

//render member page
router.get('/member', (req, res) => {
  res.render('member');
});

module.exports = router;

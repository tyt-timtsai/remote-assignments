const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //request, response
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.get('/goodbye', (req, res) => {
  res.redirect('/goodbye');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

router.get('/data', (req, res) => {
  res.send('<h1>Lack of Parameter!</h1>');
});

module.exports = router;

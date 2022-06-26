const express = require('express');
const router = express.Router();

//render index.ejs
router.get('/', (req, res) => {
  res.render('index', { text: 'My Server!' });
});

//render myName.ejs
router.get('/myName', (req, res) => {
  const name = req.cookies.name;
  res.render('myName', { name: name });
});

router.post('/myName', (req, res) => {
  res.cookie('name', res.body.name);
  res.redirect('/myName');
});

module.exports = router;

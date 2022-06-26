const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //抓取request query string中的name
  const name = req.query.name;
  res.cookie('name', name);
  res.redirect('/myName');
});

router.post('/', (req, res) => {
  res.cookie('name', req.body.name);
  res.redirect('/myName');
});

module.exports = router;

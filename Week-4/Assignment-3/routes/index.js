const express = require('express');
const router = express.Router();

//render home page
router.get('/', (req, res) => {
  res.render('index.ejs');
});

//render member page
router.get('/member', (req, res) => {
  res.render('member');
});

module.exports = router;

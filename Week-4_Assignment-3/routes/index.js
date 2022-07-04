const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

//render home page
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  postController.createNewUser();
});

//render member page
router.get('/member', (req, res) => {
  res.render('member', { text: 'MySQL!' });
});

router.post('/member', (req, res) => {
  res.redirect('/member', { text: 'MySQL!' });
});

module.exports = router;

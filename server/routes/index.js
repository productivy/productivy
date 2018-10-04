const express = require('express'),
      router = express.Router(),
      { googleSignUp } = require('../controllers/users'),
      { getBook } = require('../controllers/books'),
      { googleAuth, isLogin } = require('../middlewares/auth');

/* GET home page. */
router

    .post('/google-signin',googleAuth, googleSignUp)

    .get('/books', getBook)

module.exports = router;
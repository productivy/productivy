const express = require('express'),
      router = express.Router(),
      { } = require('../controllers/index'),
      { googleSignUp } = require('../controllers/users'),
      { googleAuth, isLogin } = require('../middlewares/auth');

/* GET home page. */
router

    .post('/google-signin',googleAuth, googleSignUp)

module.exports = router;
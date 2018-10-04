const express = require('express'),
      router = express.Router(),
      { googleSignUp } = require('../controllers/users'),
      { getBook } = require('../controllers/books'),
      { googleAuth, isLogin } = require('../middlewares/auth'),
      AnimController = require('../controllers/anim'),
      boredController = require('../controllers/bored.js')

/* GET home page. */
router

    .post('/google-signin',googleAuth, googleSignUp)

    .get('/anim', AnimController.showAllFilm)

    .get('/activity',boredController.getRandomActivity)

    .get('/books', getBook)

module.exports = router;
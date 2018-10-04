const express = require('express'),
      router = express.Router(),
      { } = require('../controllers/index'),
      { googleSignUp } = require('../controllers/users'),
      { googleAuth, isLogin } = require('../middlewares/auth'),
      AnimController = require('../controllers/anim')
      boredController = require('../controllers/bored.js')

/* GET home page. */
router

    .post('/google-signin',googleAuth, googleSignUp)
    .get('/anim', AnimController.showAllFilm)

    .get('/activity',boredController.getRandomActivity)

module.exports = router;
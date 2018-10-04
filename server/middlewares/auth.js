require('dotenv').config()

const User = require('../models/users'),
  jwt = require('jsonwebtoken'),
  axios = require('axios'),
  CLIENT_ID = process.env.CLIENT_ID,
  {OAuth2Client} = require('google-auth-library'),
  client = new OAuth2Client(CLIENT_ID)

module.exports = {
  isLogin: function(req, res, next) {
    let token = req.headers.tokenjwt
    console.log('masuk middlewares/isLogin', token)
    if (token) {
      jwt.verify(token, process.env.AccKey, function(err, decoded) {
        if (!err) {
          User.findOne({
            _id: decoded.id
          })
            .then(function(user) {
              req.user = user
              next()
            })
            .catch(function() {
              res.status(500).json({
                message: `Log in first to use this application`
              })
            })
        } else {
          res.status(500).json({
            message: `Log in first to use this application`
          })
        }
      })
    }
  },

  googleAuth (req,res,next) {
    console.log('masuk middleware/googleAuth')
    let googleToken = req.body.googleToken
    let ticket = new Promise(function(resolve, reject) {
      client.verifyIdToken({
        idToken: googleToken,
        audience: CLIENT_ID
      }, function(err, data) {
        if (!err) {
          let payload = data.getPayload()
          let userid = payload['sub']
          resolve(userid)
        } else {
          reject(err)
        }
      })
    })
    .then (userid => {

      axios({
        method: 'GET',
        url: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${googleToken}`
      })
      .then(result => {
        req.body.name = result.data.name
        req.body.email = result.data.email
        next()
      })
      .catch(err => {
        res.status(500).json({
          message: `access denied`
        })
      })
    }) 
	}
}

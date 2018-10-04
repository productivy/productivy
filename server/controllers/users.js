require('dotenv').config()

const jwt = require('jsonwebtoken'),
      User = require('../models/users');


module.exports = {
      googleSignUp: (req, res) => {
            console.log('masuk controllers/users -> googleSignIn')
            User.findOne({
              email: req.body.email
            })
              .then(data => {
                if (!data || data === null) {
                  User.create({
                    name: req.body.name,
                    email: req.body.email
                  })
                    .then(user => {
                      jwt.sign({
                        id: user._id
                      }, process.env.AccKey,
                        function (err, token) {
                          res.status(200).json({
                            name: user.name,
                            token: token
                          })
                      })
                    })
                    .catch(err => {
                      res.status(500).json({
                        message: err.message
                      })
                    })
                } else {
                  jwt.sign({
                    id: data._id
                  }, process.env.AccKey,
                    function (err, token) {
                      res.status(200).json({
                        name: data.name,
                        token: token
                      })
                    }
                  )
                }
              })
              .catch(err => {
                  res.status(500).json({
                        message: err.message
                  })
            })
          }
}
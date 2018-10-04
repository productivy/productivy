require('dotenv').config()

const request = require('request'),
      accessToken = process.env.AccKey;

module.exports = {
    echo: (req, res) => {
        console.log ('connected to index')
    }

    
}
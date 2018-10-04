require('dotenv').config()

const accessToken = process.env.AccKey;

module.exports = {
    echo: (req, res) => {
        console.log ('connected to index')
    }

    
}
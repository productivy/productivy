require('dotenv').config()

const bookKey = process.env.BOOK_API,
     axios = require('axios');

module.exports = {
    echo: (req, res) => {
        console.log ('connected to index')
    },

    getBook: (req, res) => {
      let random = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))]
      console.log('------------------', random)
      axios({
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=${random}&key=${bookKey}`
      })
      .then(result => {
        console.log(result.data.items[0].volumeInfo)
      })
      .catch(err => {
        console.log(err)
      })
  } 
}
require('dotenv').config()

const bookKey = process.env.BOOK_API,
     axios = require('axios');

module.exports = {
    echo: (req, res) => {
        console.log ('connected to index')
    },

    getBook: (req, res) => {
      let random = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))]
      axios({
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=${random}&key=${bookKey}`
      })
      .then(result => {
        let data = result.data.items[0].volumeInfo
        let book = {}
        book.title = data.title
        book.authors = data.authors
        book.description = data.description
        book.imageLinks = data.imageLinks.thumbnail
        book.previewLink = data.previewLink

        res.status(200).json({
          book: book
        })
      })
      .catch(err => {
        console.log(err)
      })
  } 
}
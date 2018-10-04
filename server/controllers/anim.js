const axios = require('axios')

class Controller {

    static showAllFilm(req, res) {
        axios({
            url     : 'https://ghibliapi.herokuapp.com/films',
            method  : 'GET',
            headers : {
              'Content-Type': 'application/json'
            }
        })
            .then(data => {
              console.log(data);
              let films = data.data

              let randomIndex = Math.round(Math.random() * (films.length - 1))
              
              res.status(200).json({
                  data: films[randomIndex]
              })

            })
            .catch(error => {
              console.log(error);
              res.status(500).json({
                  message: error
              })
            })
          
    }
}

module.exports = Controller
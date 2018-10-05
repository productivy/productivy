const axios = require('axios')

module.exports = {

    getRandomActivity : (req,res)=>{

        axios({
            method:'get',
            url: 'http://boredapi.com/api/activity/',
        })
        .then((result) => {
            res.status(200).json(result.data)
            
        }).catch((err) => {
            res.status(400).json({message : 'eror kak'})
        });    
    },
    
    getRandomPic : (req,res)=>{


        res.status(200).json({imgUrl : 'https://picsum.photos/300/300/?random'})


    },

    getRandomJokes : (req,res)=>{

        axios({
            method:'get',
            url: 'https://geek-jokes.sameerkumar.website/api',
        })
        .then((result) => {
            res.status(200).json({data : result})
            
        }).catch((err) => {
            res.status(400).json({message : 'eror kak'})
        });    
    },
    


}
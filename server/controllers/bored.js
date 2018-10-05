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

        
        var unsplash = require('unsplash-source-node')
        var myUnsplash = new unsplash({random : true})
        myUnsplash.width = 600
        myUnsplash.height = 600
        var url = myUnsplash.get()

        res.status(200).json({data : url})


    }
    


}
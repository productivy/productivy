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
    } 
    


}
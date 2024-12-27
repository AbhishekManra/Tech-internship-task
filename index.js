
const express= require('express');
const app = express();
const Twitter = require('./Twittermodel')
const cors = require('cors')
const bodyparser = require('body-parser')
require('dotenv').config();
const {example} = require('./twitter')
const portfinder = require('portfinder')
const {connectdb} = require('./db')
app.use(cors({
    origin : ['http://127.0.0.1:5500','http://localhost:3000']
}));
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))
connectdb();
app.get('/whatshappening',example,async(req,res)=>{
    try {
        
        let arr = req.user;
        let twitter = await Twitter.create({
            nameoftrend1 : arr[0],
            nameoftrend2 : arr[1],
            nameoftrend3 : arr[2],
            nameoftrend4 : arr[3]
        })
        res.status(200).json({arr : arr})
    } catch (error) {
        res.status(400).send(error.message)   
    }
        
});
portfinder.getPortPromise()
    .then((port) => {
        app.listen(port,()=>{
            console.log(`listening on the :: ${port}`);
        })
    })
    .catch((err) => {
        console.log(err.message)
    });
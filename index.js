
const express= require('express');
const app = express();
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
app.get('/whatshappening',example);
portfinder.getPortPromise()
    .then((port) => {
        app.listen(port,()=>{
            console.log(`listening on the :: ${port}`);
        })
    })
    .catch((err) => {
        console.log(err.message)
    });
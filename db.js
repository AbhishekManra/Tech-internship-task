const mongoose = require('mongoose')

exports.connectdb = async()=>{
    mongoose.connect('mongodb+srv://Abhiman:Abhishek03@cluster02.5spc1jm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster02/Internship').then(()=>{
        console.log("Databse connected")
    }).catch(err=>{
        console.log(err.message)
    })
}
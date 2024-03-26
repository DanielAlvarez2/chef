
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true})) //access form data (body.xxx)
app.use(express.static('public')) //serve static files from public folder
app.set('view engine','ejs')


const PORT = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send(index.html)
})

mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`Express Server Listening on Port ${PORT}!`)
    })
})






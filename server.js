
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const itemRoutes = require('./routes/itemRoutes.js') 

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true})) //access form data (body.xxx)
app.use(express.static('public')) //serve static files from public folder
app.set('view engine','ejs')
app.use('/', itemRoutes)

const PORT = process.env.PORT || 4000


mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`Express Server Listening on Port ${PORT}!`)
    })
})






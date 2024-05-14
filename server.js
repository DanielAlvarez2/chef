
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')
const connectDB = require('./config/connectDB')
const itemRoutes = require('./routes/itemRoutes.js') 
const userRoutes = require('./routes/userRoutes.js')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/userModel.js')

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true})) //access form data (body.xxx)
app.use(express.static('public')) //serve static files from public folder
app.set('view engine','ejs')
app.use('/', itemRoutes)

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(User.serializeUser)
passport.deserializeUser(User.deserializeUser)

//passing current user info to all routes
app.use((req,res,next) => {
    res.locals.currentUser = req.user
    next()
})

passport.use(new LocalStrategy(User.authenticate()))

const PORT = process.env.PORT || 4000


mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`Express Server Listening on Port ${PORT}!`)
    })
})






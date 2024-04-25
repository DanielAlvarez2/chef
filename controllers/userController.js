const passport = require('passport')
const User = require('../models/userModel.js')

const loginPage = (req,res) =>{
    res.render('login.ejs')
}

const registerPage = (req,res) =>{
    res.render('register.ejs')
}

const loginUser = passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: false
})
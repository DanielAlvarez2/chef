const passport = require('passport')
const User = require('../models/userModel.js')

const loginPage = (req,res) =>{
    res.render('login.ejs')
}
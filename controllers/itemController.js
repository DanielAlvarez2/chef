const Item = require('../models/itemModel.js')
const multer = require('multer')

// multer config for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage: storage})

const getAllItems = async (req,res)=>{
    try{
        const items = await Item.find()
        res.render('index', {items:items})
    }catch(err){
        console.log(err)
    }
}

const uploadPage = (req,res)=>{
    res.render('upload')
}

const createItem = async (req,res)=>{
    try{
        const item = new Item({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename
    })

    await item.save()
    res.redirect('/')

    }catch(err){
        console.log(err)
    }
}

const editPage = async (req,res)=>{
    try {
        const item = await Item.findById(req.params.id)
        res.render('edit', {item:item})
    }catch(err){
        console.log(err)
    }
}

const updateItem = async (req,res)=>{
    try {
        await Item.findByIdAndUpdate(req.params.id,req.body)
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}

const deleteItem = async (req,res)=>{
    try {
        await Item.findByIdAndDelete(req.params.id)
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}

const loginPage = async (req,res)=>{
    try{
        res.render('login')
    }catch(err){
        console.log(err)
    }
}

const signupPage = async (req,res)=>{
    try{
        res.render('signup')
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getAllItems,
    upload,
    uploadPage,
    createItem,
    editPage,
    updateItem,
    deleteItem,
    loginPage,
    signupPage
}

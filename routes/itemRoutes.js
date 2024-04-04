const express = require('express')
const itemController = require('../controllers/itemController.js')
const router = express.Router()

router
    .route('/')
    .get(itemController.getAllItems)

router
    .route('/upload')
    .get(itemController.uploadPage)
    .post(itemController.upload.single('image'), itemController.createItem)

router
    .route('/edit/:id')
    .get(itemController.editPage)
    .post(itemController.updateItem)

router
    .route('/delete/:id')
    .post(itemController.deleteItem)

router
    .route('/login')
    .get(itemController.loginPage)

module.exports = router
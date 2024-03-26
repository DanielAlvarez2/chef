const express = require('express')
const itemController = require('../controllers/itemController.js')
const router = express.Router()

router
    .route('/')
    .get(itemController.getAllItems)

router
    .route('/upload')
    .get(itemController.uploadPage)

router
    .route('/edit/:id')
    .get(itemController.updateItem)

router
    .route('/delete/:id')
    .post(itemController.deleteItem)

module.exports = router
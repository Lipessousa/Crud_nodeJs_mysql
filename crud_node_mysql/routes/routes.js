const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController') 
const Controller = require('../controllers/Controller')

router.get('/migration', Controller.CreateTable)

router.get('/get', UserController.Read)
router.post('/post', UserController.Create)
router.put('/put', UserController.Update)
router.delete('/delete', UserController.Delete)

module.exports = router
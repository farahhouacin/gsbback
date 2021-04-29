const express = require('express')
const authenticationController = require('../controllers/authentication.controller')
let router = express()

router.post('/', authenticationController.searchByLogin)    

module.exports = router

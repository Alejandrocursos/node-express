const express = require('express')

const controller = require('../controllers/main')

const router = express.Router()

const path = '/'

router.get(
    `/${path}`,
    controller.getData
)


module.exports = router
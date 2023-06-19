const express = require('express')

const controller = require('../controllers/about')

const router = express.Router()

const path = 'about'

router.get(
    `/${path}`,
    controller.getData
)


module.exports = router
const express = require('express')

const controller = require('../controllers/contact')

const router = express.Router()

const path = 'contact'

router.get(
    `/${path}`,
    controller.getData
)


module.exports = router
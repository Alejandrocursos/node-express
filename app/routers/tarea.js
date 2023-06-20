const express = require('express')

const controller = require('../controllers/tarea')



const router = express.Router()

const path = 'tarea'


router.get(
    '/tarea/:id',
    controller.id,
)

router.get(
    '/tarea',
    controller.get,
)

router.post(
    '/tarea/:title/:description',
    controller.post,
)

router.put(
    '/tarea/:id/:title/:description',
    controller.update,
)

router.delete(
    '/tarea/:id',
    controller.delete,
)


module.exports = router
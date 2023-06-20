const express = require('express');
const csurf = require('csurf');

const controller = require('../controllers/task_create');

const router = express.Router();

const path = 'task_create'

router.post(
    `/${path}`,
    controller.saveData
);

router.get(
    `/${path}`,
    csurf(),
    controller.getData,
    
);

module.exports = router;
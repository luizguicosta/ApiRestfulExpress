const express = require('express');
const controller = require('../controller/task');

const router = express.Router();

//endpoints
router.get('/task/:id', controller.getTask);
router.get('/task', controller.getAllTask);
router.post('/task', controller.createTask);
router.put('/task/:id', controller.updateTask);
router.delete('/task/:id', controller.deleteTask);

module.exports = router;

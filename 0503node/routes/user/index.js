const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.get('/list', userController.list)
router.get('/view', userController.view)
router.get('/update', userController.update)
router.get('/write', userController.write)

module.exports = router;
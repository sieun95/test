const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const userRouter = require('./user')

router.use('/board', boardRouter);
router.use('/user', userRouter);

module.exports = router;
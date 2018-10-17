const express = require('express');
const router = express.Router();
const { usersRouter } = require('./index');

router.use('/users', usersRouter);


module.exports = router;
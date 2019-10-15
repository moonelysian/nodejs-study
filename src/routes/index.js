const { Router } = require('express');
const users = require('./users');
const books = require('./books');
const borrows = require('./borrows')
//const auth = require('../middlewares/auth')


const router = Router();

// middleware
//router.use(auth);

router.use('/users', users);
router.use('/books', books);
router.use('/borrows', borrows);

module.exports = router;
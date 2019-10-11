const { Router } = require('express');
const users = require('./users');
const books = require('./books');
//const auth = require('../middlewares/auth')


const router = Router();

// middleware
//router.use(auth);

router.use('/users', users);
router.use('/books', books);

module.exports = router;
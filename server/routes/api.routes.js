const express = require('express');
const router = express.Router();

const login = require('../controllers/login.controller');
const signup = require('../controllers/signup.controller');
const books = require('../controllers/book.controller');

router.use('/login', login);
router.use('/signup', signup);
router.use('/books', books);

module.exports = router;

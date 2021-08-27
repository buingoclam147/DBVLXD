const express = require('express')
const router = express.Router();

const { login, loginCustomer } = require('../controllers/auth.controller');

router.post('/login', login);
router.post('/loginCustomer', loginCustomer);
module.exports = router;
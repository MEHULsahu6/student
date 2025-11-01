const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth/auth.controller');
router.get('/auth-test', authController);

module.exports = router;
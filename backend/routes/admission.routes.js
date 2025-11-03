const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissions/addmission.contoller.js');

router.post('/admissions', admissionController.addmission);

module.exports = router;

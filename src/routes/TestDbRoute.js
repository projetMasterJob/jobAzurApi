const express = require('express');
const router = express.Router();
const TestDbController = require('../controllers/TestDbController');

router.get('/', TestDbController.getLog);

module.exports = router;
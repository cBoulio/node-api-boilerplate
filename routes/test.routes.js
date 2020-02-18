const express = require('express');
const router = express.Router();

const TestController = require('../controllers/test.controller');

router.get('/testRoute', TestController.testRoute);

module.exports = router;
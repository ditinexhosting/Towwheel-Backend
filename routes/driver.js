const express = require('express');
const router = express.Router();

const { VerifyToken } = require('../middlewares');

const Controllers = require('../controllers')
const Driver = Controllers.Driver


router.get('/get-nearest-ride-request',Driver.getNearestRideRequest);


module.exports = router;
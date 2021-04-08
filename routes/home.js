const express = require('express');
const router = express.Router();

const { VerifyToken } = require('../middlewares');

const Controllers = require('../controllers')
const Home = Controllers.Home


router.get('/get-nearest-tows',Home.getNearestTows);

// Protect router after that
router.use(VerifyToken);

router.post('/create-ride-request',Home.createRideRequest);

module.exports = router;
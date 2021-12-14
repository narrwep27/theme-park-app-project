const router = require('express').Router();
const controller = require('../controllers/rideController');

router.get('/', controller.getAllRides);

module.exports = router;

const router = require('express').Router();
const controller = require('../controllers/entryFeeController');

router.get('/:age', controller.getEntryFeeByAge);
router.get('/', controller.getAllEntryFees);

module.exports = router;

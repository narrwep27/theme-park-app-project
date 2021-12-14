const router = require('express').Router();
const controller = require('../controllers/visitorController');

router.post('/', controller.insertVisitor);

module.exports = router;

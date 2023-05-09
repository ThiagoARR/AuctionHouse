const itemController = require('../controllers/item.controller');
const router = require('express').Router();

router.get('/getItem', itemController.getItem);
router.get('/getAllItem', itemController.getAllItem);
router.get('/createItem', itemController.createItem)

module.exports = router;
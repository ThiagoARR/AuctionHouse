const itemController = require('../controllers/item.controller');
const router = require('express').Router();

router.get('/getItem', itemController.getItem);
router.get('/getAllItem', itemController.getAllItem);
router.get('/updateOrCreateItem', itemController.updateOrCreateItem)
router.get('/updateOrCreateItemMedia', itemController.updateOrCreateItemMedia)

module.exports = router;
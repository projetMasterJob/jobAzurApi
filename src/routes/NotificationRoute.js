const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController');

router.get('/', NotificationController.getAll);
router.get('/:id', NotificationController.getOne);
router.post('/', NotificationController.create);
router.put('/:id', NotificationController.update);
router.delete('/:id', NotificationController.remove);

module.exports = router;
